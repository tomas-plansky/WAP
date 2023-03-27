const express = require("express");
const mysql = require("mysql");
const app = (module.exports = express());
const PORT = 3000;

// -- Database

// Connect to the database
const credentials = require("./credentials.json");
var connection = mysql.createConnection(
	`mysql://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.port}/${credentials.database}`
);

// Create the database if it doesn't exist
connection.query(
	`CREATE DATABASE IF NOT EXISTS ${credentials.database}`,
	[],
	(err, result) => {
		if (err) {
			console.log("Error creating database");
			console.warn(err);
		} else {
			console.log("Database created");
		}
	}
);

// Create the table users if it doesn't exist
connection.query(
	"CREATE TABLE IF NOT EXISTS users (" +
		"id INT NOT NULL AUTO_INCREMENT, " +
		"name VARCHAR(255) NOT NULL, " +
		"created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, " +
		"updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP) " +
		"PRIMARY KEY (id)",
	[],
	(err, result) => {
		if (err) {
			console.log("Error creating table users");
			console.warn(err);
		} else {
			console.log("Table users created");
		}
	}
);

// -- Middleware
// Allow access to the public folder
app.use(express.static("public"));
// Set up the view engine
app.engine(".html", require("ejs").__express);
app.set("view engine", "html");
// Set up the views folder
app.set("views", "views");

// -- Routes
// Get all users
app.get("/users", (req, res) => {
    connection.query("SELECT * FROM users", [], (err, result) => {
        if (err) {
			handleRequestError(err, res, "Failed to get users");
        } else {
            res.send(result);
        }
    });
});
// Get a user
app.get("/users/:name", (req, res) => {
    connection.query("SELECT * FROM users WHERE name = ?", [req.params.name], (err, result) => {
        if (err) {
			handleRequestError(err, res, "Failed to get user");
        } else {
            res.send(`{"success": "true", "user": {"id": ${result[0].id}, "name": "${result[0].name}"}}`);
        }
    });
});
// Create a user
app.post("/users", (req, res) => {
    connection.query("INSERT INTO users (name) VALUES (?)", [req.body.name], (err, result) => {
        if (err) {
            handleRequestError(err, res, "Failed to create user");
        } else {
            res.send(`{"success": "true", "user": {"id": ${result.insertId}, "name": "${req.body.name}"}}`);
        }
    });
});
// Update a user
app.put("/users/:name", (req, res) => {
    connection.query("UPDATE users SET name = ? WHERE name = ?", [req.body.name, req.params.name], (err, result) => {
        if (err) {
            handleRequestError(err, res, "Failed to update user");
        } else {
            res.send(`{"success": "true", "user": {"name": "${req.params.name}", "newName": "${req.body.name}"}}`);
        }
    });
});
// Delete a user
app.delete("/users/:name", (req, res) => {
    connection.query("DELETE FROM users WHERE name = ?", [req.params.name], (err, result) => {
        if (err) {
            handleRequestError(err, res, "Failed to delete user");
        } else {
            res.send(`{"success": "true", "user": {"name": "${req.params.name}"}}`);
        }
    });
});

// -- Start the server
if (!module.parent) {
	app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
	// Close database connection on exit
	process.on("SIGINT", () => {
		console.log("Closing database connection");
		if (connection) connection.end();
		process.exit();
	});
}

// -- Utils

function handleRequestError(err, res, message) {
	let jsonMessage = `{"success": "false", "message": "${message}"}`;
	if (res) {
		res.status(500).send(jsonMessage);
	}
	if (err) {
		console.log(jsonMessage);
		console.warn(err);
	}
}