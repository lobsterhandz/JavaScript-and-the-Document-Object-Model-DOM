// Array to store user submissions
const submissions = [];

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Clear previous error messages
  const errorContainer = document.getElementById("errorMessages");
  errorContainer.textContent = "";

  // Get form inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate inputs
  const errors = [];
  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Email is required.");
  if (!message) errors.push("Message is required.");

  if (errors.length > 0) {
    // Display error messages
    errorContainer.textContent = errors.join(" ");
    return;
  }

  // Store user input in an object
  const userInput = { name, email, message };
  submissions.push(userInput);

  console.log("Form submitted successfully:", userInput);
  console.log("All submissions:", submissions);

  // Clear the form fields
  document.getElementById("userForm").reset();

  // Provide feedback to the user
  alert("Thank you for your submission!");
}

// Add event listener to the form
document.getElementById("userForm").addEventListener("submit", handleFormSubmit);
