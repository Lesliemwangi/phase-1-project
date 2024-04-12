let BASE_URL = "http://localhost:3000/mansions";

document.addEventListener("DOMContentLoaded", () => {
  fetchMansionettes();
});

function fetchMansionettes() {
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((mansionette) => {
        renderMansionette(mansionette);
      });
    })
    .catch((error) => {
      console.error("Error fetching mansionettes:", error);
    });
}

function handlePurchase() {
  alert("Purchased! Enjoy");
}

function renderMansionette(mansionette) {
  const mansionContainer = document.getElementById("mansion");

  const mansionCard = document.createElement("div");
  mansionCard.classList.add("card");

  const image = document.createElement("img");
  image.classList.add("card-img-top");
  image.src = mansionette.image;
  image.alt = mansionette.title;

  // Add an event listener to the image
  image.addEventListener("click", function () {
    // Remove the href attribute from the parent anchor tag when the image is clicked
    this.parentNode.removeAttribute("href");
  });

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = mansionette.title;

  const area = document.createElement("p");
  area.textContent = `Area: ${mansionette.area}`;

  const price = document.createElement("p");
  price.textContent = `Price: ${mansionette.price}`;

  const description = document.createElement("p");
  description.textContent = mansionette.description;

  const purchaseButton = document.createElement("button");
  purchaseButton.classList.add("btn", "btn-primary");
  purchaseButton.style.width = "fit-content";
  purchaseButton.textContent = "PURCHASE";
  purchaseButton.addEventListener("click", handlePurchase);

  cardBody.appendChild(title);
  cardBody.appendChild(area);
  cardBody.appendChild(price);
  cardBody.appendChild(description);
  cardBody.appendChild(purchaseButton);

  mansionCard.appendChild(image);
  mansionCard.appendChild(cardBody);

  mansionContainer.appendChild(mansionCard);
}
