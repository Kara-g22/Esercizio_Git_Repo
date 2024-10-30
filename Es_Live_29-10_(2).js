//Esercitazione 2
// Dato il seguente array di oggetti 'feedbackAssistenza'
// Scrivi una funzione analizzaFeedback che:

// Accetti come parametri l’array feedbackAssistenza e una callback per filtrare i feedback in base alla categoria.
// Filtri i feedback usando la callback per selezionare solo quelli di una specifica categoria.
// Calcoli la valutazione media della categoria e ritorni una stringa riepilogativa che includa:
// La categoria del feedback.
// La valutazione media.
// Un elenco dei commenti per quella categoria.

const feedbackAssistenza = [
    {
      utente: { nome: "Luca", email: "luca@example.com" },
      categoria: "Tecnico",
      valutazione: 4,
      commento: "Ottimo supporto!",
    },
    {
      utente: { nome: "Anna", email: "anna@example.com" },
      categoria: "Commerciale",
      valutazione: 5,
      commento: "Molto soddisfatta",
    },
    {
      utente: { nome: "Marco", email: "marco@example.com" },
      categoria: "Tecnico",
      valutazione: 3,
      commento: "Problemi risolti, ma con ritardo",
    },
    {
      utente: { nome: "Sara", email: "sara@example.com" },
      categoria: "Logistica",
      valutazione: 4,
      commento: "",
    },
  ];
  

  function filtraCategoria(categoriaAssistenza) {
    return feedbackAssistenza.filter(({categoria}) => categoria === categoriaAssistenza );
  }

  function analizzaFeedback(array,filtraCategoria) {
    const filtroAssistenze= filtraCategoria("Tecnico");
    const mediaValutazione= filtroAssistenze.reduce((acc,cur) => acc+cur.valutazione,0);
    const media= mediaValutazione/filtroAssistenze.length;
    const commentiAssistenze= filtroAssistenze.map(assistenza => assistenza.commento)
    .filter(commento => commento) 
    .join(", ");

    console.log(`riepilogo feedback:
            categoria feedback: ${filtroAssistenze.categoria},
            valutazione media risoluzione: ${media},
            commenti: ${commentiAssistenze}`);
  }


analizzaFeedback(feedbackAssistenza,filtraCategoria);