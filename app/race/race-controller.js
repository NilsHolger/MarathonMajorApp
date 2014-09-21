(function () {
    'use strict'

    angular.module('marathonMajorsApp').controller('RaceController', ['$sce', '$stateParams', 'marathonApi', RaceController]);

    function RaceController($sce, $stateParams, marathonApi) {
        var vm = this;
        var raceId = Number($stateParams.id);
        marathonApi.getCategoryData().then(function (data) {
            vm.race = _.find(data.locations, { "id": raceId });
            vm.race.teaserVideo = $sce.trustAsResourceUrl(vm.race.teaserVideo);
        });
    };
})();