let compteur = 0;

for (let i = 1; i <= 6; i++) {
    let nombre = parseFloat(prompt(`Entrez le nombre ${i} :`));
    if (nombre < 10) {
        compteur++;
    }
}

console.log(`Il y a ${compteur} nombres inférieurs à 10.`);
alert(`Il y a ${compteur} nombres inférieurs à 10.`);
