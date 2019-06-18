
function allowDrop(event) {
  event.preventDefault();
  
}

function drag(event) {
 
   event.dataTransfer.setData('id', event.target.id);
}


function drop(event) {
	
  event.preventDefault();
  var data = event.dataTransfer.getData('id');
  event.target.appendChild(document.getElementById(data));
  
  
  
}
