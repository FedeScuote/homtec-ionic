angular.module('starter.services', ['ngResource'])

.factory('Category', function($resource){
	return $resource('http://homtec-django-sta.heroku.com/category/:categoryid');
})

.factory('LoginService', function($resource) {
    return {
        loginUser: function(name, pw) {

        }
    }
});

