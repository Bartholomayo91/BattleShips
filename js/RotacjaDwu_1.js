let uchwyt11=document.querySelector('#pojemnikD1');
let uchwytDwuMaszcz11=document.querySelector('#drag11');
let uchwytDwuMaszcz12=document.querySelector('#drag12');
let uchwyt21=document.querySelector('#pojemnikD2');
let uchwytDwuMaszcz21=document.querySelector('#drag13');
let uchwytDwuMaszcz22=document.querySelector('#drag14');
let uchwyt31=document.querySelector('#pojemnikD3');
let uchwytDwuMaszcz31=document.querySelector('#drag15');
let uchwytDwuMaszcz32=document.querySelector('#drag16');
var uchwytBtn1=document.getElementById("obracanie11");


function obrot(){
	
	if($(uchwyt11).children().hasClass('dwuMasz'))
	{
	uchwyt11.style.width='50px';
	uchwyt11.style.height='100px';
	uchwyt11.style.marginLeft='5%';
	uchwytDwuMaszcz11.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz12.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz12.style.right='0px';
	uchwytDwuMaszcz11.style.bottom='0px';
	}
	else if($(uchwyt21).children().hasClass('dwuMasz'))
	
	{
	
	uchwyt21.style.width='50px';
	uchwyt21.style.height='100px';
	uchwyt21.style.marginLeft='8%';
	uchwytDwuMaszcz21.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz22.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz22.style.right='0px';
	uchwytDwuMaszcz21.style.bottom='0px';
	}
	else if($(uchwyt31).children().hasClass('dwuMasz'))
	{
	
	uchwyt31.style.width='50px';
	uchwyt31.style.height='100px';
	uchwyt31.style.marginLeft='10%';
	uchwytDwuMaszcz31.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz32.style.transform='rotate(-90deg)';
	uchwytDwuMaszcz32.style.right='0px';
	uchwytDwuMaszcz31.style.bottom='0px';
	}
	
}

uchwytBtn1.addEventListener("click",obrot);
	


