public with sharing class LwcLookupController {

    private static final Map<String,String> WHERE_CLAUSE_MAP = new Map<String,String>{
           'User'=>'IsActive',
           'User__x'=>'IsActive__c'
    };
 
    @AuraEnabled(cacheable=true)  
    public static List<sobject> getAllRecords(String objectName, String column, String keyFieldAPI, String selectedRecordId) {  
           String escapedObjectName = String.escapeSingleQuotes(objectName);
           String escapeColumn = String.escapeSingleQuotes(column);
           String escapeKeyFieldAPI = String.escapeSingleQuotes(keyFieldAPI);
           String query = 'SELECT ' + escapeColumn + ',' + escapeKeyFieldAPI + ' FROM ' + escapedObjectName;  
           String escapedSelectedRecordId;
           if(String.isNotBlank(selectedRecordId)){
                escapedSelectedRecordId = String.escapeSingleQuotes(selectedRecordId);
                query += ' WHERE Id =: escapedSelectedRecordId';
           }
 
           if(WHERE_CLAUSE_MAP.containsKey(escapedObjectName)){
               if(String.isNotBlank(escapedSelectedRecordId)){
                      query += ' AND ' + WHERE_CLAUSE_MAP.get(escapedObjectName) + ' = true';
               }else{
                      query += ' WHERE ' + WHERE_CLAUSE_MAP.get(escapedObjectName) + ' = true';
               }
           }
           query += ' LIMIT 100';
           return Database.query(String.escapeSingleQuotes(query));
    }
 
    @AuraEnabled(cacheable=true)  
    public static List<sobject> getFilterRecords(String objectName, String column, String keyFieldAPI, String searchKey) {  
           String searchText = '\'%' + String.escapeSingleQuotes(searchKey) + '%\'';  
           String escapedObjectName = String.escapeSingleQuotes(objectName);
           String escapeColumn = String.escapeSingleQuotes(column);
           String escapeKeyFieldAPI = String.escapeSingleQuotes(keyFieldAPI);
           String query = 'SELECT ' + escapeColumn + ',' + escapeKeyFieldAPI + ' FROM ' + escapedObjectName + ' WHERE '+ escapeColumn +' LIKE ' + searchText;  
           if(WHERE_CLAUSE_MAP.containsKey(escapedObjectName)){
              query += ' AND ' + WHERE_CLAUSE_MAP.get(escapedObjectName) + ' = true';
           }
           query += ' LIMIT 1000';
           return Database.query(query);
    }
 }