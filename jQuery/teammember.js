$(document).ready(function () {

    // 1. Click manager → highlight all direct reports
    $(".manager").click(function () {
        $(this).nextUntil(".manager").addClass("highlight");
    });

    // 2. Hover employee → show contact info (next element)
    $(".employee").hover(
        function () { $(this).after("<span class='contact'> - contact@company.com</span>"); },
        function () { $(".contact").remove(); }
    );

    // 3. Click department → change background of all members
    $(".deptTitle").click(function () {
        $(this).parent().children().toggleClass("highlight");
    });

    // 4. Highlight sibling employees
    $("#randomEmployee").click(function () {
        let random = $(".employee").eq(Math.floor(Math.random() * $(".employee").length));
        random.siblings(".employee").addClass("highlight");
    });

    // 5. Collapse/expand team
    $("#toggleTeams").click(function () {
        $(".department").find(".manager, .employee").slideToggle();
    });

});
1