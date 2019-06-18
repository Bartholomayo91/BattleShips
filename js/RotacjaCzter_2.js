let uchwyt61_2=document.querySelector('#pojemnikC1_2');
let uchwytDwuMaszcz61_2=document.querySelector('#drag23_2');
let uchwytDwuMaszcz62_2=document.querySelector('#drag24_2');
let uchwytDwuMaszcz63_2=document.querySelector('#drag25_2');
let uchwytDwuMaszcz64_2=document.querySelector('#drag26_2');
let pojemnikc11_2=document.querySelector('#pojemnikC11_2');
let pojemnikc12_2=document.querySelector('#pojemnikC12_2');
var uchwytBtn6_2=document.getElementById("obracanie61_2");


function obrot_2(){

	uchwyt61_2.style.width='50px';
	uchwyt61_2.style.height='200px';
	uchwyt61_2.style.marginLeft='12%';
	
	uchwytDwuMaszcz61_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz61_2.style.bottom='0px';
	
	pojemnikc11_2.style.right='50px';
	pojemnikc11_2.style.top='50px';
	uchwytDwuMaszcz62_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz62_2.style.right='0px';

	pojemnikc12_2.style.right='100px';
	pojemnikc12_2.style.top='50px';
	uchwytDwuMaszcz63_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz63_2.style.right='0px';
	
	uchwytDwuMaszcz64_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz64_2.style.right='0px';

}

uchwytBtn6_2.addEventListener("click",obrot_2);
	
