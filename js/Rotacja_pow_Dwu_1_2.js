let uchwytBtn12_2=document.getElementById('obracanie12_2');
function obrotDoPoziomu_2(){
	if($(uchwyt11_2).children().hasClass('dwuMasz'))
	{
		uchwyt11_2.style.width='100px';
		uchwyt11_2.style.height='50px';
		uchwyt11_2.style.marginLeft='0%';
		uchwytDwuMaszcz11_2.style.transform='rotate(0deg)';
		uchwytDwuMaszcz12_2.style.transform='rotate(0deg)';
		uchwytDwuMaszcz12_2.style.right='0px';
		uchwytDwuMaszcz11_2.style.bottom='0px';
	}
	else if($(uchwyt21_2).children().hasClass('dwuMasz'))
	
	{
		uchwyt21_2.style.width='100px';
		uchwyt21_2.style.height='50px';
		uchwyt21_2.style.marginLeft='0%';
		uchwytDwuMaszcz21_2.style.transform='rotate(0deg)';
		uchwytDwuMaszcz22_2.style.transform='rotate(0deg)';
		uchwytDwuMaszcz22_2.style.right='0px';
		uchwytDwuMaszcz21_2.style.bottom='0px';
	}
	else if($(uchwyt31_2).children().hasClass('dwuMasz'))
	{
	
	uchwyt31_2.style.width='100px';
	uchwyt31_2.style.height='50px';
	uchwyt31_2.style.marginLeft='0%';
	uchwytDwuMaszcz31_2.style.transform='rotate(0deg)';
	uchwytDwuMaszcz32_2.style.transform='rotate(0deg)';
	uchwytDwuMaszcz32_2.style.right='0px';
	uchwytDwuMaszcz31_2.style.bottom='0px';
	}
}

uchwytBtn12_2.addEventListener("click",obrotDoPoziomu_2);