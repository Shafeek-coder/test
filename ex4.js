let val1 = parseFloat(prompt("Entrez la première valeur :"));
let val2 = parseFloat(prompt("Entrez la deuxième valeur :"));
let val3 = parseFloat(prompt("Entrez la troisième valeur :"));

let max = Math.max(val1, val2, val3);
let min = Math.min(val1, val2, val3);

console.log(`La valeur la plus grande est : ${max}`);
console.log(`La valeur la plus petite est : ${min}`);
alert(`La valeur la plus grande est : ${max} et la plus petite est : ${min}`);
