public with sharing class ContactManager {
    @AuraEnabled(cacheable=false)
    public static List<Contact> getContact(Integer numberOfRecords){
        return [SELECT id, FirstName, LastName, Email, Phone FROM Contact LIMIT: numberOfRecords];
    }
}
