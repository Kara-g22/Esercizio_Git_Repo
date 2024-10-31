const personaggi=[
    {
        nome:"Alice",
        coraggio: 5,
        salvo: false
    },
    {
        nome:"Bob",
        coraggio: 7,
        salvo: false
    },
    {
        nome:"Fred",
        coraggio: 6,
        salvo: false
    },
    {
        nome:"Shaggy",
        coraggio: 4,
        salvo: false
    },
]

function eventoSpaventoso(personaggio) {
    const eventi=[`un fantasma appare dal nulla`,
                  `una porta si chiude con un colpo`,
                  `una risata malefica dal piano superiore`,
                  `sangue esce dal lavello`,
                  `qualcuno bussa dall'armadio`,
                  `una voce sussurra il tuo nome`];
    const valoreCasuale= Math.random() < 0.6 ? -2 : +2;
    const eventoCasuale= eventi[Math.floor(Math.random()*eventi.length)];
    personaggio.coraggio += valoreCasuale;
    if (valoreCasuale<0) {
        console.log(`${eventoCasuale}, ${personaggio.nome} scappa impaurito perdendo coraggio. Coraggio attuale ${personaggio.coraggio}`);
        
    }else{
        console.log(`${eventoCasuale}, ${personaggio.nome} lo affronta coraggiosamente guadagnando coraggio. Coraggio attuale ${personaggio.coraggio}`);
    }

    if (personaggio.coraggio<= 2) {
        personaggio.salvo = null;
        console.log(`${personaggio.nome} è troppo impaurito per fuggire e rimane intrappolato nella casa`);
    }else if (personaggio.coraggio>= 8 && personaggio.salvo===false){
        personaggio.salvo === true;
        console.log(`${personaggio.nome} trova il modo di fuggire dalla casa salvandosi`);
    }
}

function iniziaStoria() {
    console.log(`Inizia la storia...`);
    const id= setInterval(() => {
        personaggi.forEach(personaggio => {
            eventoSpaventoso(personaggio);
        });
        const intrappolati= personaggi.every(personaggio => personaggio.salvo === null);
        const fuggiti= personaggi.every(personaggio => personaggio.salvo === true);
        if (intrappolati || fuggiti) {
            clearInterval(id);
        }

    }, 3000);
    setTimeout(() => {
        clearInterval(id);
    }, 15000);
}