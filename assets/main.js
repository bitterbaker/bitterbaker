

function init(){
    ominousImageScroll();
    smoothScroll();
}

// Source: https://codepen.io/bassta/pen/LovFG
function smoothScroll() {
    var scrollTime = 1.2;           //Scroll time
    var scrollDistance = 170;       //Distance. Use smaller value for shorter scroll and greater value for longer scroll
        
    window.addEventListener("mousewheel", updateScroll, false); 
    window.addEventListener("DOMMouseScroll", updateScroll, false); 

    function updateScroll(event) {
        event.preventDefault(); 
                     
        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to(window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,   //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
                autoKill: true,
                overwrite: 5                            
            });
    }
}


function ominousImageScroll() {
    document.addEventListener("scroll", function(event) {
        var height = window.visualViewport.height;
        var containers = document.getElementsByClassName("post-link-container");
        for (var container of containers) {
            var rect = container.getClientRects()[0];
            container.style.backgroundPosition = "0% " + (33.0 + (rect.top / height) * 33.0) + "%";
        }
    });
}