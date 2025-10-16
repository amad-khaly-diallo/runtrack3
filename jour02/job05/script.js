const scrollBar = document.querySelector(".scrolle-bar");
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const scrollBarWidth = scrollPercent * 100;
    scrollBar.style.width = scrollBarWidth + "%";
});