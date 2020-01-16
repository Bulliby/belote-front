//TODO put static function?
export default class Randomization {

    /**
     * Get random int between 0 and Max
     */
    static getRandomInt(max: number) :number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /**
     * Get random int Between two value
     */
    static getRandomIntBtw(min: number, max: number) :number {
        //The maximum is exclusive and the minimum is inclusive
        return Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min))) + Math.ceil(min); 
    }

    /**
     * Get random int Between two value
     */
    static getRandomIntBtwInclusive(min: number, max: number) :number {
        //The maximum is inclusive and the minimum is inclusive
        return Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min) + 1)) + Math.ceil(min); 
    }
}
