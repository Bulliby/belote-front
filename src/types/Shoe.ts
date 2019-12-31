import CardValue from "./CardValue"
import CardShape from "./CardShape"
import Card from "./Card"

export default class Shoe {
    giveShoe(): Card[] {
        console.log(CardValue.VALUE);  
        console.log(CardShape.SHAPE);  
        return [new Card("C", "V")];
    }    
}
