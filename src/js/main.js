//IFFE
;(function() {
  var BASE_URL = "https://pacific-waters-7816.herokuapp.com/";

  angular.module('dyel-gui', ['ngRoute'], function($routeProvider) {
    $routeProvider
    .when('/', {
      redirectTo: '/login'
    })
    .when('/login',{
      templateUrl: 'partials/login.html',
      controller: function($http){
        var login = this;

        login.user = { };

        login.submit = function () {
          console.log(login.user);

          $http.post(BASE_URL + "/api/users/", login.user, {
            Headers: {
              Authorization: "Basic " + btoa(login.user.username + ":" + login.user.password)
            }
          }).then(function(){
            $http.defaults.headers.common.Authorization = "Basic " + btoa(login.user.username + ":" + login.user.password
          );
        })
      }
    },
    controllerAs: 'login'
  })
  .when('/signup', {
    templateUrl: 'partials/signup.html',
    controller: function(){
      var signup = this;

      signup.user = { };

      signup.signupUser = function () {

      }
    },
    controllerAs: 'signup'
  })
  .when('/home', {
    templateUrl: 'partials/home.html',
    controller: function($http) {
      $http.get(BASE_URL + 'api/activities/')
      .then(function(response) {
        var homeAll = response.data;
        console.log(homeAll);
      })
    },
    controllerAs: 'home'
  })
  .when('/newact', {
    templateUrl: 'partials/newact.html',
    controller: function($http, $location) {
        var newact = this;

        newact.act = { };

        newact.submit = function() {
          console.log("yay");
          $http.post(BASE_URL+"api/activities/", newact.act)
            .then(
              function() {
              $location.path('/home');
            }, function(){
              console.log("error");
            });
        }
    },
    controllerAs: 'newact'
  })
  .when('/stat', {
    templateUrl: 'partials/stat.html',
    controller: function() {

    },
    controllerAs: 'stat'
  })


})

//

})(); //End of IFFE
