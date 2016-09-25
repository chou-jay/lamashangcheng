var app= angular.module('myApp',['ngRoute','lazyload','ksSwiper','angularCSS'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'./views/sell.html',
                controller:'sellCtrl'

            })
            .when('/mall',{
                templateUrl:'./views/mall.html',
                controller:'mallCtrl',
                css:'css/mall.css'
            })
            .when('/card',{
                templateUrl:'./views/card.html',
                controller:'cardCtrl',
                css:'css/card.css'
            })
            .when('/mine',{
                templateUrl:'./views/mine.html',
                controller:'mineCtrl',
                'css':'css/mine.css'
            })
            .otherwise({redirectTo:'/'});
    }]);




app.controller('indexmyCrel', function ($scope) {
    //$scope.data = {};
    //$scope.data.show = true;//初始化scope下的变量

    $scope.list = [true,false,false,false];
    $scope.changeColer = function (index) {

        for(var i = 0 ; i < $scope.list.length ; i++){
           // console.log($scope.list);
            $scope.list[i] = false;
        }
        $scope.list[index] = true;
    }

})