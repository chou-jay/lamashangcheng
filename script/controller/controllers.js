
app.controller('sellCtrl',function($scope,$http,$interval){
    //轮播图
    $http.get('./data/mySwp.json').success(function(res){
        $scope.arr1 = res.list;
        $scope.datasetData =res.list;

        //倒计时
        $scope.time=0-6*60*60*1000;
        $one_minute = $interval(function(){
            $scope.time  -= 1000;
        },1000);

    })

    $http.get('./data/swiper.json').success(function(res){
        $scope.arr2 = res.data.list;
    })
    //点击搜索 进入二级页面
    $scope.myClick = function(){
        $('.sell_in').show();
    }

    //点击小于号 显示第一页面
    $scope.xiaoyu = function(){
        $('.sell_in').hide();
    }


    //初始点搜索显示的内容
    $http.get('./data/' +'sell_in' +'.json').success(function(res){
        $scope.arrIn = res.data.list;

    })
    //点击分类 换内容
    $scope.click_sort = function(src){

        $http.get('./data/' +src +'.json').success(function(res){
            $scope.arrIn = res.data.list;

        })
    }

    //点击分类 颜色变换
    $scope.sellSort = [true,false];
    $scope.changeColor = function(index){
        for (var i = 0; i < $scope.sellSort.length; i++) {
            $scope.sellSort[i] = false;
        }
        $scope.sellSort[index] = true;
    }







})
    .directive("slideFollow",function($timeout){
        return {
            restrict : 'E',
            replace : true,
            scope : {
                id : "@",
                datasetData : "="
            },
            template : "<li ng-repeat = 'data in datasetData'>{{data.spec_name}}</li>",
            link : function(scope,elem,attrs) {
                $timeout(function(){
                    var className = $("." + $(elem).parent()[0].className);
                    var i = 0,sh;
                    var liLength = className.children("li").length;
                    var liHeight = className.children("li").height() + parseInt(className.children("li").css('border-bottom-width'));
                    className.html(className.html() + className.html());
                    // 开启定时器
                    sh = setInterval(slide,2000);
                    function slide(){
                        if (parseInt(className.css("margin-top")) > (-liLength * liHeight)) {
                            i++;
                            className.animate({
                                marginTop : -liHeight * i + "px"
                            },"slow");
                        } else {
                            i = 0;
                            className.css("margin-top","0px");
                        }
                    }
                    // 清除定时器
                    className.hover(function(){
                        clearInterval(sh);
                    },function(){
                        clearInterval(sh);
                        sh = setInterval(slide,4000);
                    })
                },0)
            }
        }

})


.controller('mallCtrl',function($scope,$http){
    $scope.head = "商城";
    $http.get('./data/swiper.json').success(function (res) {
        $scope.arr = res.data.list;



    })
})


.controller('cardCtrl',function($scope){
    $scope.changAll = function () {
        $scope.sellall = !$scope.sellall;
    }
    $scope.sellall =true;
    $scope.init = function () {
        var good =  localStorage.getItem('goods');
        var addrs = localStorage.getItem('address');

        $scope.address =   JSON.parse(addrs);
        $scope.goods1 =   JSON.parse(good);

        console.log($scope.goods1);
        console.log($scope.address );

    }
    $scope.init();

})

//第四个控制器
.controller('mineCtrl',function($scope){

        $scope.init = function () {
            var goods =  localStorage.getItem('goods');

            console.log(goods);

        }
         $scope.init();
    console.log('asd');


});