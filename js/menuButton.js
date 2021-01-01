/****************************************************
The mechanism for controlling the behavior of
the menu when the screen is too small for initially
visible navigation elements.
****************************************************/

// A handler function for clicking on the menu button
changeMenu = () => {
  
  // Find element matching the class name of menu
  const menu = document.querySelector(".menu");

  // A simple conditional testing the class name of menu element
  if (menu.className === "menu") {
    
    // If it's just a 'menu' class add 'opened' to element
    menu.className = "menu opened";
  } else {

    // Otherwise make it disappear
    menu.className = "menu";
  }

}

//!!!!!!!!!!!!!!!!!!!!!!!!
/** Start Program Here **/
//!!!!!!!!!!!!!!!!!!!!!!!!

// We need this element so the browser can listen for a click on it
const button = document.querySelector(".menu-button");

// Tie a 'click' event to the button we declared named 'changeMenu'
button.addEventListener("click", changeMenu);