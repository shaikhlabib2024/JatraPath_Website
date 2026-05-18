<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");
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

/* FETCH CART */
$query = $conn->prepare("
    SELECT
        cart.id,
        cart.persons,
        destinations.name,
        destinations.location,
        destinations.price,
        destinations.image,
        destinations.days
    FROM cart
    JOIN destinations
    ON cart.destination_id = destinations.id
    WHERE cart.user_id = ?
");

$query->bind_param("i", $user_id);

$query->execute();

$result = $query->get_result();

$cart = [];

while ($row = $result->fetch_assoc()) {
    $cart[] = $row;
}

echo json_encode([
    "status" => "success",
    "cart" => $cart
]);
?>