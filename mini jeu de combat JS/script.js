class Personnage {
    constructor(pseudo, classe, sante, attaque, niveau) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;
        this.niveau = 1;
    }
    evoluer() {
        this.niveau++;0.
        console.log(this.pseudo + " " + "passe au niveau" + " " + this.niveau + "!")
    }
    verifierSante(){
        if (this.sante <= 0) {
            this.sante = 0;
            console.log(this.pseudo +" " + "a perdu")
        }
    }
    get informations(){
        console.log(this.pseudo +" "+this.classe +" "+ "a"+" "+ this.sante +" "+"points de vie et est au niveau"+" "+ this.niveau)
}
}
let Digone = new Personnage("Digone", "guerrier", "0", "coup de hache", "20")
Digone.evoluer();


Digone.verifierSante();
console.log(Digone)
Digone.informations

class Magicien extends Personnage {
    constructor(pseudo){
        super(pseudo)
        this.classe = Magicien;
        this.sante = 170;
        this.attaque = 90;
    }
    attaquer(Personnage) {
        Personnage.sante -= this.attaque
        console.log(`${this.pseudo} attaque ${Personnage.pseudo} avec son épée (${this.attaque} dégâts).`)
        this.evoluer()
        Personnage.verifierSante()
    }
    coupSpecial(Personnage) {
        Personnage.sante -= (this.attaque) * 5
        console.log(`${this.pseudo} crie VOUS NE PASSEREZ PAS ! Et déclenche une onde de choc sur ${Personnage.pseudo} (${(this.attaque) * 5} dégâts).`)
        this.evoluer()
        Personnage.verifierSante()
    }
}
class Guerrier extends Personnage {
    constructor(pseudo){
        super(pseudo)
        this.classe = Guerrier;
        this.sante = 350;
        this.attaque = 50;
    }
attaquer(Personnage) {
    Personnage.sante -= this.attaque
    console.log(`${this.pseudo} attaque ${Personnage.pseudo} avec son épée (${this.attaque} dégâts).`)
    this.evoluer()
    Personnage.verifierSante()
}
coupSpecial(Personnage) {
    personnage.sante -= (this.attaque) * 5
    console.log(`${this.pseudo} crie VOUS NE PASSEREZ PAS ! Et déclenche une onde de choc sur ${personnage.pseudo} (${(this.attaque) * 5} dégâts).`)
    this.evoluer()
    personnage.verifierSante()
}
}


let Gandalf = new Magicien('Gandalf')
let Gimli = new Guerrier('Gimli')
console.log(Gandalf);
console.log(Gimli);

Gandalf.attaquer(Gimli);


Gimli.attaquer(Gandalf);


Gandalf.coupSpecial(Gimli);

