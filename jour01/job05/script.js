let daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

function getDayOfWeek(){
    for(let i = 0; i < daysOfWeek.length; i++){
        console.log(`${i + 1} : ${daysOfWeek[i]}`);
    }
}

getDayOfWeek();