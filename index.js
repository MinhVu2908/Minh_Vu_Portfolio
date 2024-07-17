var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
    for(tablink of tablinks ){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents ){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function closeMenu() {
    sidemenu.style.right = "-200px";
}
function openMenu() {
    sidemenu.style.right = "0";
}