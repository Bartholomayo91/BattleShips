
let uchwytBtn21=document.getElementById('obracanie22');
function obrotDoPoziomu(){
	
	uchwyt21.style.width='100px';
	uchwyt21.style.height='50px';
	uchwyt21.style.marginLeft='0%';
	uchwytDwuMaszcz21.style.transform='rotate(0deg)';
	uchwytDwuMaszcz22.style.transform='rotate(0deg)';
	uchwytDwuMaszcz22.style.right='0px';
	uchwytDwuMaszcz21.style.bottom='0px';
	}

uchwytBtn21.addEventListener("click",obrotDoPoziomu);