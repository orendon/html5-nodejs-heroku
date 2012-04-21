
window.onload = function() {
	if(!navigator.geolocation) {
		var message = "your browser dont support html5 geolocation";
		document.getElementbyId("message").innerHTML = message;
		alert(message);
	}
};

function getLocation() {
	navigator.geolocation.getCurrentPosition(
		showPosition, showError,
		{enableHighAccuracy: true, timeout:9000});
}

function showPosition(position) {
	var latitude = position.coords.latitude,
		longitude = position.coords.longitude;
	console.log(latitude + ' - ' + longitude);

	//googlemap marker from: https://google-developers.appspot.com/maps/documentation/javascript/examples/marker-simple?hl=es
	var coords = new google.maps.LatLng(latitude, longitude);
	
    var config = {
      zoom: 6,
      center: coords,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("html5_map"), config);
    
    var marker = new google.maps.Marker({
        position: coords, 
        map: map,
        title:"You are here!"
    });
}

function showError(error) {
	console.log(error.message);
}
