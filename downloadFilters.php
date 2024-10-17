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

// Zapytanie SQL do pobrania unikalnych wartości z kolumn city, date, descript
$sql = "SELECT DISTINCT city, date, descript FROM images";
$result = $conn->query($sql);

// Tablice do przechowywania unikalnych wartości
$cities = [];
$dates = [];
$descripts = [];

if ($result->num_rows > 0) {
    // Przetwarzanie wyników i dodawanie unikalnych wartości do tablic
    while($row = $result->fetch_assoc()) {
        if (!in_array($row['city'], $cities)) {
            $cities[] = $row['city'];
        }
        if (!in_array($row['date'], $dates)) {
            $dates[] = $row['date'];
        }
        if (!in_array($row['descript'], $descripts)) {
            $descripts[] = $row['descript'];
        }
    }
} else {
    echo json_encode([]);
    exit();
}

// Przygotowanie odpowiedzi w formacie JSON
$response = [
    [
        "name" => "city",
        "options" => $cities
    ],
    [
        "name" => "date",
        "options" => $dates
    ],
    [
        "name" => "descript",
        "options" => $descripts
    ]
];

// Zwróć wyniki w formacie JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
echo json_encode($response);

// Zamknięcie połączenia
$conn->close();
?>
