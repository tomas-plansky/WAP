<?php

/**
 * Utility class providing methods for working with the database. This class
 * cannot be instantiated.
 * 
 * @author Tomáš Plánský
 */
final class DatabaseUtils {

    /**
     * Default constructor blocking the instantiation of this class.
     * 
     * @throws Exception If instantiation is attempted.
     */
    public function __construct() {
        throw new \Exception("This class cannot be instantiated.");
    }

    /**
     * Attempts to connect to MySQL database using the credentials provided. When
     * you are done with the connection, you should call the method closeConnection()
     * in order to close the connection to avoid memory leaks.
     * 
     * @param string $host The hostname of the database server.
     * @param string $username The username to connect to the database server.
     * @param string $password The password to connect to the database server.
     * @param string $database The name of the database to connect to.
     * @return mysqli A mysqli object if successful, otherwise false.
     */
    public static function connect(string $host, string $username, string $password, string $database): mysqli {
        $connection = mysqli_connect($host, $username, $password, $database);
        if (!$connection) {
            die("Failed to connect to MySQL: " . mysqli_connect_error());
        }
        return $connection;
    }

    /**
     * Closes the given mysqli connection.
     * 
     * @param mysqli $connection The connection to close.
     */
    public static function closeConnection(mysqli $connection) {
        mysqli_close($connection);
    }

    /**
     * Attempts to execute the given query on the given connection. If 
     * you just want to execute a query, use the method #executeQuery() instead.
     * 
     * @param mysqli $connection The connection to execute the query on.
     * @param string $query The query to execute.
     * @return array The result of the query as an array.
     */
    public static function fetchData(mysqli $connection, string $query): array {
        $result = mysqli_query($connection, $query);
        if (!$result) {
            die("Failed to get data from MySQL: " . mysqli_error($connection));
        }
        $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        mysqli_free_result($result);
        return $data;
    }

    /**
     * Executes the given query on the given connection. If you want to
     * fetch the result of the query, use the method #fetchData() instead.
     * 
     * @param mysqli $connection The connection to execute the query on.
     * @param string $query The query to execute.
     * @return bool True if the query was successful, otherwise false.
     */
    public static function executeQuery(mysqli $connection, string $query): bool {
        $result = mysqli_query($connection, $query);
        return $result ? true : false;
    }

}