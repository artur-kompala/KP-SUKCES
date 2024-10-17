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

// Sprawdzenie, czy nagłówek city został ustawiony
$city = isset($_GET['city']) ? $_GET['city'] : null;

if ($city) {
    // Przygotowane zapytanie, aby zabezpieczyć przed SQL Injection
    $stmt = $conn->prepare("SELECT * FROM images WHERE city = ?");
    $stmt->bind_param("s", $city); // 's' oznacza, że parametry są typu string
} else {
    // Jeśli city nie jest ustawione, zwróć wszystkie obrazy
    $stmt = $conn->prepare("SELECT * FROM images");
}

$stmt->execute();
$result = $stmt->get_result();

$images = [];

if ($result->num_rows > 0) {
    // Zwracanie wszystkich obrazów w formacie JSON
    while ($row = $result->fetch_assoc()) {
        // Zakładamy, że 'img' to dane binarne, a 'descript' to opis zdjęcia
        $images[] = [
            'src' => 'data:image/jpeg;base64,' . base64_encode($row['img']),
            'descript' => $row['descript'], // Zakładam, że masz kolumnę 'descript' dla opisów zdjęć
            'date' => $row['date'], // Zakładam, że masz kolumnę 'date' dla dat zdjęć
            'city' => $row['city'], // Zakładam, że masz kolumnę 'city'
        ];
    }
}

// Zwróć wyniki w formacie JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
echo json_encode($images);

// Zamknięcie połączenia
$stmt->close();
$conn->close();
?>
