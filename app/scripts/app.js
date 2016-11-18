'use strict';
angular.module('confusionApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'IndexController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })
            // route for the aboutus page
            .state('app.aboutus', { // aboutus is nested inside app
                url: 'aboutus',
                views: {
                    'content@': { // because we are changing only content of 'app' and header and footer will remain same
                        templateUrl: 'views/aboutus.html',
                        controller: 'AboutController'
                    }
                }
            })
            // route for the contactus page
            .state('app.contactus', {
                url: 'contactus',
                views: {
                    'content@': {
                        templateUrl: 'views/contactus.html',
                        controller: 'ContactController'
                    }
                }
            })

        // route for the menu page
        .state('app.menu', {
            url: 'menu',
            views: {
                'content@': {
                    templateUrl: 'views/menu.html',
                    controller: 'MenuController'
                }
            }
        })

        // route for the dishdetail page
        .state('app.dishdetails', {
            url: 'menu/:id',
            views: {
                'content@': {
                    templateUrl: 'views/dishdetail.html',
                    controller: 'DishDetailController'
                }
            }
        });
        $urlRouterProvider.otherwise('/');
    })


;