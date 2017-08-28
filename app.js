var app = angular.module("bobaApp", ['ngMap', "ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })

    .state("menu", {
      url: "/menu",
      templateUrl: "./views/menu.html",
      controller: "menuController"
    })

    .state("customer", {
      url: "/customer",
      templateUrl: "./views/customer.html",
      controller: "customerController"
    })

        .state("showCustomer", {
          url: "/customer/:id",
          templateUrl: "./views/customer.html",
          controller: "customerController"
        })

        .state("editCustomer", {
          url: "/customer/:id/edit",
          templateUrl: "./views/account.html",
          controller: "customerController"
        })

    .state("server", {
      url: "/server",
      templateUrl: "./views/server.html",
      controller: "serverController"
    })

        .state("serverProfile", {
          url: "/server/:id",
          templateUrl: "./views/server.html",
          controller: "serverController"
        })

        .state("editServer", {
          url: "/server/:id/edit",
          templateUrl: "./views/accountEmp.html",
          controller: "serverController"
        })

    .state("about", {
      url: "/about",
      templateUrl: "./views/about.html"
    })

    .state("cart", {
      url: "/cart",
      templateUrl: "./views/cart.html",
      controller: "menuController"
    })

    //Added by Jay for cutomer form page
    .state("account", {
      url: "/account",
      templateUrl: "./views/account.html",
      controller: "customerController"
    })

    // Added by Jay to new employee account page
    .state("accountEmp", {
      url: "/accountEmp",
      templateUrl: "./views/accountEmp.html",
      controller: "serverController"
    })

    .state("signin", {
      url: "/signin",
      templateUrl: "./views/signin.html",
      controller:"signinController"
    })

})