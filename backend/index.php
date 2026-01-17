<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require_once 'config/db.php';

$action = $_GET['action'] ?? '';
$input = json_decode(file_get_contents('php://input'), true);

switch ($action) {
    case 'login':
    case 'manage_user':
        require 'routes/users.php';
        break;
    case 'manage_subject':
        require 'routes/subjects.php';
        break;
    case 'get_all':
    case 'attendance':
        require 'routes/dashboard.php';
        break;
    default:
        echo json_encode(['error' => 'Invalid action']);
        break;
}
?>