class Phrase {
    constructor(string) {
        this.string = this.GenerateRandomPhrase();
        this.fitness = 0;
    }

    //geenrates the a new phrase
    GenerateRandomPhrase() {
        //debugger;
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
        let charactersLength = thePhrase.length;
        for (let i = 0; i < charactersLength; i++) {

            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result;
    }

    randomChar() {
        let newChar = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';

        newChar = characters.charAt(GetRandomNum(characters.length));

        return newChar.toString();
    }
    //calculates the fitness of the phrase
    calcFitness() {
        let score = 0;
        for (let i = 0; i < this.string.length; i++) {

            if (this.string[i] === thePhrase[i]) {
                score++;
            }
        }

        this.fitness = (score / this.string.length) * 100;
        return (score / this.string.length) * 100;
    }

    crossover(parentB) {

        let child = new Phrase();

        let midpoint = GetRandomNum(this.string.length);
        let parentApart = "";
        let parentBpart = "";
        for (let i = 0; i < midpoint; i++) {
            parentApart += this.string[i];
        }
        for (let i = midpoint; i < this.string.length; i++) {
            parentBpart += parentB.string[i];
        }

        child.string = parentApart + parentBpart;

        child.mutate();

        return child;

    }

    mutate() {

        for (let i = 0; i < this.string.length; i++) {

            if (GetRandomNum(100) < mutationrate) {

                let charToBeReplaced = this.string[i];
                let newString = this.string.replace(charToBeReplaced, this.randomChar());
                this.string = newString;

            }
        }
    }
}

