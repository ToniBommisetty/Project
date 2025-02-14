<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: index.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
</head>
<body>
    <!-- Nav Bar -->
    <header>
        <a href="#" class="logo"><i class='bx bxs-t-shirt'></i> Adidas</a>
        <ul class="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="#profile" id="profile-link" onclick="showprofile()">Profile</a></li>
            <li><a href="#orders" id="orders-link" onclick="showorder()">Orders</a></li>
            <li><a href="logout.php" id="logout-link">Logout</a></li>
        </ul>
    </header>
    <!-- Rest of the user.html content -->
</body>
</html>