// functia care salveaza produsele din mockapi intr-o constanta products

const URL = "https://670fe58da85f4164ef2c6131.mockapi.io/alimente";

export async function getAllProducts() {
  const response = await fetch(URL);
  const products = await response.json();

  return products;
}
