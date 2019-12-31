class Randomization {

    constructor(private max: number, private min: number = 0) {
    }

    /**
     * Get random int between 0 and Max
     */
    getRandomInt() :number {
        return Math.floor(Math.random() * Math.floor(this.max));
    }

    /**
     * Get random int Between two value
     */
    getRandomIntBtw() :number {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        //The maximum is exclusive and the minimum is inclusive
        return Math.floor(Math.random() * (max - min)) + min; 
    }

    /**
     * Get random int Between two value
     */
    getRandomIntBtwInclusive() :number {
        let min = Math.ceil(this.min);
        let max = Math.floor(this.max);
        //The maximum is inclusive and the minimum is inclusive
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

var rand = new Randomization(100);

console.log(rand.getRandomIntBtw());
console.log(rand.getRandomIntBtwInclusive());
