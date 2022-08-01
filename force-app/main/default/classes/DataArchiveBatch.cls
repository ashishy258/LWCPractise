public class DataArchiveBatch implements Database.Batchable<sObject>, Schedulable {

    private static List<DataArchive__c> listToUpdate = new List<DataArchive__c>();
    public Database.QueryLocator start(Database.BatchableContext bc){
        String query = 'SELECT Id, Last_Batch_Run_Date__c,  Object_Fields__c, Object_Name__c, Data_Till_Date__c, Last_Data_Fetch_Till_Date__c FROM DataArchive__c WHERE Last_Batch_Run_Date__c = null OR Last_Batch_Run_Date__c < TODAY';
        return Database.getQueryLocator(query);
    }
 
    public void execute(Database.BatchableContext bc, List<DataArchive__c> scope){
        List<DataArchive__c> listToUpdate = new List<DataArchive__c>();
        for(DataArchive__c da : scope){
            DataArchiverController.getArchiveBatch(da);
            da.Last_Data_Fetch_Till_Date__c = da.Data_Till_Date__c;
            da.Last_Batch_Run_Date__c = datetime.now();
            listToUpdate.add(da);
        } 
        if(!listToUpdate.isEmpty()){
            system.debug('ashish1234');
            update listToUpdate;
        }
    }  

    public void finish(Database.BatchableContext bc){
        
        system.debug('ashish');
    }

    public void execute(SchedulableContext sc){
        Database.executeBatch(new DataArchiveBatch(), 1);
    }
}