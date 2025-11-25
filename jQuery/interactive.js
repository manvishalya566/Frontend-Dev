$(document).ready(function () {

    // 1. Toggle answer visibility
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // 2. Hover → change color
    $(".question").hover(
        function () { $(this).css("color", "blue"); },
        function () { $(this).css("color", "black"); }
    );

    // 3. Double click → collapse all
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // 4. Focus on input → highlight parent question
    $("input").focus(function () {
        $(this).closest(".answer").prev(".question").addClass("highlight");
    });

    // 5. Blur → reset background
    $("input").blur(function () {
        $(this).closest(".answer").prev(".question").removeClass("highlight");
    });
});
