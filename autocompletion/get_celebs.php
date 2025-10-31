<?php
header('Content-Type: application/json');

try {
    $db = new PDO('mysql:host=localhost;dbname=autocompletion;charset=utf8', 'root', 'root');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = $db->query('SELECT id, nom FROM celebres');
    $results = $query->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($results);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
