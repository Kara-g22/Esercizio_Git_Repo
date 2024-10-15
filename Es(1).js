function acquista(categoria, quantita) {
    let prodotto;
    let prezzounitario;
    
    switch (categoria.toLowerCase()) {
        case "abiti":
            prodotto = "gonna";
            prezzounitario = 50;
            break;
        case "elettronica":
            prodotto = "smartPhone";
            prezzounitario = 300;
            break;
        case "cibo":
            prodotto = "pizza";
            prezzounitario = 8;
            break;
        default:
            console.log("Categoria non valida");
            return 0;  
    }

    
    let totale = calcolaSconto(categoria.toLowerCase(), quantita, prezzounitario);
    
    console.log( 
        `Hai acquistato ${quantita} ${prodotto} per un totale di ${totale} Euro` 
    );
    
    return totale;
}

const calcolaSconto = (categoria, quantita, prezzounitario) => {
    let totale = prezzounitario * quantita;
    
    if (categoria === "abiti" && quantita > 3) {
        return totale * 0.9;  
    } else if (categoria === "elettronica") {
        return totale * 0.95; 
    } else if (categoria === "cibo") {
        return totale;       
    } else {
        return totale;
    }
}

function start(coupon) {
    let totale = 0;

    totale += acquista("abiti", 4);       
    totale += acquista("elettronica", 2); 
    totale += acquista("cibo", 8);        

    console.log(`Hai acquistato prodotti per un totale di ${totale} Euro`);

    totale= applicaCoupon(totale, coupon)
    console.log(`Il totale con lo sconto applicato è ${totale.toFixed(2)}`)
    return totale;
}

let applicaCoupon= (totale, coupon) => {
    switch (coupon.toUpperCase()) {
        case "DISCOUNT10":
            return totale*0.9;
            break;
        case "DISCOUNT20":
            return totale*0.8;
            break;
        default:
            console.log("il coupon non è valido");
            return totale;
            break;
    }
}
start("DISCOUNT10");





