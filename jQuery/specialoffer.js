$(document).ready(function () {

    // 1. Hide
    $("#hide").click(function () {
        $(".banner").hide();
    });

    // 2. Show
    $("#show").click(function () {
        $(".banner").show();
    });

    // 3. Slide
    $("#slideToggle").click(function () {
        $(".banner").slideToggle();
    });

    // 4. Fade
    $("#fadeToggle").click(function () {
        $(".banner").fadeToggle();
    });

    // 5. Auto rotate banners every 5 seconds
    let banners = $(".banner");
    let current = 0;

    function rotateBanners() {
        banners.fadeOut();
        banners.eq(current).fadeIn();

        current = (current + 1) % banners.length;
    }

    rotateBanners();
    setInterval(rotateBanners, 5000);
});
