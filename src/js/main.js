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
      .config(['$httpProvider', function($httpProvider){
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHEaderName = 'X-CSRFToken';
      }])
      .factory ('api', function($resource){
        function add_auth_header(data, headerGetter) {
          var headers = headerGetter();
          headers['Authorization'] = ('Basic' + btoa(data.username + ':' + data.password));
        }
        return {
          auth: $resource('api/auth\\/', {}, {
            loin: {method: 'POST', transformRequest: add_auth_header},
            logout: {method: 'DELETE'}
          }),
          user: $resource('/api/user\\/', {}, {
            create: {method: 'POST'}
          })
        };
      })
      .contoller ('authController', function ($scope, api){
        $sope.getCredentials = function (){
          return {username: $scope.username, password: $scope.password};
        };
        $scope.login = function (){
          api.auth.login($scope.getCredentials())
            .$promise.
              then (function (data){

              })
        }
      })
























})(); //End of IFFE
