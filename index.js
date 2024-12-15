// Your code goes here// Step 1: Add a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM has loaded"); // Log to confirm the event fires
  
    // Step 2: Target the paragraph element using its ID
    const textElement = document.getElementById("text");
  
    // Step 3: Change its text content
    textElement.textContent = "This is really cool!";
  });
  