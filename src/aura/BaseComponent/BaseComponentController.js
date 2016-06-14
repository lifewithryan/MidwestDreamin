({
    doInit : function(component, event, helper) {
            /*  
			   TODO: find a way to make loaoding initial component dynamic. its tightly
			   coupled at the moment. Would like to find a way to re-use this component
			   for all apps. Think mushbrain, THINK!!
            */
            
            var action = component.get("c.getDefaultComponent");
            action.setParams({
            	"appName" : component.get("v.appName")
            });

            action.setCallback(this, function(response) {
            	var state = response.getState();
            	if(state === "SUCCESS") {
            		//load new component
            		var defaultCmp = response.getReturnValue();
            		$A.createComponent(
            			defaultCmp,
            			{},
            			function(newComponent) {
            				component.set("v.body", newComponent);
            			}
            		)
            	}
            });

            $A.enqueueAction(action);
    },

    //TODO Test v.body name change? just for the hell of it
    loadComponent : function(component, event, helper) {
        /*var newCmp = event.getParam("targetCmp"); //should be a component reference??
        console.log('loading component: ' + newCmp);
        component.set("v.body", newCmp);*/
        console.log('caught event');
        var newCmp = event.getParam("targetCmp");
        var attrs = event.getParam("attributeList");
        console.log(newCmp);
        console.log('attrs:' + attrs);
        $A.createComponent(
			newCmp,
			attrs,
			function(newComponent) {
				component.set("v.body", newComponent);
			}
		)
    }
})