// Esercizio 6: Simulazione di una Partita di Calcio tra Squadre
// ----------------------------------------------------------
// In questo esercizio, dovrai creare due oggetti che rappresentano delle squadre di calcio.
// Ogni oggetto squadra deve avere le seguenti proprietà e metodi:
//
// 1. Crea due oggetti "SquadraA" e "SquadraB" con le seguenti proprietà:
//    - nome: stringa
//    - allenatore: stringa
//    - gol: numero (inizializzato a 0)
//
// 2. Aggiungi un metodo "giocaPartita" a ciascun oggetto che utilizza Math.random() per generare
//    un gol casuale tra 0 e 3, aggiornando il gol della squadra.
//
// 3. Crea una funzione esterna "simulaPartita" che accetta due oggetti squadra come argomenti.
//    Questa funzione dovrà:
//    - Chiamare il metodo "giocaPartita" di entrambe le squadre per generare i punteggi.
//    - Confrontare i punteggi delle due squadre e stampare:
//        - "La [nomeSquadraA] ha vinto [golA] - [golB]"
//        - "La [nomeSquadraB] ha vinto [golA] - [golB]"
//        - "La partita [nomeSquadraA] - [nomeSquadraB] è finita in parità [golA] a [golB]"


// class Squadra {
//     constructor(nome,allenatore,gol){
//         this.nome=nome;
//         this.allenatore=allenatore;
//         this.gol=gol;
//     }
//     giocaPartita(){
//         this.gol=Math.floor(Math.random()*10);
//     }
// }

// let SquadraA = new Squadra ("Milan","Fonseca",0);
// let SquadraB = new Squadra ("Inter","Inzaghi",0);

// let simulaPartita=function(a,b) {
//     a.giocaPartita();
//     b.giocaPartita();

//     if (a.gol>b.gol) {
//         console.log(`${a.nome} vince contro ${b.nome}: ${a.gol} - ${b.gol}`);
        
//     }else if(b.gol>a.gol){
//         console.log(`${b.nome} vince contro ${a.nome}: ${b.gol} - ${a.gol}`);
//     }else if(a.gol===b.gol){
//         console.log(`${a.nome} pareggia contro ${b.nome}: ${a.gol} - ${b.gol}`);
//     }

    
// }

// simulaPartita(SquadraA,SquadraB);


