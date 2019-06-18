let uchwyt21=document.querySelector('#pojemnikD2');
let uchwytDwuMaszcz21=document.querySelector('#drag13');
let uchwytDwuMaszcz22=document.querySelector('#drag14');
var uchwytBtn2=document.getElementById("obracanie21");


function obrot(){
	
	uchwyt21.style.width='50px';
	uchwyt21.style.height='100px';
	uchwyt21.style.marginLeft='8%';
	uchwytDwuMaszcz21.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz22.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz22.style.right='0px';
	uchwytDwuMaszcz21.style.bottom='0px';
	
}

uchwytBtn2.addEventListener("click",obrot);
	


