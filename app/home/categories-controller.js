(function () {
    'use strict'

    angular.module('marathonMajorsApp').controller('CategoriesController', ['$state', 'marathonApi', CategoriesController]);

    function CategoriesController($state, marathonApi) {
        var vm = this;
        //var categories = marathonApi.getCategories();
        //vm.categories = categories;
        marathonApi.getCategories().then(function (data) {
            vm.categories = (data !== 'null') ? data : {};
        });

        vm.selectCategory = function (id) {
            //TODO: select correct category
            marathonApi.setCategoryId(id);
            $state.go("app.runners", { categoryId: id });

        };

    };
})();