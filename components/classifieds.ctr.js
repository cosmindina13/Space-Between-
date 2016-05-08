(function () {
    "use strict"; 
    
   angular
        .module('CoolList', ['ngMaterial','ngAnimate', 'ngMdIcons', 'ui.router'])
        .config( function($stateProvider, $urlRouterProvider) { 
        'use strict';

    }) 

        // Main Controller
        .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog, $sce) {    
            classifiedsFactory.getClassifieds().then(function(classifieds) {
                $scope.space_between = classifieds.data;  //display data fron the JSON File
                $scope.trustAsHtml = $sce.trustAsHtml;
             
            });  // ENd Retrive Data Function
    }); // end of controllers - scopes 

}) ();  //end of everithing

