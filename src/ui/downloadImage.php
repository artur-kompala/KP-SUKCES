<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Ustawienia połączenia z bazą danych
$servername = "localhost";
$username = "kpsukces_adminik";
$password = "Bazik@Suk24!";
$dbname = "kpsukces_new";

// Tworzenie połączenia
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzanie połączenia
if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

$sql = "SELECT * FROM images";
$result = $conn->query($sql);

$images = [];

if ($result->num_rows > 0) {
    // Zwracanie wszystkich obrazów w formacie JSON
    while($row = $result->fetch_assoc()) {
        // Zakładamy, że 'img' to dane binarne, a 'title' to tytuł zdjęcia
        $images[] = [
            'src' => 'data:image/jpeg;base64,' . base64_encode($row['img']),
            'descript' => $row['descript'], // Zakładam, że masz kolumnę 'title' dla nazw zdjęć
            'date' => $row['date'], // Zakładam, że masz kolumnę 'title' dla nazw zdjęć
            'city' => $row['city'], // Zakładam, że masz kolumnę 'title' dla nazw zdjęć
        ];
    }
} else {
    echo json_encode([]);
    exit();
}

// Zwróć wyniki w formacie JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
echo json_encode($images);

// Zamknięcie połączenia
$conn->close();
?>
