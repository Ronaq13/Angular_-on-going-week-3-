'use strict';

angular.module('confusionApp')

.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;
    $scope.dishes = menuFactory.getDishes();

    $scope.select = function(setTab) {
        $scope.tab = setTab;

        if (setTab === 2) {
            $scope.filtText = "appetizer";
        } else if (setTab === 3) {
            $scope.filtText = "mains";
        } else if (setTab === 4) {
            $scope.filtText = "dessert";
        } else {
            $scope.filtText = "";
        }
    };

    $scope.isSelected = function(checkTab) {
        return ($scope.tab === checkTab);
    };

    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };
}])

.controller('ContactController', ['$scope', function($scope) {

    $scope.feedback = { mychannel: "", firstName: "", lastName: "", agree: false, email: "" };

    var channels = [{ value: "tel", label: "Tel." }, { value: "Email", label: "Email" }];

    $scope.channels = channels;
    $scope.invalidChannelSelection = false;

}])

.controller('FeedbackController', ['$scope', function($scope) {

    $scope.sendFeedback = function() {

        console.log($scope.feedback);

        if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
            $scope.invalidChannelSelection = true;
            console.log('incorrect');
        } else {
            $scope.invalidChannelSelection = false;
            $scope.feedback = { mychannel: "", firstName: "", lastName: "", agree: false, email: "" };
            $scope.feedback.mychannel = "";
            $scope.feedbackForm.$setPristine();
            console.log($scope.feedback);
        }
    };
}])

.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
    var dish = menuFactory.getDish(parseInt($stateParams.id, 10));
    $scope.dish = dish;
}])

.controller('DishCommentController', ['$scope', function($scope) {

        $scope.commentFeedback = {
            rating: 5,
            comment: "",
            author: "",
            date: 0
        };

        $scope.submitComment = function() {
            $scope.commentFeedback.date = new Date().toISOString();
            $scope.dish.comments.push($scope.commentFeedback);
            $scope.commentFeedback = {
                rating: 5,
                comment: "",
                author: "",
                date: 0
            };
            $scope.commentForm.$setPristine();
        };
    }])
    // implement the IndexController and About Controller here
    .controller('AboutController', ['$scope', '$stateParams', 'corporateFactory', function($scope, $stateParams, corporateFactory) {
        var leader = corporateFactory.getLeaders();
        $scope.leader = leader;
    }])

.controller('IndexController', ['$scope', '$stateParams', 'menuFactory', 'corporateFactory', function($scope, $stateParams, corporateFactory) {
    // featured dish
    var featuredDish = menuFactory.getDish(0);
    $scope.featuredDish = featuredDish;
    //promotion
    var promotion = menuFactory.getPromotion(0);
    $scope.promotion = promotion;
    //Executive chef
    var exChef = corporateFactory.getLeader(3);
    $scope.exChef = exChef;
}])

;