<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

session_start();
include "../config/db.php";

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "unauthorized"]);
    exit();
}

$user_id = $_SESSION['user_id'];
$destination_id = $_POST['destination_id'] ?? null;

if (!$destination_id) {
    echo json_encode(["status" => "error", "message" => "No destination"]);
    exit();
}

/* check if already exists */
$check = "SELECT id, persons FROM cart WHERE user_id = ? AND destination_id = ?";
$stmt = $conn->prepare($check);
$stmt->bind_param("ii", $user_id, $destination_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    /* already in cart → increase quantity */
    $row = $result->fetch_assoc();
    $newPersons = $row['persons'] + 1;

    $update = "UPDATE cart SET persons = ? WHERE id = ?";
    $stmt2 = $conn->prepare($update);
    $stmt2->bind_param("ii", $newPersons, $row['id']);
    $stmt2->execute();

    echo json_encode(["status" => "updated"]);
} else {
    /* insert new item */
    $insert = "INSERT INTO cart (user_id, destination_id, persons) VALUES (?, ?, 1)";
    $stmt2 = $conn->prepare($insert);
    $stmt2->bind_param("ii", $user_id, $destination_id);

    if ($stmt2->execute()) {
        echo json_encode(["status" => "added"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}
?>