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

$id = $_POST['id'] ?? '';
$persons = $_POST['persons'] ?? 1;

if (!$id) {

    echo json_encode([
        "status" => "missing_id"
    ]);

    exit();
}

/* UPDATE */
$query = $conn->prepare("
    UPDATE cart
    SET persons = ?
    WHERE id = ?
");

$query->bind_param("ii", $persons, $id);

if ($query->execute()) {

    echo json_encode([
        "status" => "success"
    ]);

} else {

    echo json_encode([
        "status" => "error",
        "message" => $query->error
    ]);
}
?>