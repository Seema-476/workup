// menu-icon
function opennav() {
    document.getElementById("navlist").classList.toggle("start-0");
    document.querySelector(".menuicon").classList.toggle("cross");
    document.body.classList.toggle(".hidden-overflow");
}

// scroll top btn 
const topbtn = document.querySelector(".topbtn")
window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topbtn.classList.add("show")
    } else {
        topbtn.classList.remove("show");
    }
})
topbtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})
