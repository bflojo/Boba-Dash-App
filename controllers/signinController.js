angular
  .module("bobaApp")
  .controller("signinController", function($scope, $rootScope, $state, $stateParams, serverService, customerService) {

    customerService.getCustomers(function (response) {
      $scope.customers = response;
      console.log($scope.customers);
    })

    serverService.getServers(function (response) {
      $scope.servers = response;
      console.log($scope.servers);
    })
    
    $scope.login = function() {
      customerService.getCustomerUserPass($scope.userName, $scope.pass, function(customer) {
        $scope.customer = customer;
        console.log($scope.customer);
      });

      serverService.getServerUserPass($scope.userName,$scope.pass,function(server) {
        $scope.server = server;
        console.log($scope.server);
      })
  
      if ($scope.customer != undefined) {
        $state.go("showCustomer",{id: $scope.customer.id});
      } else if ($scope.server != undefined) {
        $state.go("serverProfile",{id: $scope.server.id});
      } else {
        alert("Username or Password is incorrect! Please try again!")
      }
      
    }
    
  })