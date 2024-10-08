let israinig=true;
let temperature=25;
let giorno=27;
let tax=true;

if (isRaining=true){
    console.log("Prendi l'ombrello");
    if(temperature<=25){
        console.log("Copriti bene");
    }
    else{
        console.log("Tutto sommato non c'è freddo")
    }
}
    
else {
    console.log("Goditi il sole");
}

switch(giorno){
    case 27:
        console.log("Oggi arriva lo stipensio")
        if(tax==true){
            console.log("Devi pagare le tasse")
        }else{
            console.log("Puoi mangiarti una pizza")
        }
        break;
        default:
            console.log("Dovrei ancora aspettare")
}