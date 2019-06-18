let uchwyt41=document.querySelector('#pojemnikT1');
let uchwytDwuMaszcz41=document.querySelector('#drag17');
let uchwytDwuMaszcz42=document.querySelector('#drag18');
let uchwytDwuMaszcz43=document.querySelector('#drag19');
let pojemnikt11=document.querySelector('#pojemnikT11');
let uchwyt51=document.querySelector('#pojemnikT2');
let uchwytDwuMaszcz51=document.querySelector('#drag20');
let uchwytDwuMaszcz52=document.querySelector('#drag21');
let uchwytDwuMaszcz53=document.querySelector('#drag22');
let pojemnikt21=document.querySelector('#pojemnikT21');
var uchwytBtn4=document.getElementById("obracanie41");


function obrot(){
	
	if($(uchwyt41).children().hasClass('trojMasz'))
	{
	uchwyt41.style.width='50px';
	uchwyt41.style.height='150px';
	uchwyt41.style.marginLeft='5%';
	
	uchwytDwuMaszcz41.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz41.style.bottom='0px';
	
	pojemnikt11.style.right='50px';
	pojemnikt11.style.top='50px';
	uchwytDwuMaszcz42.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz42.style.right='0px';

	uchwytDwuMaszcz43.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz43.style.right='0px';
	}
	else if($(uchwyt51).children().hasClass('trojMasz'))
	{
	
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

}

uchwytBtn4.addEventListener("click",obrot);
	
