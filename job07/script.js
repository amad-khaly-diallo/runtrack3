const jourTravail = (jour, mois, annee) => {
    const ReferenceYear = 2020;

    // jours fériés selon l'année de référence (2020)
    const daysOff = [
        new Date(ReferenceYear, 0, 1),  // 1er janvier
        new Date(ReferenceYear, 3, 13),  // Pâques (2020)
        new Date(ReferenceYear, 4, 1),   // Fête du travail
        new Date(ReferenceYear, 4, 8),   // Victoire 1945
        new Date(ReferenceYear, 4, 21),  // Ascension (2020)
        new Date(ReferenceYear, 5, 1),   // Lundi de Pentecôte (2020)
        new Date(ReferenceYear, 6, 14),  // Fête nationale
        new Date(ReferenceYear, 7, 15),  // Assomption
        new Date(ReferenceYear, 10, 1),  // Toussaint
        new Date(ReferenceYear, 10, 11), // Armistice
        new Date(ReferenceYear, 11, 25)  // Noël
    ];

    const date = new Date(annee, mois - 1, jour);
    const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const nomJour = days[date.getDay()];

    // Vérifie si c’est un week-end
    const estWeekend = date.getDay() === 0 || date.getDay() === 6;

    // Vérifie si la date a le même jour/mois qu’un jour férié de 2020
    const estFerie = daysOff.some(off => 
        off.getDate() === jour && off.getMonth() === mois - 1
    );

    if (estWeekend) {
        return `Non, ${nomJour} le ${jour}/${mois}/${annee} est un week-end`;
    } else if (estFerie) {
        return `Non, ${nomJour} le ${jour}/${mois}/${annee} est un jour férié`;
    } else {
        return `Oui, ${nomJour} le ${jour}/${mois}/${annee} est un jour travaillé`;
    }
};

console.log(jourTravail(13, 4, 2024));
console.log(jourTravail(1, 5, 2024)); 
console.log(jourTravail(3, 5, 2024)); 
