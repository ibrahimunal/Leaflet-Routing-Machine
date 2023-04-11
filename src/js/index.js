

var map = L.map('map').setView([35.3949, 36.1240], 8);


// var carIcon = L.icon({
//     iconUrl: './src/car2.png',
//     iconSize: [70,50]
// })
L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
    maxZoom: 18,
	attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([57.74, 11.94]).addTo(map);

map.on('click',function(e){

    var secondMarker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);

    L.Routing.control({
    waypoints: [
      L.latLng(57.74, 11.94),
      L.latLng(e.latlng.lat, e.latlng.lng)
    ]
  }).on('routesfound',function(e){
    e.routes[0].coordinates.forEach(function(coord,index){
        setTimeout(()=>{
            marker.setLatLng([coord.lat,coord.lng])
        }, 1000*index)
    })
  }).addTo(map);
})

