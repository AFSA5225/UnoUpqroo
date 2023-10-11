const rl = require ("readline-sync");
// juego UNO
var deck = [];
var colors = ["Yellow", "Blue", "Green", "Red"];
var type = ["Comun", "Especial", "Comodin"];

var card = {
    color: null, // color amarillo, azul, verde y rojo
    number: null, // 0 -9
    type: null, // comun, especiales y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++ ) {
    // console.log("color:", colors[cColor]);
    for (var cNumber = 0; cNumber < 10; cNumber++){   
        deck.push({color: colors[cColor], number: cNumber, type:"comun"});
    }

    for (var cNumber1 = 1; cNumber1 < 10; cNumber1++){     
        deck.push({color: colors[cColor], number: cNumber1, type:"comun"});
    }

    deck.push({color: colors[cColor], number: "+2", type:"Especial"});
    deck.push({color: colors[cColor], number: "+2", type:"Especial"});
    deck.push({color: colors[cColor], number: "B", type:"Especial"});
    deck.push({color: colors[cColor], number: "B", type:"Especial"});
    deck.push({color: colors[cColor], number: "R", type:"Especial"});
    deck.push({color: colors[cColor], number: "R", type:"Especial"});
}

deck.push({color: null, number: "+4", type:"Comodin"});
deck.push({color: null, number: "+4", type:"Comodin"});
deck.push({color: null, number: "+4", type:"Comodin"});
deck.push({color: null, number: "+4", type:"Comodin"});
deck.push({color: null, number: "CC", type:"Comodin"});
deck.push({color: null, number: "CC", type:"Comodin"});
deck.push({color: null, number: "CC", type:"Comodin"});
deck.push({color: null, number: "CC", type:"Comodin"});

//console.log(deck);

const players = rl.question("Cuantos jugadores seran?", {})
const totalCards = players * 7;
//Repatir 7 cartas x jugador
//Recoro el total de tarjetas 
//(total de tarjetaas = tarjetas/7 x jugador)
// un arreglo por cada jugador
var cardsPlayers = {};

for(var cTCards = 0; cTCards < 7; cTCards++){
    for(var cPlayers = 0; cPlayers < players; cPlayers++ ){
        if (!cardsPlayers["player_"+cPlayers]){
            cardsPlayers["player_"+cPlayers] = [];
        }
        //console.log("player: ", cPlayers);
        cardsPlayers["player_"+cPlayers].push(deck[cTCards]);
        //console.log(cardsPlayers);
    }
}
console.log(cardsPlayers);