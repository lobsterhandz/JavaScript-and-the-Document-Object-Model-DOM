// Task 2: Change the color of the box element when clicked
function changeColor() {
    const box = document.getElementById("box");
  
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
    // Apply the random color to the box
    box.style.backgroundColor = randomColor;
    box.style.color = "#fff";
    box.textContent = "Color Changed!";
  }
  
  // Task 3: Add hover effects and button interactions
  
  // Hover effect for the hoverBox
  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "#ffc107";
    hoverBox.textContent = "Hovered!";
  });
  
  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "#28a745";
    hoverBox.textContent = "Hover over me";
  });
  
  // Change text style on button click
  const textButton = document.getElementById("textButton");
  const dynamicText = document.getElementById("dynamicText");
  
  textButton.addEventListener("click", () => {
    // Toggle bold and italic styles
    const isBold = dynamicText.style.fontWeight === "bold";
    dynamicText.style.fontWeight = isBold ? "normal" : "bold";
    dynamicText.style.fontStyle = isBold ? "normal" : "italic";
    dynamicText.style.color = isBold ? "#6c757d" : "#dc3545";
  });
  