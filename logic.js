let thePhrase = "";
let bestPhraseNotChangedCount = 0;
let currentPhrases = [];
let bestPhrases = [];
let phraseFound = false;
let populationCount = 200;
let mutationrate = 2;
let generationNum = 0;
let lastBestPhrase = "";

function StartUp() {

    currentPhrases = [];
    phraseFound = false;
    generationNum = 0;

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

    if (generationNum > 0) {
        lastBestPhrase = bestPhrases[0].string;
    }
    
    bestPhrases = [];

    currentPhrases = currentPhrases.sort(comparePhrases);

    for (let i = 0; i < numOfPhrasesToTake; i++) {

        bestPhrases.push(currentPhrases[i]);

    }

    if (lastBestPhrase == bestPhrases[0].string) {

        bestPhraseNotChangedCount++;
        if (bestPhraseNotChangedCount > 25) {
            if (mutationrate < 64) {

                mutationrate *=2;
            }
            else{

                mutationrate = 90;
                alert("stana 95");
                console.log("stana 95");
            }
        }
    }
    else{
        bestPhraseNotChangedCount = 0;
        mutationrate = 2;   
    }
    console.log(bestPhraseNotChangedCount);

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
    
    while (phraseFound != true) {

        this.TakeBestPhrases();
        this.GenerateNextGeneration(bestPhrases);
        this.CheckForPhrase();
        generationNum++;
        await PrintBestPhrases();
    }
    this.TakeBestPhrases();
    await PrintBestPhrases();

    //alert("The phrase is found");
    console.log(generationNum);
}

function GetUserPhrase() {

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