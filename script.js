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


let panier = [];

function ajouterAuPanier(nom, prix) {

    panier.push({ nom: nom, prix: prix });
    actualiserAffichage();
}

function actualiserAffichage() {
    const listeElement = document.getElementById('liste-panier');
    const totalElement = document.getElementById('total-prix');
    const compteurElement = document.getElementById('panier-compteur');

    compteurElement.innerText = panier.length;

    listeElement.innerHTML = "";
    let totalPrix = 0;

    panier.forEach((produit, index) => {
        totalPrix += produit.prix;
        
        listeElement.innerHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
                <span>${produit.nom}</span>
                <span style="font-weight: bold;">${produit.prix.toFixed(2)}€</span>
            </div>
        `;
    });

    totalElement.innerText = totalPrix.toFixed(2);
}

function openPanier() {
    document.getElementById("panier-side").style.width = "350px";
}

function closePanier() {
    document.getElementById("panier-side").style.width = "0";
}

document.querySelector('.panier-container').onclick = openPanier;

