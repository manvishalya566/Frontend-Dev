$(document).ready(function () {

    // 1. Click → highlight background
    $(".product").click(function () {
        $(".product").removeClass("highlight");
        $(this).addClass("highlight");

        // If product is out of stock show alert
        if ($(this).data("stock") === "no") {
            alert("This product is currently out of stock!");
        }
    });

    // 2. Hover → show additional product details
    $(".product").hover(
        function () {
            $(this).find(".details").slideDown();
        },
        function () {
            $(this).find(".details").slideUp();
        }
    );

    // 3. Clicking “Favorite” icon toggles selected class
    $(".favorite").click(function (event) {
        event.stopPropagation(); // Prevent firing the product click
        $(this).toggleClass("selected");
    });

    // 4. Apply different styles to discounted products using attribute selector
    $("[data-discount='true']").addClass("discount");

    // 5. Show alert if product is out of stock
    // (handled inside click event above)

});
