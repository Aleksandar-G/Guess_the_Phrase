let thePhase = "";
let currentPhases = [];
let phaseFound = false;
let populationCount = 10;
let mutationrate = 10;

function StartUp(){
    //let thePhase = document.getElementById("phase");
    this.GetUserPhase();
    for(let i = 0; i < 200 ; i++){
        phase = new Phase();
        currentPhases.push(phase);
    }

    Continue();
}

function CheckForPhase(){
    currentPhases.forEach(element => {
        if (element.string == thePhase) {
            phaseFound = true;
        }
    });

    //this.GenerateNextGeneration();
}

function TakeBestPhases(){
    let numOfPhasesToTake = 5;
    let bestPhases = [];

   currentPhases= currentPhases.sort(comparePhases);

    //console.log(currentPhases);
    for (let i = 0; i < numOfPhasesToTake; i++) {

        bestPhases.push(currentPhases[i]);
        
    }

    console.log(bestPhases);

    this.GenerateNextGeneration(bestPhases);

}

function GenerateNextGeneration(parents){

    currentPhase = [];
    
    for (let i = 0; i < populationCount; i++) {
        let parentA = parents[this.GetRandomNum(parents.length)];
        let parentB = parents[this.GetRandomNum(parents.length)];

       // let midpoint = this.GetRandomNum(parents.length);

        let newPhase = parentA.crossover(parentB);

        currentPhases.push(newPhase);

        console.log("q stana");
    }
}

function Continue(){
    let i = 0;
    while (i < 3) {
        this.CheckForPhase();
        this.TakeBestPhases();
        //this.GenerateNextGeneration();
        i++;
    }
}

function GetUserPhase(){
    //debugger;
    thePhase = document.getElementById("phase").parentElement.children[1].value;
    console.log(thePhase);
    return thePhase;
}

function comparePhases(phase1,phase2){
    if (phase1.calcFitness() > phase2.calcFitness()) {
        return -1;
    }

    if (phase1.calcFitness() < phase2.calcFitness()) {
        return 1;
    }

    return 0;
    
}

function GetRandomNum(max){
  return  Math.floor(Math.random() * Math.floor(max));
}