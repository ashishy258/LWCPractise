({
	doSubmit : function(component, event, helper) {

        
        var fromRecPage = component.get("v.RecInput");
        var action = component.get("c.createContact");
        console.log(component.get("v.recordId"));
        action.setParams({ contactRecord : fromRecPage, accId : component.get("v.recordId") });
		$A.enqueueAction(action);
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.find('notifLib').showToast({
                    "title": "Record Saved!",
                    "message": 'Success!!!',
                    "variant": "success"
                });
                $A.get('e.force:refreshView').fire();
            }
            else {
                component.find('notifLib').showToast({
                    "title": "Record Saved failed!",
                    "message": 'Error!!!',
                    "variant": "error"
                });    
            }
           
        });
    }
    
})