
function tri(nombres, ordre) {
    if(ordre === 'asc') {
        nombres.sort((a,b)=> a - b );
        return nombres;
    } else if (ordre === 'desc') {
        nombres.sort((a,b)=> b - a );
        return nombres;
    }
}

let nombres = [5, 3, 8, 1, 2];

console.log(tri(nombres, 'asc'));

console.log(tri(nombres, 'desc'));