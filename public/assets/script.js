particlesJS.load('particles-js', 'assets/particles.json');

const brand = document.getElementById("brand");

const setPaddingBody = function() {
    const body = document.querySelector("body");
    body.style.paddingTop = `${window.innerHeight}px`
}

window.addEventListener("resize", setPaddingBody);

window.addEventListener("scroll", function() {

})

setPaddingBody()