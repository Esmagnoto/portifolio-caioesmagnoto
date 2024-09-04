/* Cette function ouvre et ferme le hamburger onclick,
 elle utilise tous les élements de la div .menu-links et .hamburger-icon */ 
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}