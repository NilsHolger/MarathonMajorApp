(function () {
    'use strict'

    angular.module('marathonMajorsApp').controller('RunnersController', ['$scope', 'marathonApi', RunnersController]);

    function RunnersController($scope, marathonApi) {
        var vm = this;
        vm.loadList = function () {
            marathonApi.getCategoryData().then(function (data) {
                //var categoryId = Number($stateParams.categoryId);
                //vm.runners = _.find(data.runners, { "categoryId": categoryId });
                vm.runners = data.runners;
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };
        vm.loadList();
    };
})();