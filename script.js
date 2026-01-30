// Link diretto al file audio di Patrick Watson
const audio = new Audio('https://www.mboxdrive.com');
audio.loop = true;

const btn = document.getElementById('playButton');

btn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch(e => console.log("Errore audio:", e));
        btn.innerText = "In riproduzione... 💖";
    } else {
        audio.pause();
        btn.innerText = "Ascolta la musica 🎵";
    }
});

// Funzione cuori che cadono
function createHeart() {
    const heart = document.createElement('div');
    heart.style.position = 'fixed';
    heart.style.top = '-20px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.innerHTML = '❤️';
    heart.style.fontSize = Math.random() * 10 + 20 + 'px';
    heart.style.transition = 'transform 5s linear';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.style.transform = 'translateY(110vh)';
    }, 100);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);
