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

$cart_id = $_POST['cart_id'];
$persons = $_POST['persons'];

$sql = "UPDATE cart SET persons = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $persons, $cart_id);

if ($stmt->execute()) {
    echo json_encode(["status" => "updated"]);
} else {
    echo json_encode(["status" => "error"]);
}
?>