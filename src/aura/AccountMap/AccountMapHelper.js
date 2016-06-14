({
    navigateToDetailsView : function(accountId) {
        //this will prevent things from working in a browser
        //var event = $A.get("e.force:navigateToSObject");
        //event.setParams({
        //    "recordId": accountId
        //});
        //event.fire();
		
		$A.get("e.c:NavigateToComponent").setParams({
			"targetCmp" : "c:RecordView",
			"attributeList" : {"recordId" : accountId}
		}).fire();
    }
})