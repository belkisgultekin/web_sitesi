<<<<<<< HEAD
<!DOCTYPE html> 
<html> <body>

<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Tek Sayfada Tablo Oluşturma</title>
</head>
<body>

<h2>Tablo Oluşturma Formu</h2>

<form action="" method="post">
    <label>Satır Sayısı:</label><br>
    <input type="number" name="satir" min="1" required><br><br>

    <label>Sütun Sayısı:</label><br>
    <input type="number" name="sutun" min="1" required><br><br>

    <button type="submit">Oluştur</button>
</form>

<hr>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Formdan gelen değerler
    $satir = $_POST['satir'];
    $sutun = $_POST['sutun'];

    // Tablo başlığı
    echo "<h3>Oluşturulan Tablo ($satir x $sutun)</h3>";

    // Tabloyu oluştur
    echo "<table border='1' cellpadding='10' cellspacing='0'>";

    for ($i = 0; $i < $satir; $i++) {
        echo "<tr>";
        for ($j = 0; $j < $sutun; $j++) {

            // Her hücreye rastgele sayı (1–100)
            $sayi = rand(1, 100);

            echo "<td>$sayi</td>";
        }
        echo "</tr>";
    }

    echo "</table>";
}
?>

</body>
=======
<!DOCTYPE html> 
<html> <body>

<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Tek Sayfada Tablo Oluşturma</title>
</head>
<body>

<h2>Tablo Oluşturma Formu</h2>

<form action="" method="post">
    <label>Satır Sayısı:</label><br>
    <input type="number" name="satir" min="1" required><br><br>

    <label>Sütun Sayısı:</label><br>
    <input type="number" name="sutun" min="1" required><br><br>

    <button type="submit">Oluştur</button>
</form>

<hr>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Formdan gelen değerler
    $satir = $_POST['satir'];
    $sutun = $_POST['sutun'];

    // Tablo başlığı
    echo "<h3>Oluşturulan Tablo ($satir x $sutun)</h3>";

    // Tabloyu oluştur
    echo "<table border='1' cellpadding='10' cellspacing='0'>";

    for ($i = 0; $i < $satir; $i++) {
        echo "<tr>";
        for ($j = 0; $j < $sutun; $j++) {

            // Her hücreye rastgele sayı (1–100)
            $sayi = rand(1, 100);

            echo "<td>$sayi</td>";
        }
        echo "</tr>";
    }

    echo "</table>";
}
?>

</body>
>>>>>>> 6322c52c6a97d74345d1dd0286f55ec4721a20f2
</html>