import { LightningElement,track } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getContact'

export default class FetchRecordsViaApex2 extends LightningElement {

   @track numberOfRecords;
   @track contacts;

   get responseReceived(){
       if(this.contacts){
           return true;
       }
       return false;
   }

   numberOfContactChangeHandler(event){
       this.numberOfRecords = event.target.value;
   }

   getContacts(){
       getAllContacts({numberOfRecords: this.numberOfRecords})
       .then(data => {
           console.log('DATA::::::', data);
           
           this.contacts = data
        })
       .catch(error => {
            console.log('Error retrieving contacts', error.body.message);
       });
   }
}