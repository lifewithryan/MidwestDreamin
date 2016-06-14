({
        /*loadDefault : function(component) {
        	var action = component.get("c.getDefaultComponent");
        	action.setParams(
        		"appName" : component.get("v.appName");
        	);
        	action.setCallback(function(response) {

        	});
        },

        loadProjectList : function(component) {
                $A.createComponent(
                        "c:IndustrialProjectList",
                        {},
                        //not setting any params on the loading componet
                        //that does it by itself -- I hope
                        function(newComponent) {
                                alert(newComponent);
                                component.set("v.body", newComponent);
                        }
                )
        },

        loadComponent : function(objId) {
                $A.createComponent(
                        "c:IndustrialProjectView",
                        {
                                "pid" : objId
                        },
                        function(newComponent) {
                                alert(newComponent); //why is this null>?!>!
                                //create instance of loadComponentEvent
                                //set the component on the event
                                //see if it loads
                                var navEvent = $A.get("e.c:NavigateToComponent");
                                navEvent.setParams({"targetCmp" : newComponent});
                                console.log("firing nav event");
                                navEvent.fire();
                        }
                )
        }*/
})