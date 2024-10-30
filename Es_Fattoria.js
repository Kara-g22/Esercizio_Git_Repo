// Simulazione di una Fattoria
// -------------------------------------
// Obiettivo: Crea un sistema per gestire una fattoria che simula diversi animali e le loro attività quotidiane.
//
// 1. Crea un oggetto "Animale":
//    - L'oggetto deve avere le seguenti proprietà:
//        - nome (stringa): il nome dell'animale.
//        - tipo (stringa): il tipo di animale (ad esempio, 'mucca', 'gallo', 'pecora').
//        - eta (numero): l'età dell'animale.
//    - Deve avere un metodo "parla()" che utilizza una callback per stampare il verso dell'animale in base al suo tipo. La callback deve essere definita all'esterno dell'oggetto.
//
// 2. Crea un oggetto "Fattoria":
//    - L'oggetto deve avere una proprietà "animali" che rappresenta un oggetto con diversi animali (es. mucca, gallo, pecora).
//    - Deve avere un metodo "faiParlareAnimali(callback)" che chiama il metodo "parla()" di ogni animale, utilizzando la callback per stampare il verso.
//
// 3. Definisci la callback:
//    - Crea una funzione chiamata "stampaVerso" che riceve il nome dell'animale e il verso. La funzione deve stampare un messaggio del tipo: "La mucca dice: Muu!".
//
// 4. Esegui la simulazione:
//    - Crea un'istanza dell'oggetto "Fattoria", aggiungi alcuni animali e chiama il metodo "faiParlareAnimali()" passando la callback "stampaVerso".

class Animale {
    constructor(nome,tipo,eta) {
        this.nome=nome;
        this.tipo=tipo;
        this.eta=eta;
        
    }
    parla(a){
        let versi={
            mucca: "muu",
            gallo: "chichi",
            pecora: "beeh",
        }
        a(this.tipo,versi[this.tipo.toLowerCase()])
    }
}

class Fattoria {
    constructor() {
        this.animali= {
            mucca: new Animale("Molly","Mucca",5),
            gallo: new Animale("Cedrone","gAllo",3),
            pecora: new Animale("Dolly","peCora",4),
        }
    }
    faiParlareAnimali(callback){
       for(let key in this.animali){
        this.animali[key].parla(callback);
       }
    }
}

function stampaVerso(a,b) {
    console.log(`${a} dice: ${b}`);
}

let fattoria= new Fattoria;

fattoria.faiParlareAnimali(stampaVerso);