<?php
$search = isset($_GET['search']) ? trim($_GET['search']) : '';
require_once('db.php');

$results_exact = [];
$results_fuzzy = [];

if (!empty($search)) {
    
    $stmt_exact = $pdo->prepare("SELECT * FROM celebres WHERE nom LIKE :search");
    $stmt_exact->execute(['search' => "%$search%"]);
    $results_exact = $stmt_exact->fetchAll(PDO::FETCH_ASSOC);

    $pattern = '%' . implode('%', str_split($search)) . '%';
    $stmt_fuzzy = $pdo->prepare("SELECT * FROM celebres WHERE nom LIKE :pattern");
    $stmt_fuzzy->execute(['pattern' => $pattern]);
    $results_fuzzy = $stmt_fuzzy->fetchAll(PDO::FETCH_ASSOC);

    $results_fuzzy = array_filter($results_fuzzy, function($fuzzy) use ($results_exact) {
        foreach ($results_exact as $exact) {
            if ($exact['id'] === $fuzzy['id']) return false;
        }
        return true;
    });
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Résultats de recherche</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body>
    <header>
        <form action="recherche.php" method="GET" class="search-bar">
            <input type="text" name="search" id="search" placeholder="Rechercher..." value="<?= htmlspecialchars($search) ?>" autocomplete="off">
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            <ul class="suggestions"></ul>
        </form>
    </header>

<main class="results">
    <h2>Résultats pour : <?= htmlspecialchars($search) ?></h2>

    <div class="result-list">
        <?php if (empty($results_exact) && empty($results_fuzzy)): ?>
            <p>Aucun résultat trouvé.</p>
        <?php else: ?>
            <?php if (!empty($results_exact)): ?>
                <h3>Résultats exacts :</h3>
                <?php foreach ($results_exact as $r): ?>
                    <a href="element.php?id=<?= $r['id'] ?>" class="result-item">
                        <h4><?= htmlspecialchars($r['nom']) ?></h4>
                        <p><?= htmlspecialchars($r['description']) ?></p>
                    </a>
                <?php endforeach; ?>
            <?php endif; ?>

            <?php if (!empty($results_fuzzy)): ?>
                <h3>Résultats similaires :</h3>
                <?php foreach ($results_fuzzy as $r): ?>
                    <a href="element.php?id=<?= $r['id'] ?>" class="result-item">
                        <h4><?= htmlspecialchars($r['nom']) ?></h4>
                        <p><?= htmlspecialchars($r['description']) ?></p>
                    </a>
                <?php endforeach; ?>
            <?php endif; ?>
        <?php endif; ?>
    </div>
</main>


    <script src="main.js"></script>
</body>

</html>
