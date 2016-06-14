({
   jsLoaded: function(component, event, helper) {

    setTimeout(function() {
        var map = L.map('map', {zoomControl: false})
                    .setView([37.784173, -122.401557], 14);

        L.tileLayer(
         'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
         {
                attribution: 'Tiles © Esri'
         }).addTo(map);
        component.set("v.map", map);
    });
  },
    
  accountsLoaded: function(component, event, helper) {

        // Add markers
        console.log('accounts Loaded');
        var map = component.get("v.map");
        console.log('themap:' + map);
        var accounts = event.getParam('accounts');
        console.log('accts:' + accounts);
        for (var i=0; i<accounts.length; i++) {
            var account = accounts[i];
            console.log(account);
            var latLng = [account.Location__Latitude__s, account.Location__Longitude__s];
            console.log(latLng);

            L.marker(latLng, {account: account}).addTo(map).on('click', function(event) {
    			    helper.navigateToDetailsView(event.target.options.account.Id);
			      });
        }  
    },
    
    accountSelected: function(component, event, helper) {
        // Center the map on the account selected in the list
        var map = component.get('v.map');
        var account = event.getParam("account");
        map.panTo([account.Location__Latitude__s, account.Location__Longitude__s]);
    }
})