<?php
$Username = $_POST['Username'];
$Email = $_POST['Email'];
$Password = $_POST['Password'];
$cPassword = $_POST['cPassword'];

$Conn = new mysqli('Localhost','root','','');
if ($Conn->connect_error) {
    die(''. $Conn->connect_error);
}


