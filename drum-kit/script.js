window.addEventListener('keydown', function (e) {
    const key = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.forEach((e) => {
        e.classList.add('pressed');
        setTimeout(() => {
            e.classList.remove('pressed');
        }, 100)
    })
});