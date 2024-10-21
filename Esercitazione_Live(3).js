// let numbers= [65,78,555,48,987];

// let numbersNew= numbers.sort((a,b)=> b-a);

// console.log(numbersNew.find((a)=>a%2!==0));

const nomi=["Vittoria","Gianlorenzo","Marco","Clarissa"];
const nomiNew= nomi.find( (a) => a.length > 8);
nomi.sort((a,b)=> a.length - b.length);
console.log(nomiNew);
console.log(nomi.findIndex( (a) => a.length > 8));