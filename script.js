// script.js

// Get client's browser information
var userAgent = navigator.userAgent;
var browserInfo = "";

if (userAgent.indexOf("Chrome") !== -1) {
    browserInfo = "Google Chrome";
} else if (userAgent.indexOf("Safari") !== -1) {
    browserInfo = "Safari";
} else if (userAgent.indexOf("Firefox") !== -1) {
    browserInfo = "Mozilla Firefox";
} else if (userAgent.indexOf("Edge") !== -1) {
    browserInfo = "Microsoft Edge";
} else if (userAgent.indexOf("IE") !== -1 || userAgent.indexOf("Trident/") !== -1) {
    browserInfo = "Internet Explorer";
} else {
    browserInfo = "Unknown";
}

// Get current time
var currentTime = new Date();
var formattedTime = currentTime.toLocaleString();

// Display the results in the HTML
document.getElementById("browserInfo").textContent += browserInfo;
document.getElementById("timeAccessed").textContent += formattedTime;
