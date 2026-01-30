const audio = new Audio('https://www.myinstants.com');
audio.loop = true;

const btn = document.getElementById('playButton');

btn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        btn.innerText = "In riproduzione... 💖";
    } else {
        audio.pause();
        btn.innerText = "Ascolta la nostra musica 🎵";
    }
});

// Funzione per creare cuori che cadono
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
