(function () {
    'use strict';

    angular.module('marathonMajorsApp').controller('HowThisWorksController', ['marathonApi', HowThisWorksController]);

    function HowThisWorksController(marathonApi) {
        var vm = this;
        vm.mainContent = "####HOW THIS WORKS<br><br>The six annual road races in Tokyo, Boston, London, Berlin, Chicago and New York City, along with the Olympic Marathon and IAAF World Championships Marathon, serve as the Qualifying Races in the World Marathon Majors series. At the conclusion of each Qualifying Race, the top five male and female finishers are awarded points based on their finish place.<br><br>At the conclusion of each two-year series, a $1 million prize purse will be split equally between the top male and female point earners. The $1 million prize will be awarded annually, meaning that each two-year series will overlap. The inaugural series was 2006-2007 followed by 2007-2008, 2008-2009 and so on.<br><br>The total score for each athlete in a series will consist of points earned from a maximum of four Qualifying Races during that two-year cycle. To be eligible for the jackpot, an athlete must compete in a minimum of one Qualifying Race during each year of the series.";
    };
})();