<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP-Database</title>
</head>
<body>
    <h1>PHP-Database</h1>
    <?php
    require_once "./utils/DatabaseUtils.php";

    // Connect to the database.
    $connection = DatabaseUtils::connect("localhost", "root", "", "mydb");
    // Query the database for all users.
    $query = "SELECT `ID`,`first_name`,`last_name`,`email` FROM `mydb`.`user`";
    $users = DatabaseUtils::fetchData($connection, $query);
    // Close the connection.
    DatabaseUtils::closeConnection($connection);
    
    // If any data is returned, print it out in a table.
    if (!empty($users)) {
        echo "<table>";
        echo "<tr>";
        echo "<th>ID</th>";
        echo "<th>First Name</th>";
        echo "<th>Last Name</th>";
        echo "<th>Email</th>";
        echo "</tr>";
        foreach ($users as $user) {
            echo "<tr>";
            echo "<td>" . $user['ID'] . "</td>";
            echo "<td>" . $user['first_name'] . "</td>";
            echo "<td>" . $user['last_name'] . "</td>";
            echo "<td>" . $user['email'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    }
    ?>
</body>
</html>