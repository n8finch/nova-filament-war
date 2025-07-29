// This is a simple test script to verify our plain JavaScript implementation
console.log("Testing plain JavaScript implementation...");

// Simulate browser environment for testing
const fs = require('fs');
const path = require('path');

// Read the HTML file
const htmlPath = path.join(__dirname, 'index.html');
console.log(`Reading HTML file from: ${htmlPath}`);

try {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    console.log("Successfully read HTML file");
    
    // Check for key elements in our implementation
    const checks = [
        { name: "Todo functionality", pattern: "todoList" },
        { name: "Date/time display", pattern: "currentDateTime" },
        { name: "Counter functionality", pattern: "counter" },
        { name: "No external dependencies", pattern: "cdn|http:|https:|import|require", shouldNotExist: true }
    ];
    
    let allPassed = true;
    
    checks.forEach(check => {
        const regex = new RegExp(check.pattern, 'i');
        const exists = regex.test(htmlContent);
        
        if (check.shouldNotExist) {
            if (!exists) {
                console.log(`✅ PASS: ${check.name} - No external dependencies detected`);
            } else {
                console.log(`❌ FAIL: ${check.name} - Possible external dependency detected`);
                allPassed = false;
            }
        } else {
            if (exists) {
                console.log(`✅ PASS: ${check.name} - Implementation found`);
            } else {
                console.log(`❌ FAIL: ${check.name} - Implementation not found`);
                allPassed = false;
            }
        }
    });
    
    if (allPassed) {
        console.log("\n🎉 All tests passed! The implementation uses plain JavaScript with no dependencies.");
    } else {
        console.log("\n⚠️ Some tests failed. Please review the implementation.");
    }
    
    console.log("\nTo test the application in a browser, simply open the index.html file in your web browser.");
    
} catch (error) {
    console.error("Error reading HTML file:", error);
}