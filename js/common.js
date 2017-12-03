// domain
var API_DOMAIN = "http://localhost:8085/";
var ajax = function	(url, param, callback) {
	$.ajax({
        url: API_DOMAIN + url,
        type: 'POST',
        headers:{'Accept': 'application/json','token': window.sessionStorage.getItem('token')},
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(param),
        success: callback,
        error: function(xhr) {
            console.log('ajax request fail');
        }
    })
};