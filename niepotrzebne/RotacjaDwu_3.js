let uchwyt31=document.querySelector('#pojemnikD3');
let uchwytDwuMaszcz31=document.querySelector('#drag15');
let uchwytDwuMaszcz32=document.querySelector('#drag16');
var uchwytBtn3=document.getElementById("obracanie31");


function obrot(){
	
	uchwyt31.style.width='50px';
	uchwyt31.style.height='100px';
	uchwyt31.style.marginLeft='10%';
	uchwytDwuMaszcz31.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz32.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz32.style.right='0px';
	uchwytDwuMaszcz31.style.bottom='0px';
	
}

uchwytBtn3.addEventListener("click",obrot);
	


