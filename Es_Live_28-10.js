const prenotazioni= [{
    cliente:{
        nome:`Marco`,
        email:`Marco123@gmail.com`,
        numeroTelefono:3400000000
    },
    date:[`01/11/2024`,`02/11/2024`,`03/11/2024`],
    stanze:[{
        tipologia:`doppia`,
        prezzoNotte:50,
        extra:[`Colazione`,`Accesso piscina`,`Pulizie`],
        persone: 2
    },
    {
        tipologia:`suite`,
        prezzoNotte:200,
        extra:[`Colazione`,`Accesso piscina`,`Pulizie`],
        persone: 2
    },
]
},
];

function riepilogoPrenotazione(prenotazione,...extraAggiuntivi) {
    const {cliente:{nome,email,numeroTelefono},date,stanze} = prenotazione;
    const numeroNotti= date.length;
        console.log(`contatti cliente:
                     cliente: ${nome},
                     contatto: ${email} - ${numeroTelefono},
                     periodo: dal${date[0]} al ${date[date.length-1]},
                     numero notti: ${numeroNotti}`)

   
    extraAggiuntivi.forEach(extra => {
        if (typeof extra !== "string") {
            console.log(`${extra} non è una stringa`)
        }
    });
    const extraFiltrati= extraAggiuntivi.filter(extra => typeof extra === "string");    
        
    
    const stanzeExtra= stanze.map((stanza)=>{ 
        const {tipologia,prezzoNotte,extra,persone}= stanza
        const totaleStanza= prezzoNotte*numeroNotti;
        const extraCompleti= [...extra,...extraFiltrati];
        console.log(`Stanze prenotate:
                        tipologia:${tipologia},
                        numero persone: ${persone},
                        prezzo totale: ${totaleStanza},
                        extra aggiunti: ${extraCompleti.join(", ")}`)
        return totaleStanza;
    });
    
    const totalePrenotazione= stanze.reduce((acc,{prezzoNotte}) => acc+(prezzoNotte*numeroNotti),0);
    console.log(`costo totale prenotazione: ${totalePrenotazione}`);
}


riepilogoPrenotazione(prenotazioni[0],`spa`,`area giochi`,`taxi`,32);