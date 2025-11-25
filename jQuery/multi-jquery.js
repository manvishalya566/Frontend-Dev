jq1(document).ready(function () {
    // Carousel simulation
    setInterval(function () {
        jq1("#carousel").toggleClass("active");
    }, 2000);
});

jq2(document).ready(function () {
    // Modal popup
    jq2("#modal").click(function () {
        alert("Modal Opened!");
    });

    // Tooltip
    jq2("#tooltip").hover(
        function () { jq2(this).attr("title", "Tooltip Info"); },
        function () { jq2(this).removeAttr("title"); }
    );
});
