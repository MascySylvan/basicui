function sendPost(url, headers, data, cbFunc, cbVars) {
	console.log('Start sendPost');
	$.ajax({
		url: url,
		headers: headers,
	    method: 'POST',
	    dataType: 'json',
	    data: data,
	    success: function(xhr){
	      cbFunc(xhr, cbVars);
	    },
	    error: function(xhr){
	      cbFunc(xhr, cbVars);
	    }
	});
}

function sendGet(url, headers, cbFunc, cbVars) {
	console.log('Start sendGet');
	$.ajax({
		url: url,
		headers: headers,
	    method: 'GET',
	    dataType: 'json',
	    success: function(xhr){
	      cbFunc(xhr, cbVars);
	    },
	    error: function(xhr){
	      cbFunc(xhr, cbVars);
	    }
	});
}

function showAlert(id, type, content) {
	$('#' + id).hide();
	var element = document.getElementById(id);
	
	var alertType = 'alert alert-info';
	
	if (type == 'S') {
		alertType = 'alert alert-success';
	} else if (type == 'W') {
		alertType = 'alert alert-warning';
	} else if (type == 'D') {
		alertType = 'alert alert-danger';
	}
	
	$('#' + id).text(content);
	element.setAttribute('class', alertType);
	
	$('#' + id).show();
	
	setTimeout(function() {
		hideAlert(id);
	}, 6000)
}

function hideAlert(id) {
	$('#' + id).hide();
}

function getAttrib(attrib) {
	return attrib.replaceAll('"', '');
}