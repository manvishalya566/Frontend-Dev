$(document).ready(function () {

    $("#register").click(function () {

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        let valid = true;

        // Reset styles
        $("input").css("border", "1px solid #ccc");

        // 1. Name
        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        }

        // 2. Email format
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            $("#email").css("border", "2px solid red");
            valid = false;
        }

        // 3. Password length
        if (password.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        }

        // 4. Success message
        if (valid) {
            $("#msg").text("Registration Successful!");
        } else {
            $("#msg").text("Please correct the errors above.");
        }
    });

});
