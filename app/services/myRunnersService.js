(function () {
    'use strict';

    angular.module('marathonMajorsApp').factory('MyRunnersService', ['DSCacheFactory', MyRunnersService]);

    function MyRunnersService(DSCacheFactory) {
        var self = this;

        self.myRunnersCache = DSCacheFactory.get("myRunnersCache");


        function followRunner(runner) {
            self.myRunnersCache.put(runner.id, runner);
        }

        function unfollowRunner(runnerId) {
            self.myRunnersCache.remove(runnerId.toString());
        }

        function getFollowedRunners() {
            var runners = [],
                keys = self.myRunnersCache.keys();

            for (var i = 0; i < keys.length; i++) {
                var runner = self.myRunnersCache.get(keys[i]);
                runners.push(runner);
            };

            return runners;
        }

        function isFollowingRunner(runnerId) {
            var runner = self.myRunnersCache.get(runnerId);
            return runner;
        }

        return {
            followRunner: followRunner,
            unfollowRunner: unfollowRunner,
            getFollowedRunners: getFollowedRunners,
            isFollowingRunner: isFollowingRunner
        };
    }
})();