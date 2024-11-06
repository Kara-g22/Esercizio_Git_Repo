// 1. Crea un array chiamato notifications contenente 3 oggetti, ciascuno con le seguenti proprietà:
// id: Identificativo univoco della notifica.
// message: Stringa contenente il messaggio della notifica (es. "Benvenuto!").
// sent: Valore booleano inizialmente impostato a false, che indica se la notifica è stata inviata con successo.

// 2. Crea una funzione che accetta come parametro un oggetto notification.
// All'interno della funzione, usa setTimeout per simulare un ritardo casuale di invio compreso tra 500 ms e 2000 ms.
// All'interno del blocco try:
// Simula un errore con una probabilità del 30% usando Math.random(). Se il numero casuale è inferiore a 0.3, lancia un errore con il messaggio "Errore di rete durante l'invio della notifica".
// Se l'invio va a buon fine, imposta la proprietà sent di notification a true e stampa in console il messaggio "Notifica '{message}' inviata con successo!".
// All'interno del blocco catch, cattura l'errore e stampa il messaggio "Errore nella notifica '{message}': {messaggio di errore}".
// Usa il blocco finally per stampare "Invio completato per la notifica con id {id}".

// 3. Crea una funzione che avvia un sistema di invio notifiche periodico usando setInterval.
// All'interno di startNotificationSystem, usa setInterval per verificare ogni 3 secondi l’array notifications per trovare le notifiche non ancora inviate (sent: false).
// Se tutte le notifiche sono state inviate con successo (sent: true per tutte le notifiche), stampa in console "Tutte le notifiche sono state inviate!" e ferma l'intervallo usando clearInterval.
// Per ogni notifica non ancora inviata, chiama sendNotification per tentare di inviarla.

//4. Aggiungi all'array di oggetti altre due proprità:
// attempts: un contatore inizialmente a 0, che indica il numero di tentativi di invio effettuati.
// timestamp: un valore inizialmente null, che verrà impostato alla data e ora di invio, solo se l’invio ha successo.

//5. Implementa alla funzione sendNotification() le seguenti funzionalità:
// Se l’invio ha successo:
// Imposta sent: true e timestamp all'ora corrente (usa new Date().toLocaleString() per il formato).
// Stampa un messaggio di successo con il contenuto della notifica e il timestamp.
// Imposta un limite massimo di tentativi di invio per ciascuna notifica a 1.
// Ogni volta che una notifica viene tentata, incrementa il contatore attempts di notification.
// Se attempts raggiunge 1 senza successo, stampa in console "Tentativi esauriti per la notifica '{message}' con id {id}" e considera la notifica come definitivamente non inviata.

//6. Crea due nuovi array vuoti:
// sentNotifications: per tracciare le notifiche inviate con successo.
// failedNotifications: per tracciare le notifiche che non sono state inviate dopo 1 tentativo.
// Quando una notifica viene inviata con successo, aggiungila a sentNotifications.
// Se una notifica fallisce 1 tentativo, aggiungila a failedNotifications.

//7. Implementa una funzione retryNotification(notification) che viene chiamata ogni volta che sendNotification fallisce l’invio.
// All'interno di retryNotification, incrementa attempts.
// Se i tentativi hanno raggiunto il massimo di 1, sposta la notifica in failedNotifications e stampa un messaggio di esaurimento tentativi.
// Se non ha raggiunto il limite, chiama nuovamente sendNotification(notification) per riprovare a inviare.

// 8. Implementa una funzione generateReport() per generare un report finale che viene eseguita quando il sistema di notifiche si ferma.
// Il report finale deve includere:
// Notifiche inviate con successo: Stampa il numero totale di notifiche inviate e per ognuna il messaggio e il timestamp.
// Notifiche non inviate: Stampa il numero di notifiche che non è stato possibile inviare (fallite dopo 1 tentativo), includendo per ognuna il messaggio e il numero di tentativi.
const notifications= [
    {
    id:1,
    message:"Benvenuto!",
    sent:false,
    attemps:0,
    timestamp: null
    },
    {
    id:2,
    message:"Come Stai?",
    sent:false,
    attemps:0,
    timestamp: null
    },
    {
    id:3,
    message:"Spero Bene",
    sent:false,
    attemps:0,
    timestamp: null
    },
    
]

const sendNotifications=[];
const failedNotifications=[];



function sendNotification(notifications) {
    const randomTimeout= (Math.random()*1500) +500;
    
    setTimeout(() => {
        try {
            const randomError= Math.random();
            if (randomError<0.3) {
                throw new Error("Errore di rete durante l'invio della notifica");
            }
            notifications.sent=true;
            notifications.timestamp= new Date().toLocaleString();
            sendNotifications.push(notifications);
            console.log(`Notifica ${notifications.message} inviata con successo! in data: ${notifications.timestamp}`);
        } catch (error) {
            console.error(`${error.message} sulla notifica con id: ${notifications.id}`);
            attempsCounter(notifications);
        } finally{
            console.log(`Invio completato per la notifica con id ${notifications.id}`)
        }
    }, randomTimeout );
}

function startNotificationSystem() {
    const id = setInterval(() => {
        const notificationSent= notifications.filter(not => !not.sent && not.attemps < 1 );
        if (notificationSent.length === 0) {
            console.log(`Tutte le notifiche sono stante inoltrate`);
            generateReport();
            clearInterval(id);   
        }
        for (const notifica of notificationSent) {
            sendNotification(notifica);
        }
            
    }, 3000);
}

function attempsCounter(notifications) {  
    
    if (notifications.attemps>=1 && !notifications.sent) {
        console.log(`Tentativi esauriti per la notifica ${notifications.message} con id ${notifications.id}`)
        failedNotifications.push(notifications)
    } else{
        console.log(`Notifica risottoposta`);
        sendNotification(notifications);
        
    }
    notifications.attemps ++;
}

function generateReport() {
    console.log(`${sendNotifications.length} notifihe inviate:`);
    sendNotifications.forEach(element => {   
        console.log(`${element.message} data: ${element.timestamp}`);    
    });
    console.log(`${failedNotifications.length} notifiche non inviate:`)
    failedNotifications.forEach(element => {
        console.log(`${element.message} con tentativi: ${element.attemps}`)
        
    });
    
}

startNotificationSystem();
