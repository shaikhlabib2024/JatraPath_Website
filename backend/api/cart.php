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

$sql = "
SELECT 
    c.id as cart_id,
    c.persons,
    d.id,
    d.name,
    d.location,
    d.image,
    d.price,
    d.days
FROM cart c
JOIN destinations d ON c.destination_id = d.id
WHERE c.user_id = ?
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();

$result = $stmt->get_result();

$cart = [];

while ($row = $result->fetch_assoc()) {
    $cart[] = $row;
}

echo json_encode([
    "status" => "success",
    "cart" => $cart
]);
?>