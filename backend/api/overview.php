<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

session_start();

include "../config/db.php";

/* ---------------- CHECK LOGIN ---------------- */
if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        "status" => "unauthorized"
    ]);
    exit();
}

$user_id = $_SESSION['user_id'];

/* ---------------- USER INFO ---------------- */
$userSql = "SELECT id, name, email FROM users WHERE id = ?";
$stmt = $conn->prepare($userSql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$user = $stmt->get_result()->fetch_assoc();

/* ---------------- CART COUNT ---------------- */
$cartSql = "SELECT COUNT(*) as total FROM cart WHERE user_id = ?";
$stmt = $conn->prepare($cartSql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$cartCount = $stmt->get_result()->fetch_assoc();

/* ---------------- ORDERS COUNT ---------------- */
$orderSql = "SELECT COUNT(*) as total FROM orders WHERE user_id = ?";
$stmt = $conn->prepare($orderSql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$orderCount = $stmt->get_result()->fetch_assoc();

/* ---------------- GIFT CARD COUNT (OPTIONAL) ---------------- */
$giftSql = "SELECT COUNT(*) as total FROM user_giftcards WHERE user_id = ?";
$stmt = $conn->prepare($giftSql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$giftCount = $stmt->get_result()->fetch_assoc();

/* ---------------- RESPONSE ---------------- */
echo json_encode([
    "status" => "success",
    "user" => $user,
    "stats" => [
        "cart_items" => $cartCount["total"] ?? 0,
        "orders" => $orderCount["total"] ?? 0,
        "giftcards" => $giftCount["total"] ?? 0
    ]
]);
?>