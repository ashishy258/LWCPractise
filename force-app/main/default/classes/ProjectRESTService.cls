@RestResource(urlMapping='/api/webhooks/project/*')
global class ProjectRESTService {
    
	@HttpGet
    global static Integer verifyFromWhatsApp() {
        String id = RestContext.request.params.get('hub.challenge');
        return Integer.valueOf(id);
    } 
    
    @HttpPost
    global static void postProjectData() {
        RestRequest request = RestContext.request;
        JSONParser parser = JSON.createParser(request.requestBody.toString());
        String messageFromWhatsapp;
        String fromPhoneNumber;
        while (parser.nextToken() != null) {
            if (parser.getText() == 'from') {
                parser.nextToken();
                fromPhoneNumber = parser.getText();
            }
        	if (parser.getText() == 'body') {
                parser.nextToken();
                messageFromWhatsapp = parser.getText();
            }
    	}
        Whatsapp_Chat__c chat = new Whatsapp_Chat__c(Phone_Number__c = fromPhoneNumber, Message__c = messageFromWhatsapp, Is_Inbound__c = true);
        insert chat;
    } 
}