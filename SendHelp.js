const ordini=[
    {
        id:1,
        prodotto:"frullatore",
        quantita:4,
        spedito: true
    },
    {
        id:2,
        prodotto:"penne",
        quantita:17,
        spedito: false
    },
    {
        id:3,
        prodotto:"pentola",
        quantita: 2,
        spedito: false
    },
    {
        id:4,
        prodotto:"quaderni",
        quantita:4,
        spedito: true
    },
    {
        id:5,
        prodotto:"frullatore",
        quantita:4,
        spedito: false
    }
]

function controlloSpedizione(array) {
    const ordiniSpediti= array.every(oggetto=> oggetto.spedito);
    return ordiniSpediti;
}

if (controlloSpedizione(ordini)===true) {
    console.log(`Tutti gli ordini sono stati spediti`)
}else{
    console.log(`Ci sono ordini ancora da spedire`)
}


function controlloColli(array) {
    const numeroOggetti= array.some(oggetto=> oggetto.quantita > 10);
    return numeroOggetti
}

console.log(`presenza coli superiori alle 10 unita: ${controlloColli(ordini)}`);


function ordiniNonSpediti(array) {
    return array.filter(ordini=> ordini.spedito===false);
}

console.log(ordiniNonSpediti(ordini))


function contorlloOggetto(id,array) {
    const check= array.find(oggetto => oggetto.id === id);
    if (check) {
       console.log(`L'ordine con id: ${id} contiene l'oggetto ${check.prodotto} è presente in quatita ${check.quantita}, stato spedizione ${check.spedito}`);
       if (check.spedito) {
            console.log(`Ordine gia spedito`);
       }else{
            console.log(`Ordine non spedito, procedere all'inserimento`);
       }
    }else{
        console.log(`all'id: ${id} non è associato alcun ordine`);
    }
}

contorlloOggetto(3,ordini);

