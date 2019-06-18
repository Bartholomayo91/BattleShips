let uchwyt61=document.querySelector('#pojemnikC1');
let uchwytDwuMaszcz61=document.querySelector('#drag23');
let uchwytDwuMaszcz62=document.querySelector('#drag24');
let uchwytDwuMaszcz63=document.querySelector('#drag25');
let uchwytDwuMaszcz64=document.querySelector('#drag26');
let pojemnikc11=document.querySelector('#pojemnikC11');
let pojemnikc12=document.querySelector('#pojemnikC12');
var uchwytBtn6=document.getElementById("obracanie61");


function obrot(){

	uchwyt61.style.width='50px';
	uchwyt61.style.height='200px';
	uchwyt61.style.marginLeft='12%';
	
	uchwytDwuMaszcz61.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz61.style.bottom='0px';
	
	pojemnikc11.style.right='50px';
	pojemnikc11.style.top='50px';
	uchwytDwuMaszcz62.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz62.style.right='0px';

	pojemnikc12.style.right='100px';
	pojemnikc12.style.top='50px';
	uchwytDwuMaszcz63.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz63.style.right='0px';
	
	uchwytDwuMaszcz64.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz64.style.right='0px';

}

uchwytBtn6.addEventListener("click",obrot);
	
