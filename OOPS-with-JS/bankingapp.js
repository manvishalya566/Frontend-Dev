

class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid deposit amount");
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }
    this.#balance -= amount;
    console.log(`Withdrawn: ${amount}`);
  }

  getBalance() {
    return this.#balance;
  }
}

// Testing
const acc = new BankAccount();
acc.deposit(500);
acc.deposit(300);

try {
  acc.withdraw(1000); // invalid
} catch (err) {
  console.error("Withdraw Error:", err.message);
}

console.log("Final Balance:", acc.getBalance());
