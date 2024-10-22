const film = [];
const daVedere = [];

function addFilm(nome, genere, rating, array) {
    return array.push({
        Nome: nome,
        Genere: genere,
        Rating: rating
    });
}

addFilm('Avatar', 'Fantasy', 8, film);
addFilm('Cronache di Narnia', 'Fantasy', 6, film);
addFilm('Warrior', 'Azione', 9, film);
addFilm('Star Wars', 'Sci-fi', 10, daVedere);
addFilm('Inside Out', 'Animazione', 6, film);
addFilm('Il robot selvaggio', 'Animazione', 7, film);
addFilm('Avatar', 'Fantasy', 8, daVedere);
addFilm('The Batman', 'Azione', 8, film);
addFilm('Il corvo', 'Drammatico', 7, film);
addFilm('Slavin', 'Thriller', 9, film);
addFilm('Lotro', 'Fantasy', 7, daVedere);

// Lista di film
function lista(array) {
    return array.forEach(element => console.log(`${element.Nome}, ${element.Genere}, ${element.Rating}`));
}

// Filtra per Genere
function filtraPerGenere(x, array) {
    return array.filter(film => film.Genere.toLowerCase() === x.toLowerCase());
}

console.log(filtraPerGenere("Animazione", film));

// Filtra per valutazione più alta
function filmConValutazioneMassima(array) {
    
    const maxRating = array.reduce((acc, cur) => cur.Rating > acc ? cur.Rating : acc, 0);
    const ratingFinal = array.filter(film => film.Rating === maxRating);
    ratingFinal.forEach(film => console.log(`${film.Nome}, ${film.Genere}, ${film.Rating}`));
}

console.log(filmConValutazioneMassima(film));