class Phase{
    constructor(string){
        this.string = this.GenerateRandomPhase();
        this.fitness = 0;
    }

    //geenrates the a new phase
     GenerateRandomPhase(){
        //debugger;
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
       let charactersLength = thePhase.length;
        for ( let i = 0; i < charactersLength; i++ ) {  
           result += characters.charAt(Math.floor(Math.random() * characters.length));
          
        }
        //charactersLength = Math.floor((Math.random() * 100) + 1);
        //console.log(result);
        return result;
    }

    randomChar(){
        let newChar = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
       //let charactersLength = thePhase.length;
       
       newChar = characters.charAt(GetRandomNum(characters.length));
          
        
        //charactersLength = Math.floor((Math.random() * 100) + 1);
        //console.log(result);
        return newChar.toString();
    }
    //calculates the fitness of the phase
    calcFitness(){
        //debugger;
        let score = 0;
        for (let i = 0; i < this.string.length; i++) {
            //const element = this.string[i];
            if (this.string[i] === thePhase[i]) {
                score++;
            }
        }

        this.fitness = (score/this.string.length)*100;
        return (score/this.string.length)*100;
    }

    crossover(parentB){

        //debugger;
        let child = new Phase();

        let midpoint = GetRandomNum(this.string.length);
        let parentApart = "";
        let parentBpart = "";
        for (let i = 0; i < midpoint; i++) {
            parentApart+=this.string[i];       
        }
        for (let i = midpoint; i < this.string.length; i++) {
            parentBpart+=parentB.string[i];       
        }

        child.string = parentApart+parentBpart;

        child.mutate();

        return child;

    }

    mutate(){
        //if(GetRandomNum(100) > mutationrate){}
        for (let i = 0; i < this.string.length; i++) {
            
            if(GetRandomNum(100) < mutationrate){
                //this.string[i] = this.randomChar();
                let charToBeReplaced = this.string[i];
                let newString = this.string.replace(charToBeReplaced,this.randomChar());
                this.string = newString;
            }
        }
    }
}

