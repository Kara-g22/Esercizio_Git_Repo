// Esercizio  Gara a Punti
// Creare un array di oggetti:
// Ogni oggetto rappresenta un partecipante con le proprietà:
// nome: il nome del partecipante.
// punti: il punteggio, inizializzato a 0.

// Definire una funzione generaPuntiCasuali:
// La funzione deve restituire un numero casuale tra 1 e 10, che rappresenta i punti raccolti casualmente da ogni partecipante.

// Implementare la funzione iniziaGara:
// Mostrare un messaggio di inizio gara in console.

// Utilizzare setInterval per aggiornare ogni secondo i punti di ciascun partecipante:
// Ogni partecipante guadagna un punteggio casuale (usando generaPuntiCasuali).
// Aggiornare il punteggio totale del partecipante e mostrare un messaggio in console con il punteggio ottenuto e il totale aggiornato.

// Terminare la gara dopo 10 secondi:
// Utilizzare setTimeout per fermare l'intervallo (clearInterval) e mostrare un messaggio di fine gara.
// Ordinare i partecipanti in base al punteggio totale

const partecipanti=[
    {
        nome:"Paolo",
        punti: 0,
        bonus:false,
    },
    {
        nome:"Sara",
        punti: 0,
        bonus:false,
    },
    {
        nome:"Elena",
        punti: 0,
        bonus:false,
    },
    {
        nome:"Luca",
        punti: 0,
        bonus:false,
    },
];


function generaPunti(array) {
    array.forEach(partecipante => {
        let punteggioSessione = Math.floor(Math.random() * 10) + 1;
        partecipante.punti += punteggioSessione;
        if (partecipante.bonus) {
            const puntiBonus= Math.floor(Math.random()*3)+1
            partecipante.punti += puntiBonus;
            console.log(`${partecipante.nome} ha ottenuto ${puntiBonus} punti bonus!`);
        }
        console.log(`Il concorrente ${partecipante.nome} ha ottenuto ${partecipante.punti} punti! con un guadagno di ${punteggioSessione}`);
    });
}

function bonus() {
    const partecipanteCasuale= partecipanti[Math.floor(Math.random()*partecipanti.length)];
    partecipanteCasuale.bonus = true;
    setTimeout(() => {
        partecipanteCasuale.bonus = false;
    }, 1000);    
}

function iniziaGara() {
    const id = setInterval(() => generaPunti(partecipanti), 1000); // Usa una funzione anonima per passare il riferimento
    setTimeout(bonus, 3000);
    setTimeout(() => {
        clearInterval(id);
        console.log("La gara è terminata!");
        const classifica= partecipanti.sort((a,b) => b.punti - a.punti);
        classifica.forEach(partecipante => {
        console.log(`${partecipante.nome} : ${partecipante.punti}`);
});
    console.log(`il vincitore è ${classifica[0].nome} con ${classifica[0].punti} punti`);
    }, 10000);
}



iniziaGara();

