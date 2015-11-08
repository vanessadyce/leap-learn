
var myApp = angular.module('myApp', [
	'ngRoute',
	'ui.bootstrap',
	'firebase'
	]).

	config(['$routeProvider', function($routeProvider){
		$routeProvider

		//route for home page
		.when('/home', {
			templateUrl : 'home/home.html',
			controller : 'mainCtrl'
		})

		//route for registration
		.when('/register', {
			templateUrl : 'register/register.html',
			controller: 'registerCtrl'
		})

		//route for profile
		.when('/profile', {
			templateUrl : 'profile/profile.html',
			controller: 'profileCtrl'
		})

		//route for game
		.when('/game', {
			templateUrl : 'game/game.html',
			controller : 'gameCtrl'
		})

	}]);


// create the controller and inject Angular's $scope
    myApp.controller('mainCtrl', function($scope) {
    	console.log('home controller is being called');
        $scope.message = 'home page controller!';


    });

// create controller for registration
	myApp.controller('registerCtrl', function($scope) {
    	console.log('register controller is being called');
        $scope.message = 'registration controller!';
    });

    // create controller for registration
	myApp.controller('profileCtrl', function($scope) {
    	console.log('profile controller is being called');
        $scope.message = 'profile controller!';
    });

    // create controller for registration
	myApp.controller('gameCtrl', function($scope, $http, $firebaseObject) {

    	var ref = new Firebase("https://leap-learn.firebaseio.com");
    	var question = $firebaseObject(ref.child('question'));
    	question.$bindTo($scope, 'question');

    	var choice1 = $firebaseObject(ref.child('choice1'));
    	choice1.$bindTo($scope, 'choice1');

    	var choice2 = $firebaseObject(ref.child('choice2'));
    	choice2.$bindTo($scope, 'choice2');

    	var choice3 = $firebaseObject(ref.child('choice3'));
    	choice3.$bindTo($scope, 'choice3');

    	var choice4 = $firebaseObject(ref.child('choice4'));
    	choice4.$bindTo($scope, 'choice4');

        $scope.message = 'game controller!';
        $http({
  			method: 'GET',
  			//url: 'localhost:3000/leap'
  			url: '/'
		}).then(function successCallback(response) {
    	// this callback will be called asynchronously
   		// when the response is available
  		}, function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
  		});
    });