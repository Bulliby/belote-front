import Shoe from "./Shoe";
import Card from "./Card"
import Randomization from "./Randomization";

export default class Deal {

    private shoe: Card[];
    private rand: Randomization;

    constructor(private nbCard: number) {
        this.shoe = (new Shoe()).giveShoe();
    }

    giveHand(): Card[] {
        let ret = [];

        if (this.shoe.length == this.nbCard) {
            return this.shoe;
        }

        for (let i = 0; i != this.nbCard; i++) {
            let indexCard = Randomization.getRandomInt(this.shoe.length);
            ret.push(this.getCard(indexCard));
            this.deleteCard(indexCard);
        }    

        return ret;
    }

    private getCard(indexCard: number) {
        return this.shoe[indexCard];
    }

    private deleteCard(indexCard: number) {
        this.shoe.splice(indexCard, 1);
    }
}
