<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recherche</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body>
    <header>
        <form action="recherche.php" method="GET" class="search-bar">
            <input type="text" name="search" id="search" placeholder="Rechercher..." autocomplete="off">
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>

            <!-- suggestions -->
            <ul class="suggestions">
            </ul>

        </form>
    </header>

    <main class="home">
        <h1>Plongez dans l’histoire des plus grandes légendes</h1>
        <p>Entrez un nom et découvrez le parcours de celles et ceux qui ont marqué le monde.</p>
    </main>

    <script src="main.js"></script>
</body>

</html>