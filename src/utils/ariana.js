function getRandom(min, max) {
    const num = Math.floor(Math.random() * (max+1-min) + min)
    return num;
}

function getArianaInsanity(ariana, sing=false, draw=false){
    if(draw){
        const dice = getRandom(1, 10);
        return dice < ariana ? 1 : ariana + 1
    } else if(sing){
        return ariana + 3
    } else {
        return ariana + 1
    }
}

function getQuelaniInsanity(quelani, kills, sing){

    if(kills < 1){
        quelani += 1;
    } else if(kills < 3){
        quelani += getRandom(1, 2);
    } else {
        quelani += getRandom(1, 3);
    }

    return quelani - (sing ? 4 : 0) 
}

function updateInsanities(ariana, quelani, sing, draw, kills){

    ariana = getArianaInsanity(ariana, sing, draw);
    quelani = getQuelaniInsanity(quelani, kills, sing);
    quelani = quelani <= 0 ? 1 : quelani;
    ariana = ariana <= 0 ? 1 : ariana;

    return [ariana, quelani]
}

module.exports = updateInsanities;