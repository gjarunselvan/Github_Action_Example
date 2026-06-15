function authenticateUser(username, password) {
    // 🚩 SECURITY VULNERABILITY: Hardcoded credentials
    const adminUser = "admin";
    const adminPass = "supersecretpassword123";

    // 🚩 BUG: Using == instead of === (SonarQube flags this as a code smell/bug)
    if (username == adminUser && password == adminPass) {
        console.log("Login successful!");
        return true;
    } else {
        console.log("Login failed!");
        return false;
    }
}

function calculateDiscount(price, userType) {
    // 🚩 CODE SMELL: Unused variable
    let unusedVar = "This is never used";

    // 🚩 CODE SMELL: High cognitive complexity (too many nested if-else statements)
    if (userType === "VIP") {
        if (price > 1000) {
            return price * 0.8;
        } else {
            if (price > 500) {
                return price * 0.85;
            } else {
                return price * 0.9;
            }
        }
    } else if (userType === "REGULAR") {
        if (price > 100) {
            return price * 0.95;
        }
    }
    
    return price;
}

function processData(userInput) {
    // 🚩 SECURITY VULNERABILITY: Using eval() on user input is a critical security flaw
    const result = eval(userInput); 
    console.log("Result is: " + result);
}

function executeQuery(userInput) {
    // 🚩 SECURITY VULNERABILITY: SQL Injection
    const query = "SELECT * FROM users WHERE username = '" + userInput + "'";
    console.log("Executing: " + query);
}

module.exports = { authenticateUser, calculateDiscount, processData, executeQuery };
