class Phase{
    constructor(string){
        this.string = this.GenerateRandomPhase();
        this.fitness = 0;
    }
    //geenrates the a new phase
     GenerateRandomPhase(){
        // debugger;
        let result           = 'asd1';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
       // let charactersLength = Math.floor((Math.random() * 100) + 1);
       let charactersLength = thePhase.length;
        for ( let i = 0; i < charactersLength; i++ ) {  
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
          
        }
        charactersLength = Math.floor((Math.random() * 100) + 1);
        console.log(result);
        return result;
    }
    //calculates the fitness of the phase
    calcFitness(){
        let score = 0;
        for (let i = 0; i < this.string.length; i++) {
            //const element = this.string[i];
            if (this.string[i] == thePhase[i]) {
                score++;
            }
        }
        return (score/this.string.length)*100;
    }
}

