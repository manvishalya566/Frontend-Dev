$(document).ready(function () {

    $("#addPost").click(function () {
        $("#posts").append("<li>New Blog Post</li>");
    });

    $("#addFeatured").click(function () {
        $("#posts").prepend("<li><b>Featured:</b> Top Article</li>");
    });

    $("#removeLast").click(function () {
        $("#posts li:last").remove();
    });

});
