(function () {
    'use strict';

    angular.module('marathonMajorsApp').factory('marathonApi', ['$http', '$q', '$ionicLoading', marathonApi]);

    function marathonApi($http, $q, $ionicLoading) {
        var self = this;
        //var categories = JSON.parse('[{"id":1,"name":"Marathon Majors Male","isDirty":false,"isArchived":false},{"id":2,"name":"Marathon Majors Female","isDirty":false,"isArchived":false}]');
        //var categoryData = JSON.parse('{"category":{"name":"Marathon Majors Male","id":1},"runners":[{"divisionName":"Male Champions","divisionRunners":[{"id":100, "categoryId":1, "name":"TSEGAYE KEBEDE","nation":"Ethiopia"},{"id":101, "categoryId":1,"name":"WILSON KIPSANG","nation":"Kenya"},{"id":102, "categoryId":1,"name":"DENNIS KIMETTO","nation":"Kenya"}]},{"divisionName":"Female Champions","divisionRunners":[{"id":200, "categoryId":2,"name":"RITA JEPTOO","nation":"Kenya"},{"id":201, "categoryId":2,"name":"EDNA KIPLAGAT","nation":"Kenya"},{"id":202,"categoryId":2,"name":"PRISCAH JEPTOO","nation":"Kenya"}]}],"locations":[{"id":1015,"name":"BMW BERLIN-MARATHON","locationUrl":"https://www.google.de/maps/place/Berlin+Brandenburger+Tor/@52.516506,13.381815,17z/data=!3m1!4b1!4m2!3m1!1s0x47a851c428a92a43:0xf7b63840df604b67?hl=de","teaserVideo":"//player.vimeo.com/video/94964288","latitude":52.514745,"longitude":13.405380},{"id":1016,"name":"BOSTON MARATHON","locationUrl":"https://www.google.de/maps/place/Big+Apple+Circus/@42.360181,-71.058956,16z/data=!4m2!3m1!1s0x89e37085a33a60f3:0xd9cbd5ba06d0476c?hl=de","teaserVideo":"//player.vimeo.com/video/97804612","latitude":42.354604,"longitude":-71.057167},{"id":1017,"name":"TOKYO MARATHON","locationUrl":"https://www.google.de/maps/place/Taito,+Tokyo,+Japan/@35.673343,139.710388,11z/data=!4m2!3m1!1s0x60188e9636a82eff:0x15470eba712647c0?hl=de","teaserVideo":"//player.vimeo.com/video/85147347","latitude":35.680133,"longitude":139.772186}],"rankings":[{"divisionName":"Male Champions","divisionStandings":[{"runnersId":100,"runnersName":"TSEGAYE KEBEDE","imageUrl":"/app/images/tsegayekebede.jpg","overallPlace":1,"personalBest":"02:04:38 (Chicago, 2012)","Recent1stPlace":"21 Apr 13, Virgin London Marathon, 2:06:04","Recent2ndPlace":"03 Nov 13, ING New York City Marathon, 2:09:16","Recent3rdPlace":"13 Apr 14, Virgin Money London Marathon, 2:06:30"},{"runnersId":101,"runnersName":"WILSON KIPSANG","imageUrl":"/app/images/wilsonkipsang.jpg","overallPlace":2,"personalBest":"02:03:23 (Berlin, 2013)","Recent1stPlace":"13 Apr 14, Virgin Money London Marathon, 2:04:29","Recent2ndPlace":"n/a","Recent3rdPlace":"12 Aug 12, Olympic Games Marathon, 2:09:37"},{"runnersId":102,"runnersName":"DENNIS KIMETTO","imageUrl":"/app/images/denniskimetto.jpg","overallPlace":3,"personalBest":"02:03:45 (Chicago, 2013)","Recent1stPlace":"13 Oct 13, Bank of America Chicago Marathon, 2:03:45","Recent2ndPlace":"30 Sep 12, BMW Berlin Marathon, 2:04:16","Recent3rdPlace":"n/a"}]},{"divisionName":"Female Champions","divisionStandings":[{"runnersId":200,"runnersName":"RITA JEPTOO","imageUrl":"/app/images/ritajeptoo.jpg","overallPlace":1,"personalBest":"02:18:57 (Boston, 2014)","Recent1stPlace":"21 Apr 14, Boston Marathon, 2:18:57","Recent2ndPlace":"07 Oct 12, Bank of America Chicago Marathon, 2:22:04","Recent3rdPlace":"21 Apr 08, Boston Marathon, 2:26:34"},{"runnersId":201,"runnersName":"EDNA KIPLAGAT","imageUrl":"/app/images/ednakiplagat.jpg","overallPlace":2,"personalBest":"02:19:05 (London, 2012)","Recent1stPlace":"13 Apr 14, Virgin Money London Marathon, 2:20:21","Recent2ndPlace":"21 Apr 13, Virgin London Marathon, 2:21:32","Recent3rdPlace":"17 Apr 11, Virgin London Marathon, 2:20:46"},{"runnersId":202,"runnersName":"PRISCAH JEPTOO","imageUrl":"/app/images/priscahjeptoo.jpg","overallPlace":3,"personalBest":"02:20:14 (London, 2012)","Recent1stPlace":"03 Nov 13, ING New York City Marathon, 2:25:07","Recent2ndPlace":"05 Aug 12, Olympic Games Marathon, 2:23:12","Recent3rdPlace":"22 Apr 12, Virgin London Marathon, 2:20:14"}]}]}')

        var currentCategoryId;

        function getCategories() {
            //Todo: implement cache in local storage
            var deferred = $q.defer();
                $ionicLoading.show({ template: 'Grabbing Data from Firebase...' });
                $http.get("https://marathonmajapp.firebaseio.com/categories.json")
                    .success(function (data) {
                        $ionicLoading.hide();
                        deferred.resolve(data)
                    })
                    .error(function () {
                        $ionicLoading.hide();
                        deferred.reject();
                    });
            return deferred.promise;
        };

        function getCategoryData() {
            var deferred = $q.defer();

            $ionicLoading.show({ template: 'Fetching Data from Firebase...' });

            $http.get("https://marathonmajapp.firebaseio.com/categoryData.json")
                .success(function (data) {
                    $ionicLoading.hide();
                    deferred.resolve(data)
                })
                .error(function () {
                    $ionicLoading.hide();
                    deferred.reject();
                });
            return deferred.promise;
        };

        function setCategoryId(categoryId) {
            currentCategoryId = categoryId;
        };


        return {
            getCategories: getCategories,
            getCategoryData: getCategoryData,
            setCategoryId: setCategoryId
        };
    };
})();