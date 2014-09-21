(function () {
    'use strict'

    angular.module('marathonMajorsApp').controller('LocationsMapController', ['$stateParams', 'marathonApi', LocationsMapController]);

    function LocationsMapController($stateParams, marathonApi) {
        var vm = this;
        
        vm.locationId = Number($stateParams.id);
        vm.map = {
            center: {
                latitude: 52.514745,
                longitude: 13.405380
            },
            zoom: 12
        };
        vm.marker = {};

        marathonApi.getCategoryData().then(function (data) {

            vm.location = _.find(data.locations, { id: vm.locationId });
            vm.marker = {
                latitude: vm.location.latitude,
                longitude: vm.location.longitude,
                title: vm.location.name + "<br/>(Tap for directions)",
                id: vm.locationId,
                showWindow: true
            };
            vm.map.center.latitude = vm.location.latitude;
            vm.map.center.longitude = vm.location.longitude;
        });

        vm.marathonClicked = function (marker) {
            window.location = "geo:" + marker.latitude + "," + marker.longitude + ";u=35";
        };

        };
})();