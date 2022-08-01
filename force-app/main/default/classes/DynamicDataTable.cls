public with sharing class DynamicDataTable {

    @AuraEnabled(cacheable=true)
    public static List<Wrapper> getObjects(){
        List<Wrapper> wrapperToReturn = new List<Wrapper>();
        for(Schema.SObjectType objTyp : Schema.getGlobalDescribe().Values()){
           String name = objTyp.getDescribe().getName();
           String label = objTyp.getDescribe().getLabel();
           if(!name.containsignorecase('history') && !name.containsignorecase('tag') &&
                !name.containsignorecase('share') && !name.containsignorecase('feed') && 
               	!name.containsignorecase('group') && !name.containsignorecase('public') &&
                !objTyp.getDescribe().isCustomSetting() && objTyp.getDescribe().isCreateable() &&
                objTyp.getDescribe().getRecordTypeInfos().size() > 0){  

                Wrapper wr = new Wrapper();
                wr.label = label;
                wr.value = name;
                wrapperToReturn.add(wr);
           }
        }
        return wrapperToReturn;
    }
    
    @AuraEnabled()
    public static List<Wrapper> getFieldsMapOnObjectList(String objName){

        List<Wrapper> wrapperToReturn = new List<Wrapper>();

        Map<String, Schema.SObjectField> mapOfField = Schema.getGlobalDescribe().get(objName).getDescribe().fields.getMap();

        for(String fieldName : mapOfField.keySet()) {
            Schema.SObjectField field = mapOfField.get(fieldName);
            Schema.DescribeFieldResult f = field.getDescribe();
            if(f.isAccessible()){
                Wrapper wr = new Wrapper();
                wr.label = f.getLabel();
                wr.value = f.getName();
                wrapperToReturn.add(wr);
            }
            
        }
        return wrapperToReturn;
    }

    @AuraEnabled
    public static List<SObject> getRecords(String objName, List<String> fields){
        String fieldsToRetrieve = string.join(fields,', ');
        String query = 'SELECT '+fieldsToRetrieve+ ' FROM ' +objName;
        system.debug(query);
        return Database.query(String.escapeSingleQuotes(query));

    }

    public class Wrapper{
        
        @AuraEnabled
        public String label {get; set;}
        @AuraEnabled
        public String value {get; set;}

    }
}