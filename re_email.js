function validateEmail(email) {
    // Regular expression pattern for email validation
    const pattern = /^[a-zA-Z0-9._-]+@gmail|hotmail+\.com$/;
  
    // Check if the email matches the pattern
    if (pattern.test(email)) {
      return true; // Valid email
    } else {
      return false; // Invalid email
    }
  }
  
  // Example usage:
  const email = "example@hotmail.com";
  if (validateEmail(email)) {
    console.log("Email is valid.");
  } else {
    console.log("Email is invalid.");
  }