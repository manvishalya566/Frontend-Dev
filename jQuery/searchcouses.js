$(document).ready(function () {

    $("#search").keyup(function () {
        let value = $(this).val().toLowerCase();
        let count = 0;

        $("#courses li").each(function () {
            let text = $(this).text().toLowerCase();

            if (text.includes(value)) {
                count++;
                $(this).show().css("background", "yellow");
            } else {
                $(this).hide();
            }
        });

        $("#count").text(count + " matches found");

        if (value === "") {
            $("#courses li").css("background", "transparent").show();
            $("#count").text("");
        }
    });

});
