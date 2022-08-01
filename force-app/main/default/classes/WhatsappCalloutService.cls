public with sharing class WhatsappCalloutService {
    
    @AuraEnabled
    public static Whatsapp_Chat__c sendWhatsAppMessage(String phoneNumer, String textMessage){
        Whatsapp_Chat__c insertedChat = new Whatsapp_Chat__c();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://graph.facebook.com/v13.0/102213859250532/messages');
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');
        request.setHeader('Authorization', 'Bearer EAAL6mETY9swBAFpYxavgg6ZBhehnEDKyiempz67yZAUroI41c7lFFrGrZB2BZBhvEyHL4VjJimkn8DuPQvOiUEGl7wwf4tLmVBYa3isZBQgl6QTSrqdITkrAxfKM8Q5ZBDLhgpq3YOK2vfxxZCnoIJMmJGAdOtpw6wAFCBN8iYQAP9tIO8ZAgkbfAcKSh2dugLxoTNKqQPi2q1NK3xgaJHrs');
        ReqWrapper wrap = new ReqWrapper();
        wrap.messaging_product = 'whatsapp';
        wrap.to = phoneNumer;
        wrap.type = 'text';
        wrap.text = new Map<String, String>{'body' => textMessage};
        String jsonBodyToSend = JSON.serialize(wrap);
        request.setBody(jsonBodyToSend);
        Http http = new Http();
        HTTPResponse response = http.send(request);
        if(response.getStatusCode() == 200) {
            Whatsapp_Chat__c chat = new Whatsapp_Chat__c(Phone_Number__c = phoneNumer, Message__c = textMessage, Is_Outbound__c = true);
            insert chat;
            insertedChat = chat;
        } else {
            throw new AuraHandledException('exceptionText');
        }
        return insertedChat;
    }

    @AuraEnabled
    public static List<Whatsapp_Chat__c> getWhatsAppChats(String phoneNumber){
        return [SELECT id, Name, Phone_Number__c, Message__c, Is_Inbound__c, Is_Outbound__c, CreatedDate FROM Whatsapp_Chat__c WHERE Phone_Number__c =: phoneNumber ORDER BY CreatedDate ASC];
    }
    
    public class ReqWrapper{
        public String messaging_product;
        public String to;
        public String type;
        public Map<String, String> text;
        
        public ReqWrapper(){
            text = new Map<String, String>();
        }
    }
}