// Function to call the API Gateway and update the visitor counter
async function updateVisitorCounter() {
  const apiUrl = "https://gdiikubtb3.execute-api.eu-west-2.amazonaws.com/myapi-stage/execute"; // Replace with your API Gateway URL
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
  var currentTime = new Date();
  var timeAccessed = currentTime.toISOString();

  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ browser_info: browserInfo, time_accessed: timeAccessed }),
  };

  try {
    const response = await fetch(apiUrl, requestData);
    const data = await response.json();
    console.log("Response:", data);

    // Assuming the API response contains the total number of rows as a property named "total_rows"
    const visitorCounterElement = document.getElementById("visitorcounter");
    visitorCounterElement.textContent = `Visitor Number: ${data.total_rows}`;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", updateVisitorCounter);
