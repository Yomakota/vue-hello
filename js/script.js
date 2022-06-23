// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data(in data avrò l'src).

var app = new Vue (
    
    {
        el: '#root', 
        data: { 
            message: 'Hello World by vuejs',
            image: 'https://picsum.photos/400/600'
        }
    }
);