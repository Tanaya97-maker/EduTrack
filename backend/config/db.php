<?php
// Load .env
$envPath = __DIR__ . '/../.env';
if (file_exists($envPath)) {
    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && substr($line, 0, 1) !== '#') {
            list($name, $value) = explode('=', $line, 2);
            putenv(trim($name) . '=' . trim($value));
        }
    }
}

$dbType = getenv('DB_TYPE') ?: 'mysql';

try {
    if ($dbType === 'sqlite') {
        $dbRelativePath = getenv('DB_PATH') ?: '../../database/edutrack.db';
        $dbPath = realpath(__DIR__ . DIRECTORY_SEPARATOR . $dbRelativePath);

        if (!$dbPath) {
            $dbPath = __DIR__ . DIRECTORY_SEPARATOR . $dbRelativePath;
        }

        $pdo = new PDO("sqlite:$dbPath");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $pdo->exec("PRAGMA foreign_keys = ON;");
    } else {
        $host = getenv('DB_HOST') ?: '127.0.0.1';
        $port = getenv('DB_PORT') ?: ($dbType === 'pgsql' ? '5432' : '3306');
        $db = getenv('DB_NAME') ?: 'edutrack_db';
        $user = getenv('DB_USER') ?: 'root';
        $pass = getenv('DB_PASS') ?: '';
        $charset = 'utf8mb4';

        if ($dbType === 'pgsql') {
            $dsn = "pgsql:host=$host;port=$port;dbname=$db";
        } else {
            $dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
        }

        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];
        $pdo = new PDO($dsn, $user, $pass, $options);
    }
} catch (\PDOException $e) {
    header('Content-Type: application/json', true, 500);
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
    exit;
}
?>