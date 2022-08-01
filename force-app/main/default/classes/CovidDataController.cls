public with sharing class CovidDataController {
    
    @AuraEnabled()
    public static String fetchCovidData(){
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://data.covid19india.org/states_daily.json');
        request.setMethod('GET');
        Http http = new Http();
        HTTPResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            return response.getBody();
        }
        else {
            return '';
        }     
    }

    @AuraEnabled
    public static void createBigObjectRecords(String recordsJsonFromJs){
        List<Wrapper> dataList = (List<Wrapper>)JSON.deserialize(recordsJsonFromJs, List<Wrapper>.class);
        List<Covid__b> newRecList = new List<Covid__b>();
        for(Wrapper wrap: dataList){
            Covid__b  cov = new Covid__b ();
            cov.Date__c = wrap.dateOne;
            cov.State__c = wrap.state;
            cov.Confirmed__c = wrap.confirmed;
            cov.Recovered__c = wrap.recovered;
            cov.Deceased__c  = wrap.deceased;
            newRecList.add(cov);
        }
        database.insertImmediate(newRecList);

    }

    public class Wrapper{
        @AuraEnabled
        public String dateOne {get; set;}
        @AuraEnabled
        public String state {get; set;}
        @AuraEnabled
        public String confirmed {get; set;}
        @AuraEnabled
        public String recovered {get; set;} 
        @AuraEnabled
        public String deceased {get; set;} 
    }
    
}