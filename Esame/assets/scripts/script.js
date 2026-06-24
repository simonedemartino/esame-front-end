const tastoHamburger = document.querySelector('.hamburger');
const menuNavigazione = document.querySelector('.menu');

tastoHamburger.addEventListener('click', () => {
    menuNavigazione.classList.toggle('attivo');
    
    tastoHamburger.classList.toggle('aperto');
});

const databaseQuiz = [
    {
        domanda: "Fuori dei centri abitati, i conducenti devono spegnere i proiettori di profondità (abbaglianti) quando stanno per incrociare altri veicoli.",
        rispostaCorretta: true,
        spiegazione: "Bisogna spegnerli per non accecare gli altri guidatori."
    },
    {
        domanda: "Il limite massimo di velocità consentito in autostrada per i neopatentati nei primi 3 anni è di 100 km/h.",
        rispostaCorretta: true,
        spiegazione: "Per i primi 3 anni il limite in autostrada scende da 130 a 100 km/h."
    },
    {
        domanda: "Sulle autostrade e strade extraurbane principali è consentita la circolazione di ciclomotori (50cc).",
        rispostaCorretta: false,
        spiegazione: "I ciclomotori e i motocicli sotto i 150cc non possono entrare in autostrada."
    },
    {
        domanda: "Il segnale di STOP obbliga sempre a fermarsi in corrispondenza della striscia di arresto, anche se non incrociamo nessun veicolo.",
        rispostaCorretta: true,
        spiegazione: "Allo STOP l'arresto è sempre obbligatorio, a differenza del Dare Precedenza."
    }
];


let domandaAttuale;


function caricaDomandaCasuale() {
    
    const indiceCasuale = Math.floor(Math.random() * databaseQuiz.length);
    domandaAttuale = databaseQuiz[indiceCasuale];
    
    
    document.getElementById('testo-domanda').textContent = domandaAttuale.domanda;
    
    
    const feedback = document.getElementById('feedback-quiz');
    feedback.classList.add('nascosto');
    document.getElementById('testo-domanda').textContent = domandaAttuale.domanda;
}


function controllaRisposta(rispostaUtente) {
    const feedback = document.getElementById('feedback-quiz');
    feedback.classList.remove('nascosto', 'corretto', 'sbagliato');
    
    if (rispostaUtente === domandaAttuale.rispostaCorretta) {
        feedback.textContent = `Risposta Esatta! ✔️ ${domandaAttuale.spiegazione}`;
        feedback.classList.add('corretto');
    } else {
        feedback.textContent = `Risposta Errata. ❌ ${domandaAttuale.spiegazione}`;
        feedback.classList.add('sbagliato');
    }
    
    
    document.getElementById('btn-prossima').style.display = 'inline-block';
}


if (document.getElementById('testo-domanda')) {
    caricaDomandaCasuale();
}

function validaForm(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const messaggio = document.getElementById('messaggio').value.trim();
    const feedbackForm = document.getElementById('feedback-form');

    feedbackForm.classList.add('nascosto');
    feedbackForm.classList.remove('successo', 'errore');
    

    if (nome === "" || email === "" || messaggio === "") {
        feedbackForm.textContent = "Attenzione: Tutti i campi obbligatori (Nome, Email e Messaggio) devono essere compilati! ⚠️";
        feedbackForm.classList.add('errore');
        feedbackForm.classList.remove('nascosto');
        return; 
    }
    
    
    feedbackForm.textContent = `Grazie mille ${nome}! Il tuo messaggio è stato inviato con successo. L'Autoscuola Agenzia Giustri ti risponderà al più presto. ✔️`;
    feedbackForm.classList.add('successo');
    feedbackForm.classList.remove('nascosto');
    
    document.getElementById('form-contatti').reset();

}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card-area').forEach(card => {
        const img = card.querySelector('.card-icona');
        const immagineStatica = img.src;
        const immagineAnimata = img.getAttribute('data-gif');

        card.addEventListener('mouseenter', () => {
            if (immagineAnimata) img.src = immagineAnimata;
        });

        card.addEventListener('mouseleave', () => {
            img.src = immagineStatica;
        });
    });
});
