<?php
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

require_once('db.php');

$stmt = $pdo->prepare("SELECT * FROM celebres WHERE id = :id");
$stmt->execute(['id' => $id]);
$celeb = $stmt->fetch(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $celeb ? htmlspecialchars($celeb['nom']) : 'Célébrité introuvable' ?></title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body>
    <header>
        <form action="recherche.php" method="GET" class="search-bar">
            <input type="text" name="search" id="search" placeholder="Rechercher..." autocomplete="off">
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            <ul class="suggestions"></ul>
        </form>
    </header>

    <main class="element-page">
        <?php if (!$celeb): ?>
            <p>Célébrité introuvable.</p>
        <?php else: ?>
            <h2><?= htmlspecialchars($celeb['nom']) ?></h2>
            <p><?= htmlspecialchars($celeb['dates'] ?? '') ?></p>
            <?php if (!empty($celeb['image'])): ?>
                <img src="<?= htmlspecialchars($celeb['image']) ?>" alt="<?= htmlspecialchars($celeb['nom']) ?>" class="element-image">
            <?php endif; ?>
            <p><?= nl2br(htmlspecialchars($celeb['description'] ?? '')) ?></p>
        <?php endif; ?>
    </main>

    <script src="main.js"></script>
</body>

</html>