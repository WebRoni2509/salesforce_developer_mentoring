import { LightningElement, wire, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {

    objectAipName = CONTACT_OBJECT;
    formFields = [
        FIRST_NAME_FIELD, 
        LAST_NAME_FIELD, 
        EMAIL_FIELD
    ];


    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Contact ID: ' + event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(toastEvent)
    }
}