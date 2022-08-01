public with sharing class AccountControllerAssignment {
    
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
}