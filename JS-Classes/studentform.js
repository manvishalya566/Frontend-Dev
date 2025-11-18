document.getElementById("studentForm").addEventListener("submit", e => {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let msg = document.getElementById("msg");

    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const phoneReg = /^\d{10}$/;
    const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

    function validate(field, regex){
        if(regex.test(field.value)){
            field.style.border = "2px solid green";
            return true;
        }
        field.style.border = "2px solid red";
        return false;
    }

    let valid = validate(name, nameReg) &&
                validate(email, emailReg) &&
                validate(phone, phoneReg) &&
                validate(password, passReg);

    msg.textContent = valid ? "Registered Successfully!" : "Fix errors above";
});
