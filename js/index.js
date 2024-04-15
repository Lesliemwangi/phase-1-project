
// Define the base URL for the API
let BASE_URL = "http://localhost:3000/mansions";

// Fetch the mansionettes from the API
// Add an event listener to the form to execute the fetchMansionettes function when the DOM content of the webpage has finished loading.
document.addEventListener("DOMContentLoaded", () => {
  fetchMansionettes();
});

// Declare the function to fetch the mansionettes from the API
// Fetch the mansionettes from the API and render them on the page
function fetchMansionettes() {
  // Fetch mansionette data from the specified base URL
  fetch(BASE_URL)
    // Once the response is received, parse it as JSON
    .then((response) => response.json())
    // Once the data is parsed, iterate over the mansionettes and render them on the page
    .then((data) => {
      // For each mansionette in the data array, render the mansionette on the web page
      data.forEach((mansionette) => {
        renderMansionette(mansionette);
      });
    })
    // If there is an error, log it to the console
    .catch((error) => {
      console.error("Error fetching mansionettes:", error);
    });
}

// Declare the  fuction to handle the purchase event
// This function displays an alert message saying "Purchased! Enjoy" when called.
function handlePurchase() {
  alert("Purchased! Enjoy");
}

// Declare the function to render a mansionette on the page
function renderMansionette(mansionette) {
  // Get the container where mansionettes will be rendered
  const mansionContainer = document.getElementById("mansion");

  // Create a div element to represent the mansionette card
  const mansionCard = document.createElement("div");
  mansionCard.classList.add("card");

  // Create an image element for the mansionette's image
  const image = document.createElement("img");
  image.classList.add("card-img-top");
  // Set the image source
  image.src = mansionette.image;
  // Set the image alt attribute
  image.alt = mansionette.title;

  // Add an event listener to the image
  image.addEventListener("click", function () {
    // Remove the href attribute from the parent anchor tag when the image is clicked
    this.parentNode.removeAttribute("href");
  });

  // Create a div element to hold the mansionette's details
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  // Set a minimum height for the card body
  cardBody.style.minHeight = "1100px";

  // Create elements for the mansionette's title, area, price, and description
  const title = document.createElement("h4");
  title.classList.add("card-title");
  title.textContent = mansionette.title;

  const area = document.createElement("p");
  area.textContent = `Area: ${mansionette.area}`;

  const price = document.createElement("p");
  price.textContent = `Price: ${mansionette.price}`;

  const description = document.createElement("p");
  description.textContent = mansionette.description;

  // Create a button element to purchase the mansionette
  const purchaseButton = document.createElement("button");
  purchaseButton.classList.add("btn", "btn-primary");
  purchaseButton.style.width = "fit-content";
  purchaseButton.textContent = "PURCHASE";
  // Add an event listener to the purchase button to handle the purchase
  purchaseButton.addEventListener("click", handlePurchase);

  // Append the elements to the card body
  cardBody.appendChild(title);
  cardBody.appendChild(area);
  cardBody.appendChild(price);
  cardBody.appendChild(description);
  cardBody.appendChild(purchaseButton);

  // Append the mansionette's details and purchase button to the card body
  mansionCard.appendChild(image);
  mansionCard.appendChild(cardBody);

  // Append the mansionette card to the mansion container on the web page
  mansionContainer.appendChild(mansionCard);
}