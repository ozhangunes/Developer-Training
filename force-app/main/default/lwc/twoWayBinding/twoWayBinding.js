import { LightningElement } from 'lwc';

export default class TwoWayBinding extends LightningElement {
    fullname = "Balakrishna";
    title = "Salesforce Developer";

    changeHandler(event) {
        console.log("event : ", event);
        this.title = event.target.value;
    }
}