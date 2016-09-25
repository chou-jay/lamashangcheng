var app = angular.module('myGg',[])
    .controller('myGurl',function($scope,$http){
        $http.get('../data/Japan.json').success(function (res) {
            $scope.resadd= res.data;
            console.log($scope.resadd);
            $scope.goods = res.data.goods;
         })

    })