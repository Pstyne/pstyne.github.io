/****************************************************
This script is mainly to validate form inputs,
specifically for empty values.
****************************************************/

// Function that will handle data once user presses the 'send' button
submitHandler = (e) => {

  // The validate function will be run once for each element
  const validate = (element) => {

    // The error element selector
    const errorSelector = document.querySelector(`.${element.name}-error`);

    // Check the element for empty string
    if (!element.value) {

      /****************************************************
      Check to make sure there is not already an error 
      element associated with this element
      ****************************************************/

      if (!errorSelector) {

        // Create the error element associated with validated element
        const errorMsg = document.createElement("div");

        // The class name for the element depends on validated elements name
        errorMsg.className = `${element.name}-error`;
        
        // Error message appears in red
        errorMsg.style.color = "red";
        
        // Insert the message for invalid input field
        errorMsg.innerHTML = `please enter ${element.name}`;
        
        // Change border color to signal something is wrong
        element.style.borderColor = "red";
        
        // Insert the error message element just before this element
        element.before(errorMsg);
      }
    } else {

      // Remove border color to original style from style.css
      element.style.borderColor = "";

      // Remove the error element if it's there
      if (errorSelector) {
        errorSelector.parentNode.removeChild(errorSelector);
      }
    }
  }

  // Prevent the form from performing post to server on submission
  e.preventDefault();
  
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const inputs = [name, email, message];
  
  // Iterate over inputs array validate each input
  inputs.map(input => validate(input));

  // If there are no errors then send the message and clear input fields
  if (!document.querySelector("[class$='error']")) {

    // Working success indicator for the user maybe until server is established
    alert("Message successfully sent!");

    // Iterate over each input again except this time remove everything
    // the user submitted from the input fields
    inputs.map(input => input.value = "");
  }
}

//!!!!!!!!!!!!!!!!!!!!!!!!
/** Start Program Here **/
//!!!!!!!!!!!!!!!!!!!!!!!!

// Select the form
const form = document.querySelector("form");

// Listen for the submission event to occur and run our handler when it does
form.addEventListener("submit", submitHandler);