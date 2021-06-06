public with sharing class CarHubController {
    
    @AuraEnabled(cacheable=true)
    public static List<Car__c> getCars(){
        return [SELECT Id, Name, Category__c, Control__c, Description__c, Fuel_Type__c, Make__c, MSRP__c, Number_of_Seats__c, OwnerId, Picture_URL__c FROM Car__c];

    }

    @AuraEnabled(cacheable=true)
    public static List<Car__C> getFilteredCars(FilterWRAPPER filterKey){

        String whereClause = '';
        List<String> criteria = new List<String>();
        String search;
        Decimal maxPrice;
        List<String> categories = new List<String>();
        List<String> make = new List<String>();
        
        if (filterKey != null) {
            if (!String.isBlank(filterKey.inputSearch)) {
                search = '%'+filterKey.inputSearch+'%';
                criteria.add('Name LIKE :search');
            }
            if (filterKey.sliderSearch >= 0) {
                maxPrice = filterKey.sliderSearch;
                criteria.add('MSRP__c <= :maxPrice');
            }
            if (!filterKey.categoryCheckBox.isEmpty()) {
                categories = filterKey.categoryCheckBox;
                criteria.add('Category__c IN :categories');
            }
            if (!filterKey.makeCheckBox.isEmpty()) {
                make = filterKey.makeCheckBox;
                criteria.add('Make__c IN :make');
            }
            if (!criteria.isEmpty()) {
                whereClause = 'WHERE '+ String.join(criteria, ' AND ');
            }
        }
        
        String query = 'SELECT Id, Name, Picture_URL__c, MSRP__c, Category__c, Make__c FROM Car__c ' + whereClause + ' WITH SECURITY_ENFORCED ORDER BY Name';
        system.debug(query);
        return Database.query(query);
    }

    public class FilterWRAPPER{

        @AuraEnabled
        public String inputSearch {get; set;}
        @AuraEnabled
        public Decimal sliderSearch {get; set;}
        @AuraEnabled
        public List<String> categoryCheckBox {get; set;}
        @AuraEnabled
        public List<String> makeCheckBox {get; set;}
        
        public FilterWRAPPER(){
            categoryCheckBox = new List<String>();
            makeCheckBox = new List<String>();
        }
    }
}
