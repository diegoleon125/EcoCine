<?php
header("Content-Type: application/json; charset=UTF-8");

$host = "127.0.0.1;port=8080"; 
$dbname = "ecocine";
$username = "root";
$password = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Fallo de conexión a la BD: " . $e->getMessage()]);
    exit;
}
