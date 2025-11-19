
const menu = {
  burger: 120,
  pizza: 250,
  fries: 80,
  coke: 40
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) {
        throw new Error(`Item not found: ${item}`);
      }
      return menu[item];
    });

    const total = prices.reduce((sum, price) => sum + price, 0);
    console.log(`Total bill: ₹${total}`);
  } catch (err) {
    console.error("Order Error:", err.message);
  }
}

// Testing
calculateBill(["burger", "fries"]);
calculateBill(["pizza", "idli"]); // invalid item
