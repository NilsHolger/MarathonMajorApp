(function () {
    'use strict'

    angular.module('marathonMajorsApp').controller('LocationsController', ['marathonApi', LocationsController]);

    function LocationsController(marathonApi) {
        var vm = this;
        var data = marathonApi.getCategoryData().then(function (data) {
            vm.locations = data.locations;
        });

        //vm.selectCategory = function (categoryId) {
        //    //TODO: select correct category
        //    $state.go("app.runners");

        //};

    };
})();