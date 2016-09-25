/**
 * Created by My on 2016/9/23.
 */

var app = angular.module('detileApp',[])
    .controller('detileCtrl', function ($scope, $http ) {

        $scope.url = location.search;
        console.log($scope.url);
        var urlthird =  $scope.url.split("?");
        console.log('aa');
        console.log(urlthird)
        // if(urlthird[1] == "red" )
        $http.get('../'+ 'data/' +  urlthird[1] + ".json").success(function (data) {
            // console.log(data);
            $scope.redarr = data.data.goods;
            $scope.redarr1 = data.data.special;





            for(var i = 0;i<data.data.goods.length;i++){

                if(urlthird[2] == data.data.goods[i].goods_id){
                    //console.log(data.data.goods[i].goods_id);
                    var begin = i;


                }
            }
            $scope.thirdArr = data.data.goods[begin];

        })
        $scope.count = 1;
        $scope.show =false;
        $scope.buy = function () {
            $scope.show= true;

        }
        $scope.buycar =function () {
            location.href = '../html/address.html';
            var dataObj = {};
            dataObj.count = $scope.count;
            dataObj.price =   $scope.thirdArr.shop_price;
            dataObj.goods_thumb =   $scope.thirdArr.goods_thumb;
            dataObj.goods_name =   $scope.thirdArr.goods_name;

            console.log(dataObj);
           var stringObj =  JSON.stringify(dataObj);
            localStorage.setItem('goods',stringObj);
            //保存数据


        }
        $scope.close = function () {
            $scope.show= false;
        }
        $scope.add = function () {
            if($scope.count==0){
                return
            }
            $scope.count += 1;

        }

        $scope.jian=function () {
            if($scope.count==0){
                return
            }
            $scope.count -= 1;

        }

    })
