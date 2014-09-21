(function () {
    'use strict'

    angular.module('marathonMajorsApp').controller('RankingsController', ['marathonApi', RankingsController]);

    function RankingsController(marathonApi) {
        var vm = this;
        var data = marathonApi.getCategoryData().then(function (data) {
            vm.rankings = data.rankings;
        });
    };
})();