var app = angular.module("TodoApp", [])

app.controller("TodoController", function($scope) {
    $scope.title = "Welcome to your Todo App"
});

app.controller("PastaCtrl", function($scope) {
    $scope.pasta = "I love Carbs";
    $scope.foods="";
})
