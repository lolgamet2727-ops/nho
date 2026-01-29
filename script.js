// Creiamo l'elemento audio per Patrick Watson - Je te laisserai des mots
const audio = new Audio('https://www.myinstants.com');
audio.loop = true; // La musica ricomincia quando finisce

// Funzione per far partire la musica al primo click sulla pagina
document.addEventListener('click', function() {
    audio.play().catch(error => {
        console.log("Riproduzione bloccata dal browser, riprova a cliccare.");
    });
    
    // Aggiungiamo un effetto visivo: cuori che appaiono al click
    creaCuore();
}, { once: true }); // 'once: true' serve a far partire la musica solo al primo click

function creaCuore() {
    console.log("Musica avviata con successo!");
}
