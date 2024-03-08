var lat1;
var lng1;
var lat2;
var lng2;

function getLatLng(){
	//現在地を座標化
    var address = $('#address1').val();
    $.ajax({
        url:'https://msearch.gsi.go.jp/address-search/AddressSearch?q=' + address, async : false,
        }).done(function(res, textStatus, jqXHR) {
        if( res.length ){
            var lnglat = res[0].geometry.coordinates;
            lng1 = lnglat[0];
            lat1 = lnglat[1];
        }
//        console.log(lat1)が表示される
    });
//    consolelog(lat1)が表示されない＝ajaxが関係している？　→async: falseで解決

	//目的地を座標化
    var address = $('#address2').val();
    $.ajax({
        url:'https://msearch.gsi.go.jp/address-search/AddressSearch?q=' + address, async : false,
        }).done(function(res, textStatus, jqXHR) {
        if( res.length ){
            var lnglat = res[0].geometry.coordinates;
            lng2 = lnglat[0];
            lat2 = lnglat[1];
        }
    });
    showmap();
}

function showmap() {
	var map;
	
	// 現在地、目的地の指定
	const genzai = {lat: lat1, lng: lng1 };
	const options = { zoom: 10, scaleControl: true, center: genzai };
	map = new google.maps.Map(
		document.getElementById('map'), options);
	
	const mokuteki = {lat: lat2, lng: lng2 };	
	
	//現在地と目的地にマーカー設置
	var mk1 = new google.maps.Marker({ position: genzai, map: map });
	var mk2 = new google.maps.Marker({ position: mokuteki, map: map });
	
	//地図上に２点間の距離を半径とした円の表示
	const R = Math.PI / 180;
	const radius = 6371 * 1000 * Math.acos(Math.cos(lat1 * R) * Math.cos(lat2 * R) * Math.cos((lng2 - lng1) * R) + Math.sin(lat1 * R) * Math.sin(lat2 * R));
	const mapCircle = new google.maps.Circle({
		map,
		center: genzai,
		radius: radius 
	});
}

function zahyou(){
	lat1 = parseFloat(document.getElementById('lat1').value);
	lng1 = parseFloat(document.getElementById('lng1').value);
	
	lat2 = parseFloat(document.getElementById('lat2').value);
	lng2 = parseFloat(document.getElementById('lng2').value);
	
	showmap();
}