const article = document.querySelector('.article');
const text = "L'imporatant n'est pas la chute, mais l'atterrissage.";

function ShowHide() {
    if (article.textContent !== text) {
        article.textContent = text;
    }else {
        article.textContent = "";
    }
}