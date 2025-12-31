<?php
header("Content-Type: application/json");
require_once __DIR__ . '/../config/db.php';

$schemaFile = __DIR__ . '/../../database/sqlite_schema.sql';

if (!file_exists($schemaFile)) {
    echo json_encode(['error' => 'Schema file not found at ' . $schemaFile]);
    exit;
}

$sql = file_get_contents($schemaFile);

try {
    $statements = explode(';', $sql);
    foreach ($statements as $statement) {
        $trimmed = trim($statement);
        if (!empty($trimmed)) {
            $pdo->exec($trimmed);
        }
    }
    echo json_encode(['success' => true, 'message' => 'SQLite database initialized successfully']);
} catch (Exception $e) {
    echo json_encode(['error' => 'Initialization failed: ' . $e->getMessage()]);
}
?>