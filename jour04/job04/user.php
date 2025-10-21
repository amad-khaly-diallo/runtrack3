<?php
define('localhost', 'localhost');
define('username', 'root');
define('password', 'root');
define('database', 'utilisateurs');
try {
    $connect =  new PDO("mysql:host=".localhost.";dbname=".database, username, password);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

function getUsers($connect) {
    $stmt = $connect->prepare("SELECT * FROM users");
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
$users = getUsers($connect);

header('Content-Type: application/json');
echo json_encode($users);