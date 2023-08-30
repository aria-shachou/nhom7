<?php 
require './connect.php';

if(isset($_POST['btn-reg'])) {
    echo "<pre>";
    print_r($_POST);
    $id = $_POST['ma'];
    $name = $_POST['hoTen'];
    $email = $_POST['email'];
    $gender = $_POST['gioiTinh'];
    $favor = $_POST['soThich'];
    $country = $_POST['quocTich'];
    $note = $_POST['ghiChu'];

    $sql = "INSERT INTO `thanhvien`(`id`, `name`, `email`, `gender`, `favor`, `country`, `note`) VALUES('$id', '$name', '$email', '$gender','$favor','$country','$note')";
    
    if($conn->query($sql) === TRUE) {
        echo "them du lieu thanh cong";
    }else {
        echo "loi {$sql}".$conn->error;
    }
}
