<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Résultats de recherche</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <form action="recherche.php" method="GET" class="search-bar">
            <input type="text" name="search" id="search" placeholder="Rechercher..." value="<?= htmlspecialchars($_GET['search'] ?? '') ?>" autocomplete="off">
            <button type="submit">🔍</button>
            <ul class="suggestions"></ul>
        </form>
    </header>

    <main class="results">
        <h2>Résultats pour : <?= htmlspecialchars($_GET['search'] ?? '') ?></h2>

        <div class="result-list">
            <!-- Exemple (tu rempliras avec PHP plus tard) -->
            <a href="element.php?id=1" class="result-item">
                <h3>Napoléon Bonaparte</h3>
                <p>1769 - 1821</p>
                <p>Empereur français, célèbre pour ses conquêtes en Europe et ses réformes...</p>
            </a>

        </div>
    </main>
</body>

</html>