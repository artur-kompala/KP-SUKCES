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

// Sprawdzanie połączenia
if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

// Zapytanie SQL do dodania rekordu do tabeli 'images'
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
