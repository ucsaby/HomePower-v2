import { getAllProducts } from "./api/alimente.js"; // importam codul din alimente.js

document.addEventListener("DOMContentLoaded", displayProducts); //setam ca la incarcarea paginii sa afiseze produsele.

async function displayProducts() {
  const products = await getAllProducts();
  console.log(products);
}
