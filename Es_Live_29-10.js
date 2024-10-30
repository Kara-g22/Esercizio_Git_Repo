//Esercitazione 1
// Dato il seguente array di oggetti 'notifiche'
// Scrivi una funzione gestisciNotifiche che:

// Accetti come parametri l’array notifiche e una callback.
// Filtri le notifiche in base al tipo specificato nella callback filtroTipo che filtra le notifiche in base al tipo "messaggio".
// Ordini le notifiche per data, dalla più recente alla più vecchia.
// Ritorni una lista formattata in cui ogni notifica mostra il nome dell’utente, il contenuto e la data.

//**Suggerimento: utilizza sort e il costrutto new Date per ordinare le notifiche per data**

const notifiche = [
    {
      utente: { nome: "Luca", email: "luca@example.com" },
      tipo: "messaggio",
      contenuto: "Hai un nuovo messaggio!",
      data: "2024-10-28",
    },
    {
      utente: { nome: "Anna", email: "anna@example.com" },
      tipo: "like",
      contenuto: "A qualcuno è piaciuto il tuo post!",
      data: "2024-10-27",
    },
    {
      utente: { nome: "Marco", email: "marco@example.com" },
      tipo: "commento",
      contenuto: "Hai un nuovo commento!",
      data: "2024-10-26",
    },
    {
      utente: { nome: "Matteo", email: "Matteo@example.com" },
      tipo: "messaggio",
      contenuto: "Hai un nuovo messaggio!",
      data: "2024-10-20",
    },
  ];
  

function filtroTipo(tipoMessaggio) {
  return notifiche.filter(({tipo}) => tipo === tipoMessaggio);
};


function gestisciNotifiche(array, filtroTipo) {
  const tipoMessaggio= filtroTipo("messaggio");
  const notificheOrdinate = tipoMessaggio.sort((a,b) => new Date (a.data) - new Date (b.data) );
  const formattazioneNotifiche = notificheOrdinate.map(notifica => {
    const { nome } = notifica.utente;
    const { contenuto, data } = notifica;
      return `hai una nuova notifica da ${nome}, ${contenuto} ricevuto in data: ${data}`;
  }).join(" ");
  

  return tipoMessaggio,notificheOrdinate,formattazioneNotifiche;
}

console.log(gestisciNotifiche(notifiche,filtroTipo));
