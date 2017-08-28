angular
  .module("bobaApp")
  .controller("serverController", function ($scope, $state, $stateParams, serverService) {

    serverService.getServers(function(response) {
      $scope.servers = response;
      console.log($scope.servers);

      if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
        $scope.submitButton = true;
        $scope.saveButton = false;
        $scope.heading = "Create An Employee Account";
        serverService.getServerById($stateParams.id, function(server) {
          $scope.server = server;
        })
      }
      else {
        $scope.submitButton = false;
        $scope.saveButton = true;
        $scope.heading = "Update Your Information";
        serverService.getServerById($stateParams.id, function(server) {
          $scope.server = server;
        })
      }
    })

    $scope.addServer = function () {
      serverService.addServer($scope.server);
      console.log($scope.server);
      console.log($scope.servers);
    }

    $scope.saveServer = function () {
      serverService.updateServer($scope.server);
    }
    
    $scope.deleteServer = function() {
      serverService.deleteServer($scope.server);
      console.log($scope.servers);
      alert("Your account has been deleted!");
    }

  })