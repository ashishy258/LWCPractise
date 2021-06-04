public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static WrapperClass getAccountist(){
        WrapperClass allData = new WrapperClass();
        List<Account> lstAccount = [SELECT Id, Name, Type, Industry FROM Account];

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
}
