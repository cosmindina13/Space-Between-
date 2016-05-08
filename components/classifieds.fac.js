(function () {
    "use strict";
    
    angular
        .module("CoolList")
        .factory("classifiedsFactory", function($http) {
            
            function getClassified() {
                return $http.get('data/space_between.json');
            }
            
            return {
                getClassifieds: getClassified   
            }
    });
}) ();