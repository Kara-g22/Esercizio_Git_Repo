// 1. Scrivi una funzione chiamata 'generaComplimento' che generi complimenti casuali. La funzione deve accettare il nome di una persona come parametro e generare un complimento casuale basato su una selezione randomica. (Usa Math.random() per generare un numero casuale compreso tra 1 e 7.)
// 2. La funzione deve fare uso di un costrutto switch per selezionare il complimento.(Utilizza un switch per selezionare un complimento in base al numero casuale generato. Il complimento DEVE includere il nome passato come parametro)
// 3. AGGIUNGERE un messaggio speciale per chi si chiama "Mario" utilizzando l'operatore ternario
// 4. Stampa il complimento generato nella console.

//Bonus: Ci sono altri modi per fare la stessa operazione che non sia switch? Come?








function generaComplimento(a){
    let numero= Math.floor(Math.random()*7)+1;
    let complimento= "";
    switch (numero) {
        case 1:
            complimento = a+ " " + "hai i capelli lisci";
            break;
        case 2:
            complimento = a+ " " + "sei molto gentile";
            break;
        case 3:
            complimento = a+ " " + "corri molto velocemente";
            break;
        case 4:
            complimento = a+ " " + "sei una persona molto positiva";
            break;
        case 5:
            complimento = a+ " " + "sei una persona molto solare";
            break;
        case 6:
            complimento = a+ " " + "hai dei occhi bellissimi";
            break;
        case 7:
            complimento = a+ " " + "sei molto determinato";
            break;
    
        default:
            complimento = a + " " + "non ti meriti alcun complimento"
            break;
    }
    
    complimento += a.toLowerCase() ==="mario" ? " inoltre chi si chiama mario ha sempre una marcia in più":" però non sei come Mario";
    console.log(complimento);

}

function generaElogio(b) {
    let num= Math.floor(Math.random()*7)+1;
    let elogio = "";
    if(num===1){
        elogio = b+ " " + "hai i capelli lisci";
    }else if(num===2) {
        elogio = b+ " " + "sei molto gentile";
    } else if(num===3){
        elogio = b+ " " + "corri molto velocemente";
    }else if(num===4){
        elogio = b+ " " + "sei una persona molto positiva";
    }else if(num===5){
        elogio = b+ " " + "sei una persona molto solare";
    }else if(num===6){
        elogio = b+ " " + "hai dei occhi bellissimi";
    }else if(num===7){
        elogio = b+ " " + "sei molto determinato";
    }
    elogio += b.toLowerCase() === "mario" ? " inoltre chi si chiama mario ha sempre una marcia in più":" però non sei come Mario";
    console.log(elogio);

}

generaComplimento("Francesca");
generaComplimento("Luca");
generaComplimento("Mario");
generaElogio("Mario");
generaElogio("Marco");

