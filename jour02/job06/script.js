const konamiCode = [38,38,40,40,37,39,37,39,66,65];
let position = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[position]) {
        position++;
        if (position === konamiCode.length) {
            unlockSite();
            position = 0;
        }
    } else {
        position = 0;
    }
});

function unlockSite() {
    document.body.style.background = "linear-gradient(135deg, #001f3f, #0059b8ff, #0092beff)";
    document.getElementById('intro').style.display = "none";
    const site = document.getElementById('site-laplateforme');
    site.classList.remove('hidden');
    setTimeout(() => {
        site.classList.add('active');
    }, 100);
}
