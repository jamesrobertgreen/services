app.service('demoServices', function($http, APP_CONFIG) {
  return {
    get: function() {
      return $http({
        method: 'GET',
        url: APP_CONFIG.DATA_URL
      });
    }
  };
});