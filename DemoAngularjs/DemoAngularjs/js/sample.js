/// <reference path="angular.js" />
var myApp = angular
    .module("myApp", [])
    .filter("gender", function () {
        return function (gender) {
            switch (gender) {
                case "1":
                    return "Male";
                case "0":
                    return "Female";
                case "":
                    return "Unkown";
            }
        }
    })
          .controller("myController",function($scope){
        
            var employees = [
            {name:"Jame", gender:"1", DOB:"1989-08-08" },
            {name:"berg", gender:"1", DOB:"1989-08-08" },
            {name:"Cook", gender:"0", DOB:"1989-08-08" },
            { name: "better", gender: "0", DOB: "1989-08-08" },
            { name: "better", gender:"", DOB: "1989-08-08" },
            ];
            
            $scope.employees = employees;
            $scope.search = function (item) {
                if ($scope.searchText == undefined) {
                    return true;
                } else {
                    // will check whether the character is in the name column or gender column
                    if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                        || item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                        return true;
                    }
                }
                return false;
            }
            
                    

})