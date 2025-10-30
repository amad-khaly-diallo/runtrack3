<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Détail de l’élément</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <form action="recherche.php" method="GET" class="search-bar">
            <input type="text" name="search" id="search" placeholder="Rechercher..." autocomplete="off">
            <button type="submit">🔍</button>
            <ul class="suggestions"></ul>
        </form>
    </header>

    <main class="element-page">
        <h2>Albert Einstein</h2>
        <p>1879 - 1955</p>
        <img src="assets/images/einstein.jpg" alt="Albert Einstein" class="element-image">
        <p>Physicien théoricien, célèbre pour la théorie de la relativité...</p>
    </main>

</body>

</html>