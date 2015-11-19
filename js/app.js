// name our angular app
angular.module('rioApp', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
})

.controller('mainController', function($http) {

	// bind this to vm (view-model)
  var vm = this;

  // define variables and objects on this
  // this lets them be available to our views

	// define a basic variable
	vm.message = 'Os commiters que fazem esse projeto acontecer! Entre pra essa lista participando você também...';

	// define a list of items
	vm.contributors = $http.get('https://api.github.com/repos/nodeschool/rio/contributors')
    .success(function(data) {
  		// bind the contributors that come back to vm.contributors
  		vm.contributors = data;
  	});
});
