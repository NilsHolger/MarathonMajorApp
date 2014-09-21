(function () {
    'use strict';

    angular.module('marathonMajorsApp').directive('markitdown', [markitdown]);

    function markitdown() {
        // Usage:
        // <div data-markitdown="{{vm.content}}"></div>

        var converter = new Showdown.converter();

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$observe('markitdown', function (value) {
                var markup = converter.makeHtml(value);
                element.html(markup);
            });
        }
    }
})();