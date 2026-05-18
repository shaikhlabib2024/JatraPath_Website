<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include "../config/db.php";

/* LOGIN CHECK */
if (!isset($_SESSION['user_id'])) {

    echo json_encode([
        "status" => "not_logged_in"
    ]);

    exit();
}

$user_id = $_SESSION['user_id'];

$destination_id = $_POST['destination_id'] ?? '';

if (!$destination_id) {

    echo json_encode([
        "status" => "missing_destination"
    ]);

    exit();
}

/* CHECK IF EXISTS */
$check = $conn->prepare("
    SELECT id, persons
    FROM cart
    WHERE user_id = ?
    AND destination_id = ?
");

$check->bind_param("ii", $user_id, $destination_id);

$check->execute();

$result = $check->get_result();

/* UPDATE IF EXISTS */
if ($result->num_rows > 0) {

    $row = $result->fetch_assoc();

    $newPersons = $row['persons'] + 1;

    $update = $conn->prepare("
        UPDATE cart
        SET persons = ?
        WHERE id = ?
    ");

    $update->bind_param("ii", $newPersons, $row['id']);

    $update->execute();

    echo json_encode([
        "status" => "updated"
    ]);

} else {

    /* INSERT NEW */
    $insert = $conn->prepare("
        INSERT INTO cart (
            user_id,
            destination_id,
            persons
        )
        VALUES (?, ?, 1)
    ");

    $insert->bind_param("ii", $user_id, $destination_id);

    if ($insert->execute()) {

        echo json_encode([
            "status" => "added"
        ]);

    } else {

        echo json_encode([
            "status" => "error",
            "message" => $insert->error
        ]);
    }
}
?>