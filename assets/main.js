

document.addEventListener("scroll", function(event) {
    var height = window.visualViewport.height;
    var containers = document.getElementsByClassName("post-link-container");
    for (var container of containers) {
        var rect = container.getClientRects()[0];
        container.style.backgroundPosition = "0% " + (33.0 + (rect.top / height) * 33.0) + "%";
    }
});
