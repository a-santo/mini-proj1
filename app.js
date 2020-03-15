var app = angular.module('mini-proj1', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'assets/paginas/inicio.html',
            controller  : 'homeController'
        })

        .when('/sobre', {
            templateUrl : 'assets/paginas/quem_sou.html',
            controller  : 'sobreController'
        })

        .when('/ocupacao', {
            templateUrl : 'assets/paginas/que_faco.html',
            controller  : 'ocupacaoController'
        })

        .when('/hobbies', {
            templateUrl : 'assets/paginas/hobbies.html',
            controller  : 'hobbiesController'
        })

        .when('/404', {
            templateUrl : 'assets/paginas/404.html',
            controller  : 'errorController'
        })

        .otherwise({redirectTo: '/404'});
});

app.controller('homeController', function($scope) {
    $scope.message = 'MW - UAb - Tarefa 2.2: Mini-Projeto: Single Page Application (SPA) - André Santo';
});

app.controller('sobreController', function($scope) {
    $scope.message = 'Quem Sou Eu?';
    $scope.avatar = './assets/img/avatar.png';
});

app.controller('ocupacaoController', function($scope) {
    $scope.message = 'O que faço?';
    $scope.trabalho = './assets/img/trab.jpeg';
});

app.controller('hobbiesController', function($scope) {
    $scope.message = 'Hobbies';
    $scope.cinema = './assets/img/cinema.jpeg';
    $scope.futebol = './assets/img/futebol.jpeg';
    $scope.musica = './assets/img/musica.jpeg';
    $scope.tecnologia = './assets/img/tecnologia.jpeg';
});

app.controller('errorController', function($scope) {
    $scope.message = '404 - Página Não Encontrada!';
    $scope.imagem = './assets/img/404.gif';
});