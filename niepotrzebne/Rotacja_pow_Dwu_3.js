
let uchwytBtn31=document.getElementById('obracanie32');
function obrotDoPoziomu(){
	
	uchwyt31.style.width='100px';
	uchwyt31.style.height='50px';
	uchwyt31.style.marginLeft='0%';
	uchwytDwuMaszcz31.style.transform='rotate(0deg)';
	uchwytDwuMaszcz32.style.transform='rotate(0deg)';
	uchwytDwuMaszcz32.style.right='0px';
	uchwytDwuMaszcz31.style.bottom='0px';
	}

uchwytBtn31.addEventListener("click",obrotDoPoziomu);