let uchwytBtn42_2=document.getElementById('obracanie42_2');
function obrotDoPoziomu_2(){
	
	if($(uchwyt41_2).children().hasClass('trojMasz'))
	{
	uchwyt41_2.style.width='150px';
	uchwyt41_2.style.height='50px';
	uchwyt41_2.style.marginLeft='0%';
	
	uchwytDwuMaszcz41_2.style.transform='rotate(0deg)';
	
	pojemnikt11_2.style.right='0px';
	pojemnikt11_2.style.top='0px';
	uchwytDwuMaszcz42_2.style.transform='rotate(0deg)';
	uchwytDwuMaszcz42_2.style.right='0px';
	
	uchwytDwuMaszcz43_2.style.transform='rotate(0deg)';
	uchwytDwuMaszcz43_2.style.right='0px';
	}
	else if($(uchwyt51_2).children().hasClass('trojMasz'))
	{
	
	
	uchwyt51_2.style.width='150px';
	uchwyt51_2.style.height='50px';
	uchwyt51_2.style.marginLeft='0%';
	
	uchwytDwuMaszcz51_2.style.transform='rotate(0deg)';
	
	pojemnikt21_2.style.right='0px';
	pojemnikt21_2.style.top='0px';
	uchwytDwuMaszcz52_2.style.transform='rotate(0deg)';
	uchwytDwuMaszcz52_2.style.right='0px';
	
	uchwytDwuMaszcz53_2.style.transform='rotate(0deg)';
	uchwytDwuMaszcz53_2.style.right='0px';
	}
}

uchwytBtn42_2.addEventListener("click",obrotDoPoziomu_2);