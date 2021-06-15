@IsTest
public class LwcLookupControllerTest {
   
   
    @TestSetup
    static void setup(){
        Account acc = new Account(Name = 'TestAccount');
        insert new List<Account>{acc};
    }
   
    @IsTest
    static void testGetAllRecords() {
       
        List<Account> accountList = [SELECT Id FROM Account];
        String objectName = 'Account';
        String column = 'Name';
        String keyFieldAPI = 'Id';
        String selectedRecordId = accountList[0].Id;
       
        Test.startTest();
        List<sobject> lstAccounts = LwcLookupController.getAllRecords(objectName, column, keyFieldAPI, selectedRecordId);
        Test.stopTest();
       
        System.assertEquals(1, lstAccounts.size(), 'Size of the list lstAccounts should be 1');
       
    }
   
    @IsTest
    static void testGetFilterRecords() {
       
        String objectName = 'Account';
        String column = 'Name';
        String keyFieldAPI = 'Id';
        String searchKey = 'Test';
       
        Test.startTest();
        List<sobject> lstAccounts = LwcLookupController.getFilterRecords(objectName, column, keyFieldAPI, searchKey);
        Test.stopTest();
       
        System.assertEquals(1, lstAccounts.size(), 'Size of the list lstAccounts should be 1 as there are three account records having "Test" in its name');
       
    }
}