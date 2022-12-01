// function JeuVideo(nom,type,support){
//     this.nom = nom;
//     this.type = type;
//     this.support = support;
//     this.presentation = () =>{
//     console.log(this.nom + " est un jeu de " + this.type + " disponible sur " + this.support)
//     }
//     }
//     let ageOfEmpire = new JeuVideo("Age of empire", "stratégie", "pc");
// tp 25 
// - Créez un constructeur de “Stagiaire” avec pour attributs : nom, prénom, age, ville de naissance
// - Ce constructeur aura pour méthode “sePresenter” qui affichera tous les attributs nom, prénom,
// age et le nom de la ville de naissance.
// - Creéz un constructeur de “Ville” avec pour attribut : nom, nombre d’habitants, pays.
// - Créez deux objets de “stagiaire” et créez autant d’objets de “ville” que necessaire pour pouvoir
// assigner ces objets à l’attribut “ville” de naissance”.



function Stagiaires(nom,prenom,age,VilleDeNaissance){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.VilleDeNaissance = VilleDeNaissance;
    this.sePresenter = () => {
        console.log(this.nom + " " + this.prenom +" " + "a" + " " + this.age +" " + "et il est né a" + " " + this.VilleDeNaissance.nom + ".")
    }
}
let montpellier = new Ville ("Montpellier","500","France");

let Alexpiochelle = new Stagiaires("Piochelle","Alex","28 ans" ,montpellier);
Alexpiochelle.sePresenter();
console.log(Alexpiochelle);
function Ville(nom,nbHab,pays){
    this.nom = nom;
    this.nbHab = nbHab;
    this.pays = pays;
}

