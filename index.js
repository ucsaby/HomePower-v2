import { getAllProducts } from "./api/alimente.js"; // importam codul din alimente.js
import { mapProductToCard } from "./utils/layout.js";

document.addEventListener("DOMContentLoaded", displayProducts); //setam ca la incarcarea paginii sa afiseze produsele.

async function displayProducts() {
  const products = await getAllProducts();

  document.querySelector(".products").innerHTML = products
    .map(mapProductToCard)
    .join("");
}
