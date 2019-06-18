let uchwytBtn42=document.getElementById('obracanie42');
function obrotDoPoziomu(){
	
	if($(uchwyt41).children().hasClass('trojMasz'))
	{
	uchwyt41.style.width='150px';
	uchwyt41.style.height='50px';
	uchwyt41.style.marginLeft='0%';
	
	uchwytDwuMaszcz41.style.transform='rotate(0deg)';
	
	pojemnikt11.style.right='0px';
	pojemnikt11.style.top='0px';
	uchwytDwuMaszcz42.style.transform='rotate(0deg)';
	uchwytDwuMaszcz42.style.right='0px';
	
	uchwytDwuMaszcz43.style.transform='rotate(0deg)';
	uchwytDwuMaszcz43.style.right='0px';
	}
	else if($(uchwyt51).children().hasClass('trojMasz'))
	{
	
	
	uchwyt51.style.width='150px';
	uchwyt51.style.height='50px';
	uchwyt51.style.marginLeft='0%';
	
	uchwytDwuMaszcz51.style.transform='rotate(0deg)';
	
	pojemnikt21.style.right='0px';
	pojemnikt21.style.top='0px';
	uchwytDwuMaszcz52.style.transform='rotate(0deg)';
	uchwytDwuMaszcz52.style.right='0px';
	
	uchwytDwuMaszcz53.style.transform='rotate(0deg)';
	uchwytDwuMaszcz53.style.right='0px';
	}
}

uchwytBtn42.addEventListener("click",obrotDoPoziomu);