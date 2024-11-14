
// Lire le DOM
// Afficher le texte de la balise ayant l'id 'titre2'
let exemple1 = document.getElementById('titre2');

if (exemple1) {
    console.log(exemple1.textContent);
} else {
    console.log("L'élément avec l'ID 'titre2' n'a pas été trouver");
}

//Afficher le nombre de balises ayant la classe 'titre'
let classT = document.getElementsByClassName('titre');
console.log(classT.length);


// Afficher le texte de toutes les balises ayant la class 'titre'
let baliseClass = document.getElementsByClassName('titre');

if (baliseClass) {
    console.log("Nombre de balise avec la classe 'titre' : ", baliseClass.length);
}
//Afficher le texte de toutes les balises 'li'

let baliseli = document.getElementsByTagName('li'); {
    console.log("Texte de toute les balise 'li' : ", baliseli.length);
}

// Modifier le DOM
//Changer le contenu du h1 en 'Bienvenue' 
document.getElementById('titre1').textContent = "Bienvenue";

//Changer le contenu du h2 en 'Exo JS'
document.getElementById('titre2').textContent = "Exo JS";

// Changer le contenu paragraphe en 'Voici quelques fonctions exécutées en JavaScript'
document.getElementById('paragraphe1').textContent = "Voici quelques fonctions exécutées en JavaScript";

// Changer le contenu de chaque (li) de la liste en 'Liste1', Liste2', etc..

let contenu = document.querySelectorAll("li");
for (let i = 0; i < contenu.length; i++) {
    contenu[i].textContent = "liste " + parseInt(i + 1);
}


// Modifier le style 

// Aligner le titre 1 au centre de la page 

document.getElementById("titre1").setAttribute("align", "center");

// Mettre en rouge tous les éléments ayant la classe 'titre'

function rouge() {

    let tab = document.getElementsByClassName("titre");
    for (let i = 0; i < tab.length; i++) {    
        console.log('coucou');
        tab[i].style.color = 'red';
    }


    //.style.borderColor='red'
}
rouge();


