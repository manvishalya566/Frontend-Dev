function bookTicket(name, email, seats) {
    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!nameReg.test(name) || !emailReg.test(email) || seats < 1 || seats > 10) {
        return "Invalid Details!";
    }

    let ticket = { name, email, seats };
    console.log("Ticket Booked:", ticket);
}

bookTicket("John", "john@mail.com", 2);
