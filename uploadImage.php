<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Ustawienia połączenia z bazą danych
$servername = "localhost"; // jeśli hosting jest współdzielony, może być to 'localhost'
$username = "kpsukces_adminik";
$password = "Bazik@Suk24!";
$dbname = "kpsukces_new";

// Tworzenie połączenia
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Pobieranie danych z formularza
    $desc = $_POST['desc'];
    $city = $_POST['city'];
    $image = $_FILES['image']['tmp_name'];
    
    // Odczyt pliku
    $img = addslashes(file_get_contents($image));

    // Wstawienie danych do bazy
    $sql = "INSERT INTO images (city, descript, img) VALUES ('$city','$desc','$img')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Obraz zapisany w bazie danych.";
    } else {
        echo "Błąd: " . $conn->error;
    }
}

// Zamknięcie połączenia
$conn->close();
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dodawanie obrazu</title>
</head>
<body>

<h2>Dodaj nowy obraz</h2>

<form action="" method="POST" enctype="multipart/form-data">
    <label for="city">Miasto:</label>
    <input type="text" id="city" name="city" required><br><br>

    <label for="desc">Opis:</label>
    <input type="text" id="desc" name="desc" required><br><br>

    <label for="image">Wybierz obraz:</label>
    <input type="file" id="image" name="image" accept="image/*" required><br><br>

    <input type="submit" value="Wyślij">
</form>

</body>
</html>

