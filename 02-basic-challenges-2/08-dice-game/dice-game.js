function getRandomNumber(){
    return Math.floor(Math.random()*6)+1;
}
function getResultOfSimulation(sum){
    if(sum===7 || sum===11) return 'win';
    else if (sum===2 || sum===3 || sum===12) return 'lose';
    else return 'roll again';
}


function createSimulation(){
    const dice1= getRandomNumber();
    const dice2= getRandomNumber();
    const sum = dice1+dice2;


    simulation = {
        'dice1':dice1,
        'dice2':dice2,
        'sum': sum,
        'result': getResultOfSimulation(sum)
    }
    return simulation;
}


function diceGameSimulation(numSimulations) {
    array=[];
    for (let i=0; i<numSimulations; i++){
        array.push(createSimulation());
    }
    return array;
}

module.exports = diceGameSimulation;
