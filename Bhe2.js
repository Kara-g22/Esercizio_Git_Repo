// Inizializza la libreria come un array vuoto
const libreria = [];

// Funzione per aggiungere un libro alla libreria
function addLibro(titolo, autore, genere, array) {
    array.push({
        titolo: titolo,
        autore: autore,
        genere: genere,
        valutazioni: []  // Ogni libro ha un array vuoto per le valutazioni iniziali
    });
}

// Aggiungiamo alcuni libri alla libreria
addLibro("Harry Potter", "J.K.Rowling", "Fantasy", libreria);
addLibro("Il Signore degli Anelli", "Tolkien", "Fantasy", libreria);
addLibro("Hunger Games", "Suzanne Collins", "Fantasy", libreria);

// Funzione per aggiungere una valutazione a un libro
function addValutazione(titoloLibro, nomeValutatore, voto) {
    // Trova il libro nella libreria usando il titolo (case-insensitive)
    const libro = libreria.find(libro => libro.titolo.toLowerCase() === titoloLibro.toLowerCase());
    
    // Se il libro esiste, aggiungi la valutazione
    if (libro) {
        libro.valutazioni.push({ nome: nomeValutatore, voto: voto });
        console.log("Recensione salvata con successo!");
    } else {
        console.log("Il libro non esiste nella libreria.");
    }
}

// Aggiungiamo alcune valutazioni ai libri
addValutazione("Harry Potter", "Marco", 10);
addValutazione("Il Signore Degli Anelli", "Luca", 8);

// Funzione per visualizzare le valutazioni di tutti i libri nella libreria
function visualizzaValutazioni() {
    // Scorriamo tutti i libri nella libreria
    libreria.forEach(libro => {
        console.log(`${libro.titolo} ha queste valutazioni:`);

        // Se ci sono valutazioni, elenchiamole
        if (libro.valutazioni.length > 0) {
            libro.valutazioni.forEach(valutazione => {
                console.log(`- ${valutazione.nome}: ${valutazione.voto}`);
            });
        } else {
            // Se non ci sono valutazioni, segnala che il libro non ha recensioni
            console.log("Non ha recensioni.");
        }
    });
}

// Visualizziamo tutte le valutazioni
visualizzaValutazioni();