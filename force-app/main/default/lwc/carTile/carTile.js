import { LightningElement, api } from 'lwc';

export default class CarTile extends LightningElement {

    @api car = {};

    sendRecordId(event){
        const selectedEvent = new CustomEvent('selected', { detail: this.car.Id});

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}