let nome="Marco";
let eta="0";
let statoCivile="Single";

eta = Number(eta);
console.log(typeof(eta));

if(eta<=18){
    console.log("Sei Minorenne");
}
else{
    console.log("Sei Maggiorenne");
}

switch(statoCivile){
    case "Single": 
    console.log("Sei single");
    break;
    case "Sposato":
        console.log("Sei sposato");
        break;
    case "Divorziato":
        console.log("Sei Divorziato");
        break;
    default:
        console.log("Valore non valido");
}

if (eta<=1 || typeof eta!="number"){
    console.log("Valore errato");
}


let numeroFigli= 2;


switch (numeroFigli){
    case 1:
        console.log("Sconto del"+" "+(numeroFigli*10)+"%");
        break;
    case 2:
        console.log("Sconto del"+" "+(numeroFigli*10)+"%");
        break;
    case 3:
        console.log("Sconto del"+" "+(numeroFigli*10)+"%");
        break;
    default:
        console.log("Non hia diritto a sconto");
}

if(numeroFigli>0){
    console.log("Sconto del"+" "+(numeroFigli*10)+"%");
}
else if(numeroFigli=0 || numeroFigli>4){
    console.log("Non hia diritto a sconto");
}