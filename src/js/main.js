//IFFE
;(function() {
  var baseUrl = "https://pacific-waters-7816.herokuapp.com/";

  angular.module('dyel-gui', ['ngRoute'], function($routeProvider) {
    $routeProvider
    .when('/', {
      redirectTo: '/login'
    })
    .when('/login',{
      templateUrl: 'partials/login.html',
      controller: function(baseUrl, $http){
        var login = this;

        login.user = { };

        login.loginUser = function () {
          // $http.post(baseUrl + "/api/users/", {
          $http.post("http://requestb.in/1hqrpmg1", {
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
