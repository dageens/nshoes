
var slideimages=new Array()
var slidelinks=new Array()
function slideshowimages(){
for (i=0;i<slideshowimages.arguments.length;i++){
slideimages[i]=new Image()
slideimages[i].src=slideshowimages.arguments[i]
}
}


function gotoshow(){
if (!window.winslide||winslide.closed)
winslide=window.open(slidelinks[i])
else
winslide.location=slidelinks[i]
winslide.focus()
}



/*script for google maps*/
var myCenter=new google.maps.LatLng(53.3496447,-6.2610655);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:15,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });
  /*animation of jumping needle*/
marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });
  /*finish code for animation of jumping needle*/
  /*creates marker*/
marker.setMap(map);
/*name in window for shoe shop*/
var infowindow = new google.maps.InfoWindow({
  content:"Noolans Shoe shop!"
  });
infowindow.open(map,marker);
}
/*finish code for information of Noolns shop*/
google.maps.event.addDomListener(window, 'load', initialize);