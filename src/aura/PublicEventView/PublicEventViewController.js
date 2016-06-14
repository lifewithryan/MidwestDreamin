({
	doInit : function(component, event, helper) {
		var action = component.get("c.loadPublicEvent");
		var eventId = component.get("v.eventId");

		action.setParams({
			"id" : eventId
		});

		action.setCallback(this, function(response) {
			var state = response.getState();
			if(state === "SUCCESS") {
				component.set("v.publicEvent", response.getReturnValue());
			}
		});

		$A.enqueueAction(action);
	},

	//TODO: move home functionality to the Base Component or perhaps
	//a separate component to handle nave back to Home. DRY principle!!
	backHome : function(component, event, helper) {
		$A.get("e.c:NavigateToComponent").setParams({
			"targetCmp" : "c:ConferenceProWelcome"
		}).fire();
	},
})