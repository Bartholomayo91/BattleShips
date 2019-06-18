let uchwyt51=document.querySelector('#pojemnikT2');
let uchwytDwuMaszcz51=document.querySelector('#drag20');
let uchwytDwuMaszcz52=document.querySelector('#drag21');
let uchwytDwuMaszcz53=document.querySelector('#drag22');
let pojemnikt21=document.querySelector('#pojemnikT21');
var uchwytBtn5=document.getElementById("obracanie51");


function obrot(){

	uchwyt51.style.width='50px';
	uchwyt51.style.height='150px';
	uchwyt51.style.marginLeft='15%';
	
	uchwytDwuMaszcz51.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz51.style.bottom='0px';
	
	pojemnikt21.style.right='50px';
	pojemnikt21.style.top='50px';
	uchwytDwuMaszcz52.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz52.style.right='0px';

	uchwytDwuMaszcz53.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz53.style.right='0px';

}

uchwytBtn5.addEventListener("click",obrot);
	
