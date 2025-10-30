<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recherche</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <form action="recherche.php" method="GET" class="search-bar">
            <input type="text" name="search" id="search" placeholder="Rechercher..." autocomplete="off">
            <button type="submit">🔍</button>

            <!-- suggestions -->
            <ul class="suggestions">
                <li>Napoléon Bonaparte</li>
                <li>Napoléon III</li>
                <li class="divider"></li>
                <li>Charles de Gaulle</li>
                <li>Alexandre le Grand</li>
            </ul>

        </form>
    </header>

    <main class="home">
        <h1>Explorez les plus grands célèbres de l’histoire</h1>
        <p>Tapez un nom pour découvrir leur biographie et leurs exploits.</p>
    </main>

</body>

</html>