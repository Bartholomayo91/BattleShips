let uchwyt41_2=document.querySelector('#pojemnikT1_2');
let uchwytDwuMaszcz41_2=document.querySelector('#drag17_2');
let uchwytDwuMaszcz42_2=document.querySelector('#drag18_2');
let uchwytDwuMaszcz43_2=document.querySelector('#drag19_2');
let pojemnikt11_2=document.querySelector('#pojemnikT11_2');
let uchwyt51_2=document.querySelector('#pojemnikT2_2');
let uchwytDwuMaszcz51_2=document.querySelector('#drag20_2');
let uchwytDwuMaszcz52_2=document.querySelector('#drag21_2');
let uchwytDwuMaszcz53_2=document.querySelector('#drag22_2');
let pojemnikt21_2=document.querySelector('#pojemnikT21_2');
var uchwytBtn4_2=document.getElementById("obracanie41_2");


function obrot_2(){
	
	if($(uchwyt41_2).children().hasClass('trojMasz'))
	{
	uchwyt41_2.style.width='50px';
	uchwyt41_2.style.height='150px';
	uchwyt41_2.style.marginLeft='5%';
	
	uchwytDwuMaszcz41_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz41_2.style.bottom='0px';
	
	pojemnikt11_2.style.right='50px';
	pojemnikt11_2.style.top='50px';
	uchwytDwuMaszcz42_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz42_2.style.right='0px';

	uchwytDwuMaszcz43_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz43_2.style.right='0px';
	}
	else if($(uchwyt51_2).children().hasClass('trojMasz'))
	{
	
	uchwyt51_2.style.width='50px';
	uchwyt51_2.style.height='150px';
	uchwyt51_2.style.marginLeft='15%';
	
	uchwytDwuMaszcz51_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz51_2.style.bottom='0px';
	
	pojemnikt21_2.style.right='50px';
	pojemnikt21_2.style.top='50px';
	uchwytDwuMaszcz52_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz52_2.style.right='0px';

	uchwytDwuMaszcz53_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz53_2.style.right='0px';
	}

}

uchwytBtn4_2.addEventListener("click",obrot_2);
	
