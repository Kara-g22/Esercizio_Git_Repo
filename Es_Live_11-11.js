// Esercizio
// Dato il seguente array di supereroi
// 1. Crea una funzione asincrona getHeroDetails(id):

// Questa funzione deve accettare l'ID di un supereroe e, dopo un ritardo di 1 secondo, deve restituire un oggetto con i dettagli del supereroe (nome, poteri e livello aggiornato).

// Durante il ritardo, il livello del supereroe deve aumentare casualmente di un valore compreso tra 0 e 20.

// 2. Crea una funzione missionSuccess(heroLevel):

// Questa funzione deve determinare, con una certa probabilità, se la missione del supereroe è stata completata con successo o meno.
// La probabilità di successo deve dipendere dal livello di potere del supereroe:
// Se il livello del supereroe è maggiore di 90, la probabilità di successo è del 70%.
// Se il livello è inferiore a 90, la probabilità di successo è del 40%.
// Usa Math.random() per generare un numero casuale e confrontarlo con la probabilità di successo.

// 3. Crea una funzione sendHeroOnMission(hero):

// Questa funzione deve simulare la preparazione del supereroe per una missione:
// Stampare un messaggio che indica che il supereroe si sta preparando.
// Chiamare getHeroDetails(hero.id) per ottenere i dettagli aggiornati del supereroe.
// Stampare il nome del supereroe e il suo livello aggiornato dopo il ritorno dalla funzione asincrona.
// Determinare, con la funzione missionSuccess(hero.level), se la missione è riuscita o meno e stampare il risultato.

// 4. Crea una funzione manageTeam():

// Questa funzione deve iterare su tutti i supereroi nel team.
// Per ogni supereroe, deve chiamare sendHeroOnMission(hero) per raccogliere i dettagli e prepararlo alla missione.
// Utilizza async/await per gestire la chiamata asincrona e fare in modo che ogni supereroe venga "preparato" prima di passare al successivo.

//OUTPUT: Quando esegui il codice, nella console dovresti vedere un messaggio per ogni supereroe che indica:
// Se il supereroe è stato preparato per la missione e il suo livello aggiornato.
// Se la missione è stata completata con successo o meno, in base al livello e alla probabilità di successo.

const superheroes = [
    {
      id: 1,
      name: "Spider-Man",
      powers: ["super strength", "agility", "wall-crawling", "spider-sense"],
      level: 85,
    },
    {
      id: 2,
      name: "Iron Man",
      powers: ["powered armor", "genius intellect", "flight", "energy blasts"],
      level: 95,
    },
    {
      id: 3,
      name: "Captain America",
      powers: ["super strength", "enhanced agility", "vibranium shield"],
      level: 90,
    },
    {
      id: 4,
      name: "Thor",
      powers: [
        "godly strength",
        "flight",
        "control over thunder and lightning",
        "immortality",
      ],
      level: 100,
    },
    {
      id: 5,
      name: "Hulk",
      powers: ["super strength", "regeneration", "high durability"],
      level: 98,
    },
    {
      id: 6,
      name: "Black Widow",
      powers: ["expert martial artist", "spycraft", "intellect"],
      level: 80,
    },
    {
      id: 7,
      name: "Black Panther",
      powers: ["enhanced strength", "speed", "agility", "vibranium suit"],
      level: 90,
    },
    {
      id: 8,
      name: "Doctor Strange",
      powers: ["magic", "time manipulation", "astral projection"],
      level: 92,
    },
    {
      id: 9,
      name: "Wolverine",
      powers: ["regeneration", "adamantium skeleton", "super senses", "claws"],
      level: 85,
    },
    {
      id: 10,
      name: "Deadpool",
      powers: ["regeneration", "super strength", "combat skills", "agility"],
      level: 88,
    },
  ];


function getHeroDetails(id,array) {
    return new Promise((resolve) => {

        setTimeout(() => {
            const eroeFiltrato= array.find( eroe=> eroe.id === id )   
            eroeFiltrato.level += Math.floor(Math.random()*20);  
            resolve(eroeFiltrato)
            }, 1000);    
        
    })
}

function missionSuccess(heroLevel) {
    const minLevel = 90;
    const esitoMissione = Math.random();
    const probabilita= heroLevel>minLevel? 0.7:0.4
    return esitoMissione<probabilita
}


async function sendHeroOnMission(hero) {
    console.log(`${hero.name} si sta preparando...`);
    try{
        const datiEroe= await getHeroDetails(hero.id,superheroes);
        console.log(`Dati eroe racuperati:
                nome: ${datiEroe.name}
                Level:${datiEroe.level}`);
        const successo= missionSuccess(datiEroe.level)
        if (successo) {
            console.log(`Complimenti ${datiEroe.name} Missione Compiuta!`);
            
        } else {
            console.log(`Missione Fallita!`);
            
        }
    }catch(error){
        console.error(`${error}, ERRORE!`);
        
    }   
}


async function manageTeam() {
    try {
        superheroes.forEach( async (hero) => {
            const missione= await sendHeroOnMission(hero)
            
        });
    } catch (error) {
            console.error(error);
            
    }
    
}

manageTeam()