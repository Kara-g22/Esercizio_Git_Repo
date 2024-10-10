    //ESERCIZIO 1 IF/ELSE

// let name;
// let surname= "Rossi";
// let fullName= (name + " " + surname);

// if(name===true && surname===true){
//     console.log("Il tuo nome è"+ " " +fullName);
// }else{
//     console.log("Fullname is invalid");
// }

    //ESERCIZIO 2 IF/ELSE

// let pin= 1000;

// if(pin>999 && pin<=10000){
//     console.log("Pin is valid");
// }else{
//     console.log("pin is not valid")
// }

    //ESERCIZIO 3 IF/ELSE

// let primitive= false;

// if(typeof primitive === 'number'){
//     console.log("La variabile è di tipo:");
//     console.log(typeof primitive);
// }else if(typeof primitive === 'string'){
//     console.log("La variabile è di tipo:");
//     console.log(typeof primitive);
// }else if(typeof primitive === 'boolean'){
//     console.log("La variabile è di tipo:");
//     console.log(typeof primitive);
// }else{
//     console.log("La variabile è di tipo sconosciuto")
// }

// console.log("Done");


// let nome= "Marco";
// let cognome="Grassi";

// function welcome(a, b) {
//     let saluto= "Ciao "+ a +" "+ b;
//     return saluto

// }

// console.log(welcome(nome, cognome));


// let num=3;
// let numero=6

// function somma(a,b){
//     let sum= a+b;
//     return sum
// }
// function divisione(a, b) {
//     let divs= a/b;
//     return divs    
// }
// function moltiplicazione(a,b) {
//     let molt= a*b;
//     return molt
// }

// console.log(somma(num,numero),divisione(num,numero),moltiplicazione(num,numero));



let num=3;
let numero=6

function operazione(a,b) {
    let risultato= somma(a,b)+divisione(a,b)+moltiplicazione(a,b);
    function somma(a,b){
        let sum= a+b;
        return sum
    }
    function divisione(a, b) {
        let divs= a/b;
        return divs    
    }
    function moltiplicazione(a,b) {
        let molt= a*b;
        return molt
    }

    return risultato
}

console.log(operazione(num,numero));