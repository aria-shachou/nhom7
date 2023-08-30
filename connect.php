<?php
$host = "localhost";
$username = "root";
$password = "123456";
$dbname = "quanlythanhvien";
$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ket noi khong thanh cong" . $conn->connect_error);
}

echo "Ket noi thanh cong";
echo "<pre>";
