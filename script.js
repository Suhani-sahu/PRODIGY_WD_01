const navbar = document.getElementById("navbar");
const toggle = document.getElementById("menu-toggler");
const navlinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const fadeElements = document.querySelectorAll(".fade-in");
/*scroll navbar color*/
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled",window.scrollY>50);
});
/*hamburger */
toggle.addEventListener("click",() =>{
    navlinks.classList.toggle("active");
});
/*active link highlighth*/
window.addEventListener( "scroll",() => {
    let current ="";

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        if(scrollY >= sectionTop-100){
            current = section.getAttribute("id");
        }
    });
    links.foreach(link => {
        link.classList.remove("active")
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");

        }
    });
}));
/* fade-in animation*/
window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
if(position < window.innerHeight - 100){
 el.classList.add("show");
}
});
});