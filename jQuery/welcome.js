$(document).ready(function () {

    // 1. Greet based on time of day
    let hour = new Date().getHours();
    let greetingText =
        hour < 12 ? "Good Morning!" :
        hour < 17 ? "Good Afternoon!" :
                    "Good Evening!";

    $("#greeting").text(greetingText);

    // 2. Change greeting to motivational quote
    $("#changeGreeting").click(function () {
        $("#greeting").text("Believe in yourself. You can do great things!");
    });

    // 3. Toggle visibility of welcome message
    $("#toggleWelcome").click(function () {
        $("#welcomeMsg").toggle();
    });

    // 4. Alert when greeting is clicked
    $("#greeting").click(function () {
        alert("You clicked the greeting!");
    });

});
