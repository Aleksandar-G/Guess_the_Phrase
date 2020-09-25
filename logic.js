let thePhrase = "";
let currentPhrases = [];
let bestPhrases = [];
let phraseFound = false;
let populationCount = 200;
let mutationrate = 3;

function StartUp() {

    this.GetUserPhrase();
    for (let i = 0; i < 200; i++) {
        phrase = new Phrase();
        currentPhrases.push(phrase);
    }
    this.CheckForPhrase();

    Continue();
}

function CheckForPhrase() {

    currentPhrases.forEach(element => {
        if (element.string === thePhrase) {
            phraseFound = true;
        }
    });

}

function TakeBestPhrases() {
    let numOfPhrasesToTake = 50;
    bestPhrases = [];

    currentPhrases = currentPhrases.sort(comparePhrases);

    for (let i = 0; i < numOfPhrasesToTake; i++) {

        bestPhrases.push(currentPhrases[i]);

    }

}

function GenerateNextGeneration(parents) {

    parents = this.MakeApool(parents);
    currentPhrases = [];

    for (let i = 0; i < populationCount; i++) {
        let parentA = parents[this.GetRandomNum(parents.length)];
        let parentB = parents[this.GetRandomNum(parents.length)];

        let newPhrase = parentA.crossover(parentB);

        currentPhrases.push(newPhrase);

    }

    console.log(bestPhrases[0]);
}

async function Continue() {
    let i = 0;
    while (phraseFound != true) {

        this.TakeBestPhrases();
        this.GenerateNextGeneration(bestPhrases);
        this.CheckForPhrase();
        i++;
        await PrintBestPhrases();
    }
    this.TakeBestPhrases();
    await PrintBestPhrases();

    alert("The phrase is found");
    console.log(i);
}

function GetUserPhrase() {
    //debugger;
    //thePhrase = document.getElementById("p1").parentElement.children[1].value;
    thePhrase = document.getElementById("UserPhraseDiv").children[1].value;
    console.log(thePhrase);
    return thePhrase;
}

function comparePhrases(phrase1, phrase2) {
    if (phrase1.calcFitness() > phrase2.calcFitness()) {
        return -1;
    }

    if (phrase1.calcFitness() < phrase2.calcFitness()) {
        return 1;
    }

    return 0;

}

function MakeApool(pool) {

    let newpool = [];

    for (let i = 0; i < pool.length; i++) {
        let element = pool[i];
        for (let j = 0; j < Math.floor(pool[i].fitness); j++) {
            newpool.push(element);
        }
    }

    return newpool;
}

function GetRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}