(function () {
    'use strict'

    angular.module('marathonMajorsApp').controller('RunnerDetailController', ['$stateParams', '$ionicPopup', 'marathonApi', 'MyRunnersService', RunnerDetailController]);

    function RunnerDetailController($stateParams, $ionicPopup, marathonApi, MyRunnersService) {
        //console.log('$stateParams ', $stateParams);
        var vm = this;
        vm.runnerId = Number($stateParams.id);
        var data = "";
        marathonApi.getCategoryData().then(function (data) {
        

        var runner = _.chain(data.runners)
            .flatten("divisionRunners")
            .find({ "id": vm.runnerId })
            .value();

        vm.runnerName = runner.name;
        console.log(data.rankings);
        vm.runnerStanding = _.chain(data.rankings)
                           .flatten("divisionStandings")
                           .find({ "runnersId": vm.runnerId })
                           .value();
        console.log(vm.runnerStanding);
        });
        //vm.following = false;
        vm.following = MyRunnersService.isFollowingRunner(vm.runnerId.toString());

        vm.toggleFollow = function () {

            if (vm.following) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Unfollow?',
                    template: 'Are you sure you want to unfollow?'
                });
                confirmPopup.then(function (res) {
                    if (res) {
                        vm.following = !vm.following;
                        MyRunnersService.unfollowRunner(vm.runnerId);
                    }
                });
            } else {
                vm.following = !vm.following;
                console.log(vm.runnerName);
                MyRunnersService.followRunner({ id: vm.runnerId, name: vm.runnerName });
            }
        };

    };


})();