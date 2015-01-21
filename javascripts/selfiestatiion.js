console.log("running ~~");

function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = (lat2-lat1) * Math.PI / 180;
  var dLon = (lon2-lon1) * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return Math.round(d*1000,10);
}

var storeDataArray = [];
var currentGeolocation;

function sortDistance(a,b)
{
    return a["distance"] - b["distance"];
}

angular.module('ipartcontacts', ['ngMaterial'])
.config( [
    '$compileProvider',
    function( $compileProvider )
    {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|tel|mailto|skype|chrome-extension):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]).controller('AppCtrl', function($scope) {

	console.log("checkpoint6");

  var time = new Date();
  if (navigator.geolocation) {
    console.log("ready to get geolocation !!");
    navigator.geolocation.getCurrentPosition(function(position){

        console.log("get geolocation: ", position);
        var diffTime = (new Date()) - time;
        console.log(diffTime/1000);
        for(var i =0; i< importedDataArray.length; i++) {
          importedDataArray[i].distance = calculateDistance(
          position.coords.latitude, position.coords.longitude,
          importedDataArray[i].latitude, importedDataArray[i].longitude);
          //console.log("check#", i);
        }
        var diffTime = (new Date()) - time;
        console.log(diffTime/1000);

        //importedDataArray.sort(sortDistance);

        $scope.$apply(function(){
          $scope.kireiplaces = importedDataArray;
          $scope.isLoading = false;
        });
    });
  }

    /*
    $scope.todos = [
      {
        face : 'images/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'images/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'images/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'images/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'images/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ]
    */

});

console.log("done ~~");