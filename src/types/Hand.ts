import Deal from "./Deal"
import Card from "./Card"

module.exports = class Hand {

    private deal: Deal;

    constructor() {
        const nbCardHand = 8;
        this.deal = new Deal(nbCardHand);
    }

    getHand() {
        return this.deal.giveHand();
    }
}
