angular.module('News', ['ui.router'])
    .factory('postFactory', [function() {
        var o = {
            posts: []
        };
        return o;
    }])
    .controller('MainCtrl', ['$scope', 'postFactory',
        function($scope, postFactory) {
            $scope.posts = postFactory.posts;
            $scope.test = "hello World";
            $scope.addPost = function() {
                console.log($scope.formContent);
                $scope.posts.push({
                    title: $scope.formContent,
                    upvotes: 0
                })
                $scope.formContent = "";
            }
            $scope.incrementUpvotes = function(post) {
                post.upvotes++;
            };
        }
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl'
                });
            $urlRouterProvider.otherwise('home');
        }
    ])
