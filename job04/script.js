let bisextile = (annee) =>  (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);

let annee = 2056;

if (bisextile(annee)) {
    console.log(`L'année ${annee} est bissextile`);
}else {
    console.log(`L'année ${annee} n'est pas bissextile`);
}