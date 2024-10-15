function sayHelloName(a,b,callback, messaggio) {
    if (typeof a==="string" && typeof b==="string") {
            setTimeout(()=>{callback(a, messaggio)},1000);
            setTimeout(() => {callback(b, messaggio)},2000);
    }else{
        console.log("Inserisci valori validi")
    }
    
}

let printName= (nome, messaggio )=>{
    console.log(`${messaggio}, ${nome}`);
}

sayHelloName("Marco","Francesco",printName, "Ciao");