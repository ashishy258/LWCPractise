public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(String parentAccId){
        return [SELECT Id, Name, Email FROM Contact WHERE AccountId =: parentAccId WITH SECURITY_ENFORCED];
    }

    @AuraEnabled
    public static void createContact(Contact contactRecord, String accId){
        contactRecord.AccountId = accId;
        insert contactRecord;
    }

    @AuraEnabled
    public static String sendWelcomeMail(List<String> emailIds){
        Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
        message.toAddresses = emailIds;
        message.subject = 'Subject Test Message';
        message.plainTextBody = 'This is the message body.';
        List<Messaging.SingleEmailMessage> messages =   new List<Messaging.SingleEmailMessage>{message};
        List<Messaging.SendEmailResult> results = Messaging.sendEmail(messages);

        if (results[0].success) {
            return 'Success';
        } else {
            return 'Failure';
        }
    }

    @AuraEnabled(cacheable=true)
    public static WrapperClass getAccountist(){
        WrapperClass allData = new WrapperClass();
        List<Account> lstAccount = [SELECT Id, Name, Type, Industry FROM Account WITH SECURITY_ENFORCED];

        for(Account a: lstAccount){
            allData.recordData.add(a);
        }
        Schema.SObjectType objType = Schema.getGlobalDescribe().get('Account');
        Schema.DescribeSObjectResult sobjectDescribe = objType.getDescribe();
        Map<String, Schema.SObjectField> fieldMap = sobjectDescribe.fields.getMap();
        List<Schema.PicklistEntry> pickListValues = fieldMap.get('Type').getDescribe().getPickListValues();
        for (Schema.PicklistEntry f: pickListValues) {
            Map<String, String> values = new Map<String, String>{
                'label' => f.getLabel(),
                'value' => f.getValue()
            };
            allData.typeFieldValues.add(values);    
        }
        allData.typeFieldLabel = fieldMap.get('Type').getDescribe().getLabel();

        return allData;
    }

    public class WrapperClass{
        @AuraEnabled
        public List<Account> recordData {get; set;}
        @AuraEnabled
        public String typeFieldLabel {get; set;}
        @AuraEnabled
        public List<Map<String, String>> typeFieldValues {get; set;}

        public WrapperClass(){
            recordData = new List<Account>();
            typeFieldValues = new List<Map<String, String>>();

        }
    }

    @AuraEnabled
    public static string updateAccounts(Object data) {
        List<Account> accountsForUpdate = (List<Account>) JSON.deserialize(JSON.serialize(data), List<Account>.class);
        try {
            update accountsForUpdate;
            return 'Success: accounts updated successfully';
        }
        catch (Exception e) {
            return 'The following exception has occurred: ' + e.getMessage();
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountListCustom() {
        return [SELECT Id, Name, Industry, NumberOfEmployees FROM Account WITH SECURITY_ENFORCED LIMIT 10];
    }
}