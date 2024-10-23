const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];


  function stampaNome(array) {
    array.forEach(studente => {
        console.log(studente.nome);
    });
    
  }

  stampaNome(studenti);

  function studenteModello(array) {
        return array.find(studente => studente.voto>90);
        }
  console.log(studenteModello(studenti));

  function mediaVoti(array) {
    const sommaVoti= array.reduce((acc,voto)=> acc+voto.voto,0);
    const media= sommaVoti/array.length;
    return media 
  }

  console.log(mediaVoti(studenti));

  function capsName(array) {
    return array.map(studente=> studente.nome.toUpperCase());
  }

  console.log(capsName(studenti));

  function filtroVoti(array) {
    return array.filter(studente=> studente.voto>85);
  }

  console.log(filtroVoti(studenti)); 

  