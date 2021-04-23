const updateInsanities = require('./ariana');
const fs = require('fs');

function testInsanity(){
    let ariana = 1;
    let quelani = 1;
    let sing = true;
    let draw = false
    let count = 0

    while(ariana !== 10 && quelani !== 10){
        count += 1;
        if(ariana >= 7){
            draw = true;
            sing = false;
        } else if(quelani > 1) {
            draw = false;
            sing = true;
        } else {
            draw = true;
            sing = false;
        }      
        [ariana, quelani] = updateInsanities(ariana, quelani, sing, draw, "2")
    }

    return [ariana === 10, quelani === 10, count];
}

const data = [];

for(let i = 0; i < 100000; i ++){
    data.push(testInsanity());
}

data_pkg = JSON.stringify({data: data});

fs.promises.writeFile('./data.json', data_pkg);