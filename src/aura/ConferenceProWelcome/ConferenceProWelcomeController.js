({
	viewEventList : function(component, event, helper) {
		$A.get("e.c:NavigateToComponent").setParams({
			"targetCmp" : "c:PublicEventList",
			"attributeList" : {}
		}).fire();
	}
})