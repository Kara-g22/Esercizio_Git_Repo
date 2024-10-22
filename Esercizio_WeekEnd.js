//NB: Questi esercizi sono strutturati per farti apprendere come concatenare più metodi in una volta: cerca di scrivere meno codice possibile



//Esercizio 1
//Dato il seguente array di numeri, filtra i numeri pari e calcola la loro somma.


const numberi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumeri= numberi.filter((num)=> num%2 === 0);
console.log(newNumeri);
const sommaNumeri= newNumeri.reduce((acc,cur) => acc+cur, 0);
console.log(sommaNumeri);



//Esercizio 2
//Dato il seguente array di parole, trasforma tutte le parole in maiuscolo e poi conta quante lettere ci sono in totale.


const parole = ["ciao", "albero", "parco", "mese", "divertimento"];
const paroleMaiuscole= parole.map(a => a.toUpperCase());
console.log(paroleMaiuscole);
const numeriParole= paroleMaiuscole.reduce((acc,cur) => acc+cur.length,0);
console.log(`Il numero totale di lettere è ${numeriParole}`);



//Esercizio 3
// Dato il seguente array di numeri che contiente sia valori positivi che negativi, filtra i numeri positivi e calcola la loro media.


const numberiMix = [-5, 10, 15, -20, 25, 30];
const numeriPositivi = numberiMix.filter((num)=> num>=0);
console.log(numeriPositivi);
const sommaNumeri=numeriPositivi.reduce((acc,cur)=> acc+cur, 0);
console.log(sommaNumeri);
const media = sommaNumeri/numeriPositivi.length;
console.log(media);


//Esercizio 4
//Dato il seguente array di frutti, crea un oggetto che conta le occorrenze di ciascun frutto e poi filtra l'oggetto per mostrare solo i frutti che compaiono più di una volta.


const frutti = ["apple", "banana", "apple", "orange", "banana", "banana"];
let conteggio = frutti.reduce((acc,cur) => { 
    acc[cur] = (acc[cur]||0) +1;  
    return acc;
},{});
console.log(conteggio);

fruttiMultipli= Object.fromEntries(Object.entries(conteggio).filter(( [a,b]) => b>1));
console.log(fruttiMultipli);


//Esercizio 5
//Crea un array di oggetti rappresentanti studenti (con nome e voto), filtra gli studenti che hanno un voto maggiore o uguale a 60 e crea un nuovo array di oggetti contenente solo i nomi degli studenti e il loro voto.

const studentiVoti = [["Marco",60],["Luca",40],["Mario",50],["Lucia",78],["Samantha",83]];
const studentiPromossi = studentiVoti.filter(([nome, voto]) => voto>=60); 
console.log(studentiPromossi);


//Esercizio 6
//Prendi come riferimento l'array di numeri dell'esercizio 1. Filtra i numeri pari, calcola il quadrato di ciascuno e poi somma tutti i quadrati. (Suggerimento: l'operazione per calcolare il quadrato è numero ** 2)


const numberi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumeri= numberi.filter((num)=> num%2 === 0);
const quadratoPari= newNumeri.map((num)=> num**2);
const sommaQuadrati= quadratoPari.reduce((a,b)=> a+b,0);
console.log(sommaQuadrati);




                    
                
                 
                
                        
                
                
                
                