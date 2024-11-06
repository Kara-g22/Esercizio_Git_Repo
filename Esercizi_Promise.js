//Esercizio
//Dato un array di oggetti 'inventario' che rappresenta l’inventario dei prodotti con ogni articolo che include id, nome, prezzo, e disponibilita
//Dato un array di oggetti 'ordini' he rappresenta gli articoli ordinati con id e quantita

//Scrivi una funzione verficaDisponibilita(array, callback) che:
// Verifica se ogni articolo dell'ordine è disponibile in quantità sufficiente nell'inventario (utilizza l'id per il matching)
// Se tutti gli articoli sono disponibili, chiama la callback
// Se un articolo non è disponibile, restituisci un messaggio di errore appropriato.

//Scrivi una funzione calcolaTotale(array, callback) che:
// Calcola il totale dell'ordine sommando il prezzo degli articoli richiesti.
// Applica uno sconto del 10% se il totale supera 1000.
// Passa il totale calcolato alla callback.

//Scrivi una funzione simulaPagamento(totale, callback) che:
// Simula il pagamento con un ritardo casuale.
// Se il pagamento va a buon fine, passa un numero di conferma al callback.
// Simula un fallimento casuale del pagamento (10% di probabilità) e passa un messaggio di errore alla callback.

//Scrivi una funzione aggiornaMagazzino(array, callback) che:
// Riduce le quantità acquistate da disponibilità nell'inventario per ciascun articolo ordinato.
// Passa un messaggio di conferma alla callback.

// Utilizza il sistema delle Callback:
// Scrivi funzione processaOrdine() per:
// Eseguire verficaDisponibilita
// Se disponibile, passa a calculaTotale.
// Calcola il totale e procedi con simulaPagamento.
// Se il pagamento è completato, aggiorna l'inventario con aggiornaMagazzino.
// Se tutte le operazioni hanno successo completa l'ordine, altrimenti gestisci gli errori.

//BONUS: esegui il refactoring con le Promise

const inventario=[
    {
        id:1,
        nome:`gonna`,
        prezzo:50,
        disponibile: 25
    },
    {
        id:2,
        nome:`pantaloni`,
        prezzo:35,
        disponibile: 40
    },
    {
        id:3,
        nome:`maglietta`,
        prezzo:20,
        disponibile: 30

    },
]

const ordini=[
    {
        id:1,
        quantita:20,
        
    },
    {
        id:2,
        quantita:5,
    },
    {
        id:3,
        quantita:7,

    },
]


function verificaDisponibilita(array){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        array.forEach( ordine => {
            const prodotto = inventario.find( p => p.id === ordine.id)
            if (prodotto.disponibile>ordine.quantita) {
                resolve(`Disponibilità confermata`)
                
            } else{
                reject(`Errore`);
            }
        });
    }, 1000);   
    })   
}

function calcolaTotale(array){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let prezzo = 0;
        array.forEach((ordine) => {
            const prodotto = inventario.find( p => p.id === ordine.id);
            prezzo += prodotto.prezzo * ordine.quantita;
        if (prezzo > 1000) {
            prezzo *= 0.9;   
        } 
        
    })
    console.log( `Totale ordine: ${prezzo}`);
    resolve(prezzo);
}, 1000)
    })

    
}


function simulaPagamento(prezzo) { 
    return new Promise((resolve, reject) => {
        let random= (Math.random()*1000)+1;
    setTimeout(() => {
        if(Math.random()< 0.1){
            return reject(`Errore nel pagamento`)
        }else{
            const numeroOrdine=Math.floor(Math.random()*10000);
            console.log(`Pagamento eseguito con successo`);
            resolve(numeroOrdine);

        }
    }, random);
    })
    
    
}

function aggiornaMagazzino(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        array.forEach(ordine => {
            const prodotto = inventario.find( p => p.id === ordine.id);
            prodotto.disponibile -= ordine.quantita;
        });
        console.log(`Inventario aggiornato...`)
        resolve(`Aggiornamento avvenuto con successo`)
    }, timeout);
    })
    
    
}


function processaOrdine(){
    verificaDisponibilita(ordini)
        .then(()=> calcolaTotale(ordini))
        .then((prezzo)=> simulaPagamento(prezzo))
        .then((numeroOrdine)=>aggiornaMagazzino(ordini).then(()=> numeroOrdine))
        .then((numeroOrdine) => console.log(`ordine ${numeroOrdine} completato con successo`) )
        .catch((error) => console.error(`Errore: ${error}`))
}

processaOrdine()