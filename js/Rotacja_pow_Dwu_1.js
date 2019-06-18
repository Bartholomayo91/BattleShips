let uchwytBtn12=document.getElementById('obracanie12');
function obrotDoPoziomu(){
	if($(uchwyt11).children().hasClass('dwuMasz'))
	{
		uchwyt11.style.width='100px';
		uchwyt11.style.height='50px';
		uchwyt11.style.marginLeft='0%';
		uchwytDwuMaszcz11.style.transform='rotate(0deg)';
		uchwytDwuMaszcz12.style.transform='rotate(0deg)';
		uchwytDwuMaszcz12.style.right='0px';
		uchwytDwuMaszcz11.style.bottom='0px';
	}
	else if($(uchwyt21).children().hasClass('dwuMasz'))
	
	{
		uchwyt21.style.width='100px';
		uchwyt21.style.height='50px';
		uchwyt21.style.marginLeft='0%';
		uchwytDwuMaszcz21.style.transform='rotate(0deg)';
		uchwytDwuMaszcz22.style.transform='rotate(0deg)';
		uchwytDwuMaszcz22.style.right='0px';
		uchwytDwuMaszcz21.style.bottom='0px';
	}
	else if($(uchwyt31).children().hasClass('dwuMasz'))
	{
	
	uchwyt31.style.width='100px';
	uchwyt31.style.height='50px';
	uchwyt31.style.marginLeft='0%';
	uchwytDwuMaszcz31.style.transform='rotate(0deg)';
	uchwytDwuMaszcz32.style.transform='rotate(0deg)';
	uchwytDwuMaszcz32.style.right='0px';
	uchwytDwuMaszcz31.style.bottom='0px';
	}
}

uchwytBtn12.addEventListener("click",obrotDoPoziomu);