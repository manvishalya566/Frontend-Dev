$(document).ready(function () {

    // 1. Subscribe
    $("#subscribe").click(function () {
        $("#msg").text("Notifications Enabled!");
    });

    // 2. Unsubscribe
    $("#unsubscribe").click(function () {
        $("#msg").text("Notifications Disabled!");
    });

    // 3. Add new topic + attach click event
    $("#addTopic").click(function () {
        let topic = $("#newTopic").val();
        if (topic === "") return;

        $("#topics").append("<li class='topic'>" + topic + "</li>");
        $("#newTopic").val("");
    });

    // Dynamic .on() event for all topics
    $("#topics").on("click", ".topic", function () {
        $("#msg").text("Subscribed to " + $(this).text());
    });

});
