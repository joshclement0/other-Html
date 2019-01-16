angular.module('namesToDo',[])
    .controller('MainCtrl',['$scope',
    function($scope){
        $scope.posts=[];
        $scope.test ="hello world"
        $scope.addName=function(){
            $scope.posts.push({
                title:$scope.formContent,
                upvotes:0 
            })
        }
    }])