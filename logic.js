let thePhase = "";
let currentPhases = [];
let phaseFound = false;
let populationCount = 10;

function StartUp(){
    //let thePhase = document.getElementById("phase");
    for(let i = 0; i < 10 ; i++){
        phase = new Phase();
        currentPhases.push(phase);
    }

    return currentPhases;
}

function CheckForPhase(){
    currentPhases.forEach(element => {
        if (element.string == thePhase) {
            phaseFound = true;
        }
    });

    this.GenerateNextGeneration();
}

function TakeBestPhases(){
    let numOfPhasesToTake = 5;
}

function GenerateNextGeneration(){

}

function GetUserPhase(){
    let thePhase = document.getElementById("phase").parentElement.children[1].value;
    console.log(thePhase);
}