angular.module("marathonMajorsApp", ["ionic", "angular-data.DSCacheFactory", "google-maps"])

.run(function ($ionicPlatform, DSCacheFactory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    DSCacheFactory("myRunnersCache", { storageMode: "localStorage" });
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
     abstract: true,
      url: "/home",
      templateUrl: "app/home/home.html"
    })
    .state('home.categories', {
      url: "/categories",
      views: {
          "tab-categories": {
              templateUrl: "app/home/categories.html"
          }
      }
    })
    .state('home.myrunners', {
      url: "/myrunners",
      views: {
          "tab-myrunners": {
              templateUrl: "app/home/myrunners.html"
          }
      }
    })
    .state('app', {
      abstract: true,
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    })
      .state('app.runners', {
          url: "/runners/",
          views: {
              "mainArea": {
                  templateUrl: "app/runners/runners.html"
              }
          }
      })
    .state('app.runner-details', {
        url: "/runners/:id",
        views: {
            "mainArea": {
                templateUrl: "app/runners/runner-details.html"
            }
        }
    })
     .state('app.race', {
         url: "/race/:id",
         views: {
             "mainArea": {
                 templateUrl: "app/race/race.html"
             }
         }
     })
    .state('app.rankings', {
        url: "/rankings",
        views: {
            "mainArea": {
                templateUrl: "app/rankings/rankings.html"
            }
        }
    })
      .state('app.locations', {
          url: "/locations",
          views: {
              "mainArea": {
                  templateUrl: "app/locations/locations.html"
              }
          }
      })
      .state('app.locations-map', {
          url: "/locations-map/:id",
          views: {
              "mainArea": {
                  templateUrl: "app/locations/locations-map.html"
              }
          }
      })
    .state('app.works', {
        url: "/howthisworks",
        views: {
            "mainArea": {
                templateUrl: "app/works/howthisworks.html"
            }
        }
    })
    ;
       // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('home/categories');
});