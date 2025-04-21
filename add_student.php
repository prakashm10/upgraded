<?php
require 'db.php';

$name = $_POST['name'] ?? '';
$roll = $_POST['roll'] ?? '';

if (!empty($name) && !empty($roll)) {
    $stmt = $conn->prepare("INSERT INTO students (name, roll) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $roll);
    $stmt->execute();
    echo "Student added successfully";
    $stmt->close();
} else {
    echo "Both fields are required!";
}
?>
