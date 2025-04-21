<?php
require 'db.php';

$id = $_POST['id'] ?? '';

if (!empty($id)) {
    $stmt = $conn->prepare("DELETE FROM students WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    echo "Deleted successfully";
    $stmt->close();
}
?>
