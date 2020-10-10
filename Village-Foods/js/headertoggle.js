const nav = document.getElementById("navbar");
// const homeButton = document.getElementsByClassName("home")
// const aboutUsButton = document.getElementsByClassName("about-us")
const bodyTog = document.body
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;  

window.addEventListener("scroll", () => {
    var currentScroll = window.pageYOffset;
    if (currentScroll == 0){
        // remove all classes
        navbar.classList.toggle(scrollUp)
        return
    }
    if (currentScroll > lastScroll && !navbar.classList.contains(scrollDown)) {
        // down
        navbar.classList.remove(scrollUp);
        navbar.classList.add(scrollDown);
    } 
    else if (currentScroll < lastScroll && navbar.classList.contains(scrollDown)) {
        // up
        navbar.classList.remove(scrollDown);
        navbar.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});

