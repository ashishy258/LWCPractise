public with sharing class DataArchiverController {
    
    @AuraEnabled()
    public static List<DataArchive__c> createArchiveData(String jsonRecordsString){
        Map<String, DataArchive__c> objNameDataArchRecordMap = new Map<String, DataArchive__c>();
        for(DataArchive__c da : [SELECT Id, Object_Name__c, Object_Fields__c, Data_Till_Date__c, Last_Batch_Run_Date__c, Last_Data_Fetch_Till_Date__c FROM DataArchive__c WITH SECURITY_ENFORCED]){
            objNameDataArchRecordMap.put(da.Object_Name__c, da);
        }
        List<DataWrapper> dataWrapperList = (List<DataWrapper>) JSON.deserialize(jsonRecordsString, List<DataWrapper>.class);
        List<DataArchive__c > archiveDataList = new List<DataArchive__c >();

        for(DataWrapper wrap : dataWrapperList){
            if(objNameDataArchRecordMap.containsKey(wrap.objectName)){
                DataArchive__c da = objNameDataArchRecordMap.get(wrap.objectName);
                da.Object_Fields__c = wrap.objectFields;
                da.Data_Till_Date__c = Date.valueOf(wrap.dataTillDate);
                archiveDataList.add(da);
            }else{
                DataArchive__c da = new DataArchive__c(Object_Name__c = wrap.objectName,
                                                     Object_Fields__c = wrap.objectFields,
                                                     Data_Till_Date__c  = Date.valueOf(wrap.dataTillDate));
                archiveDataList.add(da);
            }
        }

        if(DataArchive__c.SObjectType.getDescribe().isCreateable() && DataArchive__c.SObjectType.getDescribe().isUpdateable() && !archiveDataList.isEmpty()){
            upsert archiveDataList;
        }
        return archiveDataList;
    }

    public class DataWrapper{
        
        @AuraEnabled
        public String objectName {get; set;}
        @AuraEnabled
        public String dataTillDate {get; set;}
        @AuraEnabled
        public String objectFields {get; set;}   
    }

    public static void getArchiveBatch(DataArchive__c arcRecord){
        String query = '';
        if(arcRecord.Last_Data_Fetch_Till_Date__c == null){
            Datetime dataFetchTillDate = arcRecord.Data_Till_Date__c;
            query = query + 'SELECT  ' + arcRecord.Object_Fields__c + ' FROM ' + arcRecord.Object_Name__c + ' WHERE CreatedDate <: dataFetchTillDate';
        }
        if(arcRecord.Last_Data_Fetch_Till_Date__c < arcRecord.Data_Till_Date__c){
            Datetime dataFetchTillDate = arcRecord.Data_Till_Date__c;
            Datetime lastFetchedDate = arcRecord.Last_Data_Fetch_Till_Date__c;
            query = query + 'SELECT  ' + arcRecord.Object_Fields__c + ' FROM ' + arcRecord.Object_Name__c + ' WHERE CreatedDate <: dataFetchTillDate AND CreatedDate >: lastFetchedDate'; 
        }

        if(!String.isBlank(query)){
            createBigObjectRecords(Database.query(String.escapeSingleQuotes(query)));
        }
    }

    public static void createBigObjectRecords(List<SObject> sObjList){
        for(SObject sObj : sObjList){
            String objName = sObj.Id.getSObjectType().getDescribe().getName();
            History_Archive__b pb = new History_Archive__b();
            pb.Object_Name__c = objName;
            pb.RecordId__c = sObj.Id;
            pb.TA01__c = JSON.serialize(sObj);
            database.insertImmediate(pb);
        }
    }
}