app.controller('serviceController', function ($scope, $http, demoServices, APP_CONFIG) {
    $scope.dataURL = APP_CONFIG.DATA_URL;
    $scope.httpRequest = function () {
        $http.get($scope.dataURL).then(function (result) {
            alert('HTTP result = ' + JSON.stringify(result));
        }, function (error) {
            alert("Error - " + error);
        });
    };
    $scope.callServiceAnon = function () {
        demoServices.get().then(function (result) {
            alert("Anonymous function returned:" + JSON.stringify(result));
        }, function (error) {
            alert("Error - " + error);
        });
    };
    $scope.callServiceNamed = function () {
        var success = function (result) {
            alert("Named function returned:" + JSON.stringify(result));
        };
        var failure = function (error) {
            alert("Error - " + error);
        };
        demoServices.get().then(success, failure);
    };
});