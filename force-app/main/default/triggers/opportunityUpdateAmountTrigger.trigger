trigger opportunityUpdateAmountTrigger on Opportunity (after insert) {

    List<Opportunity> oppList = new List<Opportunity>();
    if(Trigger.isAfter && Trigger.isInsert){
        for(Opportunity opp : Trigger.new){
            if(opp.CreatedDate.Date() < date.newinstance(2022, 6, 30) && opp.CreatedDate.Date() > date.newinstance(2022, 1, 1)){
                oppList.add(new Opportunity(Id = opp.Id, Discount_Percentage__c = 10, Amount = opp.Amount * 0.9, Name = opp.Name + ' Ashish'));
            }
        }
    }
    if(!oppList.isEmpty()){
        update oppList;
    }
}