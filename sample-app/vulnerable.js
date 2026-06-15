const mysql = require('mysql');
const express = require('express');
const app = express();

// 🚩 VULNERABILITY 1: Hardcoded AWS Credentials
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// 🚩 VULNERABILITY 2: Hardcoded Database Password in connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'super_secret_production_password_123!' // Hardcoded credentials!
});

// 🚩 VULNERABILITY 3: SQL Injection
app.get('/user', function(req, res) {
  const username = req.query.username;
  // User input is directly concatenated into the SQL query without sanitization
  const query = "SELECT * FROM users WHERE username = '" + username + "'";
  
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// 🚩 VULNERABILITY 4: Cross-Site Scripting (XSS)
app.get('/hello', function(req, res) {
  const name = req.query.name;
  // User input is directly echoed into the HTML response
  res.send("<h1>Hello " + name + "</h1>"); 
});

// 🚩 VULNERABILITY 5: Command Injection
const { exec } = require('child_process');
app.get('/ping', function(req, res) {
  const ip = req.query.ip;
  // User input is directly passed to the OS shell
  exec('ping -c 4 ' + ip, (err, stdout, stderr) => {
    res.send(`<pre>${stdout}</pre>`);
  });
});

// CODE SMELL: Unused variable
const unusedVar = "I am never used!";

app.listen(3000);
