@IsTest
public class LwcLookupControllerTest {
   
    private static final String LOCN1_MDM_KEY = 'LOCN001';
    private static final String LOCN2_MDM_KEY = 'LOCN002';
    private static final String LOCN3_MDM_KEY = 'LOCN003';
    private static final String OPENT1_MDM_KEY = 'OPER_ENT001';
    private static final String OPENT2_MDM_KEY = 'OPER_ENT002';
    private static final String OPENT3_MDM_KEY = 'OPER_ENT003';
    private static Account brokerLocation1;
    private static Account brokerLocation2;
    private static Account brokerLocation3;
   
    @TestSetup
    static void setup(){
        brokerLocation1 = TDU_Account.createNewBroker('Broker Location 1', LOCN1_MDM_KEY, LOCN1_MDM_KEY, OPENT1_MDM_KEY);
        brokerLocation2 = TDU_Account.createNewBroker('Broker Location 2', LOCN2_MDM_KEY, LOCN2_MDM_KEY, OPENT2_MDM_KEY);
        brokerLocation3 = TDU_Account.createNewBroker('Broker Location 3', LOCN3_MDM_KEY, LOCN3_MDM_KEY, OPENT3_MDM_KEY);
        insert new List<Account>{brokerLocation1, brokerLocation2, brokerLocation3};
    }
   
    @IsTest
    static void testGetAllRecords() {
       
        List<Account> brokerList = [SELECT Id FROM Account];
        String objectName = 'Account';
        String column = 'Name';
        String keyFieldAPI = 'MDM_Key__c';
        String selectedRecordId = brokerList[0].Id;
       
        Test.startTest();
        List<sobject> lstAccounts = LwcLookupController.getAllRecords(objectName, column, keyFieldAPI, selectedRecordId);
        Test.stopTest();
       
        System.assertEquals(1, lstAccounts.size(), 'Size of the list lstAccounts should be 1');
       
    }
   
    @IsTest
    static void testGetFilterRecords() {
       
        String objectName = 'Account';
        String column = 'Name';
        String keyFieldAPI = 'MDM_Key__c';
        String searchKey = 'broker';
       
        Test.startTest();
        List<sobject> lstAccounts = LwcLookupController.getFilterRecords(objectName, column, keyFieldAPI, searchKey);
        Test.stopTest();
       
        System.assertEquals(3, lstAccounts.size(), 'Size of the list lstAccounts should be 3 as there are three account records having "broker" in its name');
       
    }
}