//Stocks the image container, lights the code
var image = document.getElementById("imgTrash");

//Stocks the text container, also lights the code
var text = document.getElementById("text");

//Stocks the text container, also lights the code
var rText = document.getElementById("rText");

//Associate with the number of the rounds
var i = 0;

//Notation of the game
var mark = 0;

//Notation of the game
var markNotes;

//Array of the garbage images
var garbage = ["images/0.jpg","images/1.png", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg",
                "images/7.jpg", "images/8.jpg", "images/9.jpg"];

//Array for the names of the garbage
var garbageDesc = ["des déchets alimentaires", "un journal", "un bocal en verre", "un emballage en carton", "des pelures",
                    "une bouteille en verre", "un papier gras", "un déodorant vide", "du Papier", "une boîte de conserve vide"];

//Stocks the trash color for checks
var colorTrash = ["Marron", "Bleue", "Verte", "Jaune", "Marron", "Verte", "Verte", "Jaune", "Bleue", "Jaune"];


//Temp variable before stocks in a array
var colorTemp;

//Stocks the trash color, but it's the user choice
var colorUser = [];

//Array for the rounds, used in the above function
var data = [0,1,2,3,4,5,6,7,8,9];

//The data array after the random function
var result;

//Stocks the result for each question
var resultDisplay = [];

//Stocks a tip and displays in the result section
var resultDesc = [
    "Tout ce qui est déchets alimentaires ou tout autre chose non-recyclable doit être placé dans les poubelles Marrons ou ordinaires.",
    "Généralement, les journaux, magazaines ou papiers non sales, gras ou non souillés vont dans la poubelle bleue.",
    "Assez simple à retenir, le verre va dans la poubelle verte.",
    "Malgré que le carton ressemble à du papier, les emballages de ce matériau vont dans la poubelle jaune.",
    "Les pelures d'aliments sont des déchets alimentaires qui doivent être jetés dans une poubelle marron ou ordinaire.",
    "Pratiquement tous les déchets composés de verre vont dans la poubelle verte.",
    "Oh du papier, poubelle bleue donc ? Non, ce papier est sale/souillé/gras, il va donc dans la poubelle verte comme ces confrères en verre.",
    "Tout contenant en plastique doit être jeté dans la poubelle jaune, réservée pour eux.",
    "Cette fois-ci, le papier est exempt de salissures et peut-etre jeté dans la poubelle bleue.",
    "Comme pour le plastique, les contenants en acier (ou autre matériau recycable hors verre) sont à jeter dans la poubelle jaune."
];

function randomRounds (){
    let getUniqueRandomNumbers = n => {
        let set = new Set();
        while (set.size < n) set.add(Math.floor(Math.random() * n));
        return Array.from(set)
    };
    result = getUniqueRandomNumbers(data.length).map(x => data[x]);
}

function display () {
    image.src = garbage[result[i]];
    text.innerHTML = "Voici " + garbageDesc[result[i]] + ". Dans quelle poubelle placerais-tu ce déchet ?";
}

function displayResults () {
    document.getElementById("imgResult").src = garbage[result[i]];
    rText.innerHTML = resultDisplay[result[i]] +"<br><br>" + resultDesc[result[i]];
    i++;
}

function markDesc() {
    switch (mark) {
        case 0:
            markNotes = "Le tri ne doit pas être votre quoitidien ...";
            break;
        case 1:
            markNotes = "Avec des efforts, le tri ne devrait pas être votre ennemi";
            break;
        case 2:
            markNotes = "Essayez de comprendre les concepts du tri, c'est plutôt simple";
            break;
        case 3:
            markNotes = "Encore quelques efforts et la moyenne arrivera";
            break;
        case 4:
            markNotes = "Vous êtes tout proche de la moyenne, encore quelques efforts !";
            break;
        case 5:
            markNotes = "Il vous manque encore quelques notions on dirait ...";
            break;
        case 6:
            markNotes = "C'est pas mal mais vous pouvez faire encore mieux";
            break;
        case 7:
            markNotes = "Ça commence à devenir bon, vous commencez à cerner le concept du tri";
            break;
        case 8:
            markNotes = "Bien ! Encore un effort pour cerner tous les concepts du tri";
            break;
        case 9:
            markNotes = "Excellent, mais il vous manque un petit quelque chose ...";
            break;
        case 10:
            markNotes = "Bravo, nous n'avons plus rien à vous apprendre";
            break;
    }
}

function markResults () {
    document.getElementById("imgResult").src = "images/Tri.jpg";
    markDesc();
    rText.innerHTML = "Votre note : "+mark+ " / 10" + "<br><br>" + markNotes;
}

function displayResult (){
    document.getElementById("main").style.display = "none";
    document.getElementById('resultBlock').style.display = "inline";
}

function check (){
    for (i=0; i < 10; i++){
        if (colorUser[i] === colorTrash[result[i]]){
            resultDisplay.push("Bonne réponse !");
            mark = mark + 1;
        } else {
            resultDisplay.push("Mauvaise réponse !")
        }
    }
}

function reload (){
    document.location.reload(true);
}

document.getElementById('play').addEventListener("click", function () {
    randomRounds();
    text.innerHTML = "La partie va commencer, bonne chance !";
    setTimeout(display, 2000);
    document.getElementById("play").style.display = "none";
});

document.getElementById("dspResults").addEventListener("click", function () {
    rText.innerHTML = "Voici les résultats de cette partie ...";
    setTimeout(displayResults, 3000);
    setTimeout(displayResults, 6000);
    setTimeout(displayResults, 9000);
    setTimeout(displayResults, 12000);
    setTimeout(displayResults, 15000);
    setTimeout(displayResults, 18000);
    setTimeout(displayResults, 21000);
    setTimeout(displayResults, 24000);
    setTimeout(displayResults, 27000);
    setTimeout(displayResults, 30000);
    setTimeout(markResults, 33000);
    setTimeout(reload, 40000)
});

document.getElementById("greenTrash").addEventListener("click",function () {
    if (i > 8){
        colorTemp = "Verte";
        colorUser.push(colorTemp);
        text.innerHTML = "La partie est terminée, les résultats arrivent sous peu ...";
        setTimeout(displayResult,2000);
        check();
        console.log(resultDisplay);
        i = 0;
    } else {
        colorTemp = "Verte";
        colorUser.push(colorTemp);
        text.innerHTML = "Ta réponse est enregistrée, passons à la suite";
        console.log(colorUser);
        i++;
        setTimeout(display, 2000);
    }
});

document.getElementById("yellowTrash").addEventListener("click",function () {
    if (i > 8){
        colorTemp = "Jaune";
        colorUser.push(colorTemp);
        text.innerHTML = "La partie est terminée, les résultats arrivent sous peu ...";
        setTimeout(displayResult,2000);
        check();
        console.log(resultDisplay);
        i = 0;
    } else {
        colorTemp = "Jaune";
        colorUser.push(colorTemp);
        text.innerHTML = "Ta réponse est enregistrée, passons à la suite";
        console.log(colorUser);
        i++;
        setTimeout(display, 2000);
    }
});

document.getElementById("blueTrash").addEventListener("click",function () {
    if (i > 8){
        colorTemp = "Bleue";
        colorUser.push(colorTemp);
        text.innerHTML = "La partie est terminée, les résultats arrivent sous peu ...";
        setTimeout(displayResult,2000);
        check();
        console.log(resultDisplay);
        i = 0;
    } else {
        colorTemp = "Bleue";
        colorUser.push(colorTemp);
        text.innerHTML = "Ta réponse est enregistrée, passons à la suite";
        console.log(colorUser);
        i++;
        setTimeout(display, 2000);
    }
});

document.getElementById("brownTrash").addEventListener("click",function () {
    if (i > 8){
        colorTemp = "Marron";
        colorUser.push(colorTemp);
        text.innerHTML = "La partie est terminée, les résultats arrivent sous peu ...";
        setTimeout(displayResult,2000);
        check();
        console.log(resultDisplay);
        i = 0;
    } else {
        colorTemp = "Marron";
        colorUser.push(colorTemp);
        text.innerHTML = "Ta réponse est enregistrée, passons à la suite";
        console.log(colorUser);
        i++;
        setTimeout(display, 2000);
    }
});