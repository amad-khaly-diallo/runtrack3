//cette fontion prends en parametre deux nombres et retourne la somme des nombres s'il sont premiers ou bien il retourn false
function sommeNombresPremiers(n1, n2) {
    const estPremier = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    if (estPremier(n1) && estPremier(n2)) {
        return n1 + n2;
    }
    return false;
}

console.log(sommeNombresPremiers(3, 5));
console.log(sommeNombresPremiers(4, 5));
console.log(sommeNombresPremiers(7, 11));
console.log(sommeNombresPremiers(8, 10)); 