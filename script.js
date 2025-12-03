const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav(event) {
    event.preventDefault(); 
    sidenav.classList.add("active");
}

function closeNav(event) {
    event.preventDefault();
    sidenav.classList.remove("active");
}
