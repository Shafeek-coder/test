// Fonction pour demander 5 nombres et afficher la moyenne des nombres supérieurs à 10
function calculerMoyenne() {
    let nombres = []; // Tableau pour stocker les 5 nombres
    let somme = 0;    // Pour la somme des nombres supérieurs à 10
    let compteur = 0; // Compteur pour les nombres supérieurs à 10

    // Demander 5 nombres à l'utilisateur
    for (let i = 0; i < 5; i++) {
        let nombre = parseFloat(prompt(`Entrez le nombre ${i + 1} :`)); // Saisie utilisateur
        nombres.push(nombre);

        // Si le nombre est supérieur à 10, on l'ajoute à la somme et on incrémente le compteur
        if (nombre > 10) {
            somme += nombre;
            compteur++;
        }
    }

    // Calculer la moyenne
    if (compteur > 0) {
        let moyenne = somme / compteur;
        console.log(`La moyenne des nombres supérieurs à 10 est : ${moyenne}`);
        alert(`La moyenne des nombres supérieurs à 10 est : ${moyenne}`);
    } else {
        console.log("Aucun nombre supérieur à 10 n'a été saisi.");
        alert("Aucun nombre supérieur à 10 n'a été saisi.");
    }
}

// Appeler la fonction
calculerMoyenne();
