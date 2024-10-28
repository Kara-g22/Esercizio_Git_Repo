const ordini= [
    {
        utente:{
            nome:`Sara`,
            email:`Sara123@gmail.com`,
            indirizzo:`Via delle foglie 12`,
        },
        prodotti:[
            {
                nomeProdotto:`Frullatore`,
                quantita:`12`,
                prezzounitario:`30`,

        },
        {
            nomeProdotto:`Pentole`,
            quantita:`8`,
            prezzounitario:`25`,

    },
    ]

    },
]

function sommarioOrdini(array) {
    const {utente: {nome, email, indirizzo}, prodotti} = array;
    console.log(`${nome}, con indirizzo mail: ${email} residente in via: ${indirizzo} ha acquistato:`)
    const prezzoTotale= prodotti.map(({nomeProdotto,quantita, prezzounitario}) => {
        const totale= quantita * prezzounitario;
        console.log(`
                Prodotto:${nomeProdotto},
                quatita:${quantita},
                prezzounitario:${prezzounitario}
                `)
        return totale;
    })
    const totaleOrdine= prezzoTotale.reduce((acc,cur) => acc+cur,0);
    console.log(`per un totale di: ${totaleOrdine}`)
    return totaleOrdine; 

}

sommarioOrdini(ordini[0]);