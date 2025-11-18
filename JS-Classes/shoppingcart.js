class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    applyCoupon(code) {
        const reg = /^(SAVE|DISC)\d{2}$/;
        if (!reg.test(code)) return "Invalid Coupon";

        let discount = parseInt(code.match(/\d+/)[0]);
        return this.getTotal() - (this.getTotal() * (discount / 100));
    }
}

let cart = new Cart();
cart.addItem("Laptop", 50000, 1);
console.log(cart.applyCoupon("SAVE20"));
