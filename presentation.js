// récupération du module `readline`
var readline = require('readline');

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start(){
    console.log("1. Lister les clients");
    console.log("99. Sortir");

    // récupération de la saisie utilisateur
    rl.question('Votre choix ? ', function(saisie) {
        if (saisie == 1){
            console.log(">> Liste des clients");
        }else if (saisie == 99) {
            console.log("Au revoir ! ");
        }else {
            console.log("Vous avez saisi un mauvais choix");
        }
        rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible

    });


}

exports.start = start;