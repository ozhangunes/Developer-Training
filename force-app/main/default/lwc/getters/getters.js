import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
    fruits = ["Apple", "Banana", "Mango"];

    num1 = 10;
    num2 = 20;
    index = 0;

    // get sum() {
    //     return this.num1 + this.num2;
    // }
    get sum(){
        let result = parseInt(this.num1) + parseInt(this.num2);
        return result;
    }

    get firstFruit() {
        return this.fruits[this.index];
    }
    changeHandler(event){
        this.index = event.target.value;
        this.num2 = event.target.value;
    }
}