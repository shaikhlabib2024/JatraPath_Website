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

/* CHECK LOGIN */
if (!isset($_SESSION['user_id'])) {

    echo json_encode([
        "status" => "error",
        "message" => "User not logged in"
    ]);

    exit();
}

$user_id = $_SESSION['user_id'];

$title = $_POST['title'] ?? '';
$price = $_POST['price'] ?? 0;
$category = $_POST['category'] ?? '';

/* INSERT ORDER */
$sql = "INSERT INTO giftcard_orders
(user_id, title, category, price)
VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "issi",
    $user_id,
    $title,
    $category,
    $price
);

if ($stmt->execute()) {

    echo json_encode([
        "status" => "success"
    ]);

} else {

    echo json_encode([
        "status" => "error",
        "message" => $stmt->error
    ]);
}
?>