<?php
$name = "не определено";


if(isset($_POST["name"])){
    $name = $_POST["name"];
}
if(isset($_POST["email"])){
    $age = $_POST["email"];
}
if(isset($_POST["phone"])){
    $age = $_POST["phone"];
}
if(isset($_POST["question"])){
    $age = $_POST["question"];
}
echo "Name is: $name";


