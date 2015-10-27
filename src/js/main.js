//IFFE
;(function() {
  angular.module('dyel-gui', ['ngRoute'], function($routeProvider) {
    $routeProvider
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
        controller: function() {

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
