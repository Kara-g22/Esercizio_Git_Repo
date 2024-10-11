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



// let num=3;
// let numero=6

// function operazione(a,b) {
//     let risultato= somma(a,b)+divisione(a,b)+moltiplicazione(a,b);
//     function somma(a,b){
//         let sum= a+b;
//         return sum
//     }
//     function divisione(a, b) {
//         let divs= a/b;
//         return divs    
//     }
//     function moltiplicazione(a,b) {
//         let molt= a*b;
//         return molt
//     }

//     return risultato
// }

// console.log(operazione(num,numero));


let prezzoCamera= "BB";


switch (prezzoCamera) {
    case "BB":
        console.log("il prezzo della stanza BB è 50 Euro");
        break;
    case "HB":
        console.log("Il prezzo della camera HB è 80 Euro");
        break;
    case "FB":
        console.log("Il prezzo della camera FB è 100 Euro");
        break;

    default:
        console.log("Camera non valida")
        break;
}


let age = 16; 
let message = (age >= 18) ? "You can drive a car" : "You are too young to drive";
console.log(message);

let number= 7;
let num=(number>0)?"The number is positive":"The number is negative";
console.log(num);

let isSunnyDay= true;
let isHomeworkCompleted= false;

let canGoOut= (isSunnyDay===true && isHomeworkCompleted===true) ? "Jesse can go out to play" : "Jasse stay at home";
console.log(canGoOut);