class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= (this.price * (percent / 100));
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 700, "Electronics"),
    new Product(3, "Mobile", 15000, "Mobiles"),
    new Product(4, "Shoes", 1200, "Fashion")
];

products[0].applyDiscount(10);  
console.log("Products Above 1000:");
console.log(products.filter(item => item.price > 1000));
