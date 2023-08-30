<?php
    $id = $_POST['ma'];
    $name = $_POST['hoTen'];
    $email = $_POST['email'];
    $sex = $_POST['gioiTinh'];
    $favor = $_POST['soThich'];
    $country = $_POST['quocTich'];
    $note = $_POST['ghiChu'];


    $sql = "INSERT INTO quanlythanhvien (ma, hoTen, email, gioiTinh, soThich, quocTich, ghiChu) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(1, $id);
    $stmt->bindParam(2,$name);
    $stmt->bindParam(3,$email);
    $stmt->bindParam(4,$sex);
    $stmt->bindParam(5,$favor);
    $stmt->bindParam(6,$country);
    $stmt->bindParam(7,$note);

    if($stmt ->execute()) {
        echo "du lieu da duoc insert thanh cong vao co so du lieu";
    }else {
        echo "co loi xay ra trong qua trinh insert du lieu";
    }
