var $ = require('jquery');

module.exports = {
  get: function(url){
    return new Promise(function(success, error){
      $.ajax({
        url: url,
        type: 'GET',
        contentType: 'application/json',
        success: success,
        error: error
      });
    });
  },

  post: function(url, data){
    return new Promise(function(success, error){
      $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json'
        data: data,
        success: success,
        error: error
      });
    });
  };
}  