const products = [
  { id: 1, name: "Widget", price: 50, quantity: 120 },
  { id: 2, name: "Gadget", price: 30, quantity: 80 },
  { id: 3, name: "Doohickey", price: 100, quantity: 200 },
  { id: 4, name: "Thingamajig", price: 75, quantity: 90 },
];
//Using Map: Update the price by applying a 10% discount to products with a quantity greater than 100.
//Using Filter: Create a new array containing only the products that received the discount (i.e. where the discounted price is less than the original price).
//using forEach: Log a message for each discounted product showing the product name and its new price.
const updateProducts = products.map((product) => {
  return product.quantity > 100
    ? { ...product, price: product.price * 0.9 }
    : product;
});
const filterProduct = updateProducts.filter((product) => {
  return product.price < products.find((p) => p.id === product.id).price;
});
filterProduct.forEach((product)=>
console.log(`The Discounted Product is ${product.name} and price is ${product.price}`));
