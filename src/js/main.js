//IFFE
;(function() {
  angular.module('dyel-gui', ['ngRoute'], function($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/login'
      })
      .when('/login',{
        templateUrl: 'partials/login.html',
        controller: function(){
          var login = this;

          login.user = { };

          login.loginUser = function () {

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
          $http.get('https://pacific-waters-7816.herokuapp.com/api/activities/')
            .then(function(response) {
              var homeAll = response.data;
              console.log(homeAll);
            })
        },
        controllerAs: 'home'
      })
      .when('/newact', {
        templateUrl: 'partials/newact.html',
        controller: function() {

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
})(); //End of IFFE
