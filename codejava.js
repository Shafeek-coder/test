
/*cpt = 0;

while(cpt< 5){
    let prenom = prompt("Donnez moi un prénom")
    alert( `Bonjour${prenom}`)
    cpt++
}*/


let prenom ="";
while(prenom != "James Bond"){
    prenom = prompt("Quel est votre prenom");

    if(prenom != "James Bond"){
        prenom = prompt("Réesayer")
    }else{
        alert("Bonjour james ")
    }
}
