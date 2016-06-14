public with sharing class BaseComponentController {

	@AuraEnabled
    public static String getDefaultComponent(String appName) {
        Map<String, Default_Components__c> comps = Default_Components__c.getall();
        Default_Components__c defaultComponent = comps.get(appName);
        if(defaultComponent != null) {
            return defaultComponent.Default_Component__c;
        } else {
            return null;
        }
    }
}