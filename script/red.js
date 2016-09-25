/**
 * Created by My on 2016/9/23.
 */

var app = angular.module('redApp',[])
    .controller('redCtrl', function ($scope, $http ) {
        $scope.getUrl = function () {
            var url = location.search;
            var urlUnm =  url.indexOf('=');
            var urlData =  url.substring(urlUnm+1);
            //console.log(urlUnm);
            //console.log(urlData);
            $scope.urlstart = urlData;
            return urlData;
        };

        $http.get('../'+ 'data/' +  $scope.getUrl() + ".json").success(function (data) {
            // console.log(data);
            $scope.redarr = data.data.goods;
            $scope.redarr1 = data.data.special;
            console.log($scope.redarr[0].goods_thumb);
            //console.log($scope.redarr1)
            $scope.pircre = function () {
                $scope.redar =  data.data.goods.sort(function ( a, b ) {
                    return a.shop_price - b.shop_price;

                })
            }
            $scope.moods = function () {
                $scope.redar =  data.data.goods.sort(function ( a, b ) {
                    return a.is_sale - b.is_sale;

                })
            }
        })
        

    })



