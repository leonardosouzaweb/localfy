<?php
    // Obtém a rota atual
    $currentRoute = $_SERVER['REQUEST_URI'];

    // Define o título e a descrição padrões
    $title = "Localfy | Impulsionando negócios locais";
    $description = "A sua empresa na web";
    $canonicalUrl = "https://localfy.com.br";

    // Verifica a rota e ajusta o título e a descrição conforme necessário
    switch ($currentRoute) {
        case '/quem-somos':
            $title = "Quem somos | Localfy";
            $description = "Obtenha ajuda sobre como impulsionar seu negócio com Localfy";
            $canonicalUrl = "https://localfy.com.br/quem-somos";
            break;
    }

    // Imprime as meta tags com os valores dinâmicos
    echo '<title>' . htmlspecialchars($title) . '</title>';
    echo '<meta charset="UTF-8">';
    echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo '<meta name="description" content="' . htmlspecialchars($description) . '">';
    echo '<meta property="og:title" content="' . htmlspecialchars($title) . '">';
    echo '<meta property="og:description" content="' . htmlspecialchars($description) . '">';
    echo '<meta property="og:url" content="' . htmlspecialchars($canonicalUrl) . '">';
    echo '<meta property="og:type" content="website">';
    echo '<meta property="og:site_name" content="Localfy">';
    echo '<meta property="og:image" content="https://localfy.com.br/assets/metaog.jpg">';
    echo '<meta name="robots" content="index, follow">';
    echo '<link rel="canonical" href="' . htmlspecialchars($canonicalUrl) . '">';
    echo '<link rel="icon" type="image/png" href="assets/favicon.png">';
    echo '<link rel="stylesheet" href="css/style.css">';
    echo '<link rel="stylesheet" href="css/aos.css">';
    echo '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet">';
    echo '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">';
    ?>

    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4HHTPYTWK9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4HHTPYTWK9');
</script>