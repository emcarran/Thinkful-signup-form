var app = angular.module('myApp', []);
app.directive('optIn', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/partials/optin-template.html',
        transclude: true
    }
});

app.directive('myFooter', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/partials/footer.html'
    }
});
