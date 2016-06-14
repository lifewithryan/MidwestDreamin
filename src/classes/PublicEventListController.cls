public with sharing class PublicEventListController {

    //could probably move this to a more verbose PublicEventController
	@AuraEnabled
    public static List<Public_Event__c> eventList() {
        return [SELECT Id, Name FROM Public_Event__c];
    }

    @AuraEnabled
    public static Public_Event__c loadPublicEvent(String id) {
    	return [SELECT Id
    		   , Name
    		   , Event_Start__c
    		   , Event_End__c
    		   , Venue__c 
    		   , Venue__r.Name
    		   FROM Public_Event__c WHERE Id = :id];
    }
}