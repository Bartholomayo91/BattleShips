let uchwyt11_2=document.querySelector('#pojemnikD1_2');
let uchwytDwuMaszcz11_2=document.querySelector('#drag11_2');
let uchwytDwuMaszcz12_2=document.querySelector('#drag12_2');
let uchwyt21_2=document.querySelector('#pojemnikD2_2');
let uchwytDwuMaszcz21_2=document.querySelector('#drag13_2');
let uchwytDwuMaszcz22_2=document.querySelector('#drag14_2');
let uchwyt31_2=document.querySelector('#pojemnikD3_2');
let uchwytDwuMaszcz31_2=document.querySelector('#drag15_2');
let uchwytDwuMaszcz32_2=document.querySelector('#drag16_2');
var uchwytBtn1_2=document.getElementById("obracanie11_2");


function obrot_2(){
	
	if($(uchwyt11_2).children().hasClass('dwuMasz'))
	{
	uchwyt11_2.style.width='50px';
	uchwyt11_2.style.height='100px';
	uchwyt11_2.style.marginLeft='5%';
	uchwytDwuMaszcz11_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz12_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz12_2.style.right='0px';
	uchwytDwuMaszcz11_2.style.bottom='0px';
	}
	else if($(uchwyt21_2).children().hasClass('dwuMasz'))
	
	{
	
	uchwyt21_2.style.width='50px';
	uchwyt21_2.style.height='100px';
	uchwyt21_2.style.marginLeft='8%';
	uchwytDwuMaszcz21_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz22_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz22_2.style.right='0px';
	uchwytDwuMaszcz21_2.style.bottom='0px';
	}
	else if($(uchwyt31_2).children().hasClass('dwuMasz'))
	{
	
	uchwyt31_2.style.width='50px';
	uchwyt31_2.style.height='100px';
	uchwyt31_2.style.marginLeft='10%';
	uchwytDwuMaszcz31_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz32_2.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz32_2.style.right='0px';
	uchwytDwuMaszcz31_2.style.bottom='0px';
	}
	
}

uchwytBtn1_2.addEventListener("click",obrot_2);

