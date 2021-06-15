@IsTest
public class CustomPicklistLWCControllerTest {
   
    @TestSetup
    public static void setup(){
        Account acc = new Account(Name = 'Test1', Rating = 'Hot');
        insert acc;
    }
    
    @IsTest
    public static void testGetPickListFieldData(){
        
        Account acc = [SELECT Id, Type FROM Account LIMIT 1];
        Test.startTest();
        CustomPicklistLWCController.FieldWrapper fw = CustomPicklistLWCController.getPickListFieldData(acc.Id, 'Account', 'Rating');
        Test.stopTest();
        System.assertEquals(true, fw.picklistValues.size() > 0, 'The size of fw.picklistValues list should be greater than zero as it contains all the values in Picklist Rating in Account object');
        System.assertEquals('Account Rating', fw.fieldLabel, 'The field on Account object having API name "Rating" should have Rating as its label');
        System.assertEquals('Hot', fw.defaultValue, 'The value of the Rating field should be "Hot" as we are inserting a Account record with this value in setup method');
        
    }
}