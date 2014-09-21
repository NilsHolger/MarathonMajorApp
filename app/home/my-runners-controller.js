(function () {
    'use strict';

    angular.module('marathonMajorsApp').controller('MyRunnersController', ['$state', 'MyRunnersService', 'marathonApi', MyRunnersController]);

    function MyRunnersController($state, MyRunnersService, marathonApi) {
        var vm = this;

        vm.myRunners = MyRunnersService.getFollowedRunners();

        vm.goToRunner = function (runner) {
            $state.go("app.runner-details", { id: runner.id });
        };
    };
})();