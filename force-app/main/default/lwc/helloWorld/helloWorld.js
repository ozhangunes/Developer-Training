import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = "Balakrishna";
    age = 30;
    location = {
        city: "Houston",
        country: "United States"
    };

    //write a method to sum two numbers
    sum(a, b) {
        return a+b;
    }
}