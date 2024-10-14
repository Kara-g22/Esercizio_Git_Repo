// 1. Scrivi una funzione chiamata 'generaComplimento' che generi complimenti casuali. La funzione deve accettare il nome di una persona come parametro e generare un complimento casuale basato su una selezione randomica. (Usa Math.random() per generare un numero casuale compreso tra 1 e 7.)
// 2. La funzione deve fare uso di un costrutto switch per selezionare il complimento.(Utilizza un switch per selezionare un complimento in base al numero casuale generato. Il complimento DEVE includere il nome passato come parametro)
// 3. AGGIUNGERE un messaggio speciale per chi si chiama "Mario" utilizzando l'operatore ternario
// 4. Stampa il complimento generato nella console.

//Bonus: Ci sono altri modi per fare la stessa operazione che non sia switch? Come?








// function generaComplimento(a){
//     let numero= Math.floor(Math.random()*7)+1;
//     let complimento= "";
//     switch (numero) {
//         case 1:
//             complimento = a+ " " + "hai i capelli lisci";
//             break;
//         case 2:
//             complimento = a+ " " + "sei molto gentile";
//             break;
//         case 3:
//             complimento = a+ " " + "corri molto velocemente";
//             break;
//         case 4:
//             complimento = a+ " " + "sei una persona molto positiva";
//             break;
//         case 5:
//             complimento = a+ " " + "sei una persona molto solare";
//             break;
//         case 6:
//             complimento = a+ " " + "hai dei occhi bellissimi";
//             break;
//         case 7:
//             complimento = a+ " " + "sei molto determinato";
//             break;
    
//         default:
//             complimento = a + " " + "non ti meriti alcun complimento"
//             break;
//     }
    
//     complimento += a.toLowerCase() ==="mario" ? " inoltre chi si chiama mario ha sempre una marcia in più":" però non sei come Mario";
//     console.log(complimento);

// }

// function generaElogio(b) {
//     let num= Math.floor(Math.random()*7)+1;
//     let elogio = "";
//     if(num===1){
//         elogio = b+ " " + "hai i capelli lisci";
//     }else if(num===2) {
//         elogio = b+ " " + "sei molto gentile";
//     } else if(num===3){
//         elogio = b+ " " + "corri molto velocemente";
//     }else if(num===4){
//         elogio = b+ " " + "sei una persona molto positiva";
//     }else if(num===5){
//         elogio = b+ " " + "sei una persona molto solare";
//     }else if(num===6){
//         elogio = b+ " " + "hai dei occhi bellissimi";
//     }else if(num===7){
//         elogio = b+ " " + "sei molto determinato";
//     }
//     elogio += b.toLowerCase() === "mario" ? " inoltre chi si chiama mario ha sempre una marcia in più":" però non sei come Mario";
//     console.log(elogio);

// }

// generaComplimento("Francesca");
// generaComplimento("Luca");
// generaComplimento("Mario");
// generaElogio("Mario");
// generaElogio("Marco");




// Creiamo un genera storie randomico

// 1. Definisci tre funzioni per scegliere casualmente un nome, un'azione e un luogo:
// scegliNome: Deve restituire un nome casuale tra cinque opzioni (ad esempio "Alice", "Mario", "Giovanni", "Luca", "Elena")
// scegliAzione: Deve restituire un'azione casuale tra cinque opzioni (ad esempio "mangia", "corre", "gioca", "legge", "disegna")
// scegliLuogo: Deve restituire un luogo casuale tra cinque opzioni (ad esempio "nel parco", "al mare", "in montagna", "in biblioteca", "a scuola")
// Queste funzioni devono generare un numero casuale e restituire un risultato in base a quel numero (utilizza il metodo che preferisci)

//2. Crea la funzione principale chiamata generaStoria che coordini la creazione della storia. La funzione deve usare un ciclo per generare 3 frasi casuali che combinano un nome, un'azione, e un luogo
// All'interno della funzione principale generaStoria, invoca le funzioni secondarie per ottenere un nome, un'azione e un luogo, combinandoli in una frase che descrive la scena

//3. Ogni frase generata deve essere stampata in console

//BONUS: Crea una arrow function chiamata commentoSimpatico, che restituisca un commento casuale tra cinque opzioni (ad esempio "Che giornata incredibile!", "Davvero un'avventura!", "Non ci posso credere!", ecc.) Anche qui, usa un numero casuale per scegliere il commento

// function scegliNome() {
//     let num= Math.floor(Math.random()*5)+1;
//     let nome= "";
//     switch (num) {
//         case 1:
//             return "Alice";
//             break;
//         case 2: 
//             return "Mario";
//             break;
//         case 3:
//             return "Luca";
//             break;
//         case 4:
//             return "Giovanni";
//             break;
//         case 5:
//             return "Elena";
//             break;
//         default:
//             break;
//     }
// }
// function scegliAzione() {
//     let num= Math.floor(Math.random()*5)+1;
//     let nome= "";
//     switch (num) {
//         case 1:
//             return "mangia";
//             break;
//         case 2: 
//             return "corre";
//             break;
//         case 3:
//             return "gioca";
//             break;
//         case 4:
//             return "legge";
//             break;
//         case 5:
//             return "disegna";
//             break;
//         default:
//             break;
//     }
// }
// function scegliLuogo() {
//     let num= Math.floor(Math.random()*5)+1;
//     let nome= "";
//     switch (num) {
//         case 1:
//             return "nel parco"; 
//             break;
//         case 2: 
//             return "al mare"; 
//             break;
//         case 3:
//             return "in montagna";
//             break;
//         case 4:
//             return "in biblioteca";
//             break;
//         case 5:
//             return "a scuola";
//             break;
//         default:
//             break;
//     }
// }
// function generaStoria(a) {
//     a = numeroStorie;
//     for (let i=1; i <= a; i++) {
//     let nome= scegliNome();
//     let azione= scegliAzione();
//     let luogo= scegliLuogo();
//     console.log (nome+" "+azione+" "+luogo)
// }
//     let commento=commentoSimpatico();
//     console.log(commento);
// }
// let commentoSimpatico = () => {
//     let numero= Math.floor(Math.random()*5)+1;
//     switch (numero) {
//         case 1:
//             return "Che giornata incredibile!"; 
//             break;
//         case 2: 
//             return "Davvero un'avventura!"; 
//             break;
//         case 3:
//             return "Non ci posso credere!";
//             break;
//         default:
//             return "nessun commento";
//             break;
//     }

// }  
// generaStoria(numeroStorie);



// function printName(){
//     let nome="marco";
//     let cognome="grassi";
//     console.log(nome + " " + cognome);
// }

// printName();

// let nome;
// let lingua;

// function sayHelloName(a, b){
//     if (typeof a !== "string" && b !=="string") {
//         console.log("formato variabile non supportata");
//     }
//     else{
//         switch (b) {
//         case "Italiano":
//             console.log("Ciao"+" "+a);
//             break;
//         case "Inglese":
//             console.log("Hello"+ " "+a);
//             break;
//         case "Francese":
//             console.log("Bonjour"+ " "+a);
//             break;
//         default:
//             break;
//     }    
//     }
//     }

    // sayHelloName("paolo", "Inglese");
    // sayHelloName("marco","Italiano");
    // sayHelloName("franco","Francese");
    // sayHelloName(87, "Inglese");

// sayHelloName(nome);


// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }



// for(let i=0; i<=20;i++){
//     if (i % 2 === 0){
//         if(i%4 === 0){
//             console.log(i+ " è pari ed è divisibile per 4");
//         }else{
//             console.log("il numero"+" "+i+" "+"è pari");
//         }
        
//     } else{
//         console.log(i+" non è pari");
//     }
// }







let sum=0;
function calcoloSomma(i,b) {
    while (i<=b) {
    
    sum += i;
    i++
    }
    if (sum%2 === 0) {
        console.log(sum);
        console.log("La somma è pari");

    }else{
        console.log(sum);
        console.log("La somma non è pari")
    }
    
}
calcoloSomma(2,60)

