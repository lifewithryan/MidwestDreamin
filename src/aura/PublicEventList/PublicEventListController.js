({
	doInit : function(component, event, helper) {
		var action = component.get("c.eventList");

		action.setCallback(this, function(response) {
			var state = response.getState();
			if(state === "SUCCESS") {
				component.set("v.events", response.getReturnValue());
			}
		});

		$A.enqueueAction(action);
	}, 

	backHome : function(component, event, helper) {
		$A.get("e.c:NavigateToComponent").setParams({
			"targetCmp" : "c:ConferenceProWelcome"
		}).fire();
	},

	loadEvent : function(component, event, helper) {
		console.log(event.getParams());
		var objId = event.getParam("objectId");
		
		$A.get("e.c:NavigateToComponent").setParams({
			"targetCmp" : "c:PublicEventView",
			"attributeList" : {"eventId" : objId}
		}).fire();
	}
})