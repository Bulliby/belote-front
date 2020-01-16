import CardValue from "./CardValue"
import CardShape from "./CardShape"
import Card from "./Card"

export default class Shoe {
    giveShoe(): Card[] {
        let ret = [];
        CardShape.SHAPE.forEach((shape) => {
            CardValue.VALUE.forEach((value) => {
                ret.push(new Card(value, shape));
            });
        });
        return ret;
    }    
}
