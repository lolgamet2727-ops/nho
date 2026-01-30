// Link audio ultra-stabile
const audio = new Audio('https://www.soundhelix.com'); 
// Sostituisci il link sopra con quello di Patrick Watson se ne hai uno .mp3 diretto
audio.loop = true;

document.getElementById('playButton').addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        this.innerText = "In riproduzione... 💖";
    } else {
        audio.pause();
        this.innerText = "Premi per la musica 🎵";
    }
});

