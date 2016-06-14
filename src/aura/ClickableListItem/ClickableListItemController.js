({
        listItemClicked : function(component, event, helper) {
                var cmpEvent = component.getEvent("itemSelected");
                console.log('cmpEvent:' + cmpEvent);
                var objId = component.get("v.objectId");
                console.log('objId:' + objId);

                cmpEvent.setParams({
                        "objectId" : objId
                });

                cmpEvent.fire();
        }
})