function click(){
	var map;
	
	//現在地の座標
	const lat1 = parseFloat(document.getElementById('lat1').value);
	const lng1 = parseFloat(document.getElementById('lng1').value);
	const now = {lat: lat1, lng: lng1};
	//地図の中心を指定
	const option = {zoom: 15, scaleControl: true, center: now};
	map = new google.maps.Map(document.getElementById('map'), option);
	
	//目的地の座標
	const lat2 = parseFloat(document.getElementById('lat2').value);
	const lng2 = parseFloat(document.getElementById('lng2').value);
	const will = {lat: lat2, lng: lng2};
	
	//現在地と目的地にマーカーを接地
	var mk1 = new google.maps.Marker({position: now, map: map});
	var mk2 = new google.maps.Marker({position: will, map: map});
	
	//地図上に2点間の距離を円表記(m)
	const R = Math.PI / 180;
	const radius = 6371 * 1000 *Math.acos(
		Math.cos(lat1 * R) *
		Math.cos(lat2 * R) *
		Math.cos((lng2 - lng1) * R) +
		Math.sin(lat1 * R) *
		Math.sin(lat2 * R)
	);
	const mapCircle = new google.maps.Cicle({
		map,
		center: now,
		radius: radius
	});
}