
//configure the paths of the images, plus corresponding target links
window.onload = initAll;
function initAll() {
      document.getElementById('sl').onclick = validate
   

slideshowimages("images/mainwebsite1.jpg","images/mainwebsite2.jpg","images/mainwebsite9.jpg", "images/mainwebsite13.jpg")


var slideshowspeed=2000


var whichimage=0
function slideit(){
if (!document.images)
return
document.images.slide.src=slideimages[whichimage].src

if (whichimage<slideimages.length-1)
whichimage++
else
whichimage=0
setTimeout("slideit()",slideshowspeed)
}
slideit()
}