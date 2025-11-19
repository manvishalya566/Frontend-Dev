async function fetchProducts() {
  const apiUrl = "https://fakestoreapi.com/products";
  try {
    console.log("Fetching products...");
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const products = await response.json();
    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("---");
    });
    return products;
  } catch (err) {
    console.error("Failed to load products. Please try again.");
    console.error("Error details:", err.message);
    throw err;
  }
}
fetchProducts().catch(() => {});
