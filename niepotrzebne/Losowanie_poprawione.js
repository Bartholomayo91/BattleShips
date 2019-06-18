var btnLosuj=document.getElementById("losowanie");
function Losowanie_poprawione()
{
	const min=1;
	const max=100;
	
	var content_jM1="";
	var content_jM2="";
	var content_jM3="";
	var content_jM4="";
	var tablica_zajetych_pol=[];
	var tablica_pol=[];
	for (i=0;i<100;i++)
	{
		
		tablica_pol.push(i);
		
	}
	alert(tablica_pol);
	
	let losuj1_jM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj2_jM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj3_jM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj4_jM=Math.floor(Math.random()*(max-min+1)+min);	
//------------------------------wstawianie losowe jednomasztowcóa 1/4-----------------	
	let wylosowane_1jM=tablica_pol[losuj1_jM];
	alert(wylosowane_1jM);
	
		content_jM1=content_jM1+'<img id="drag1" class="jedMasz" src ="img/jednomasztowiec.jpg" draggable="true" ondragstart="drag(event)">';
		
		document.getElementById('font'+tablica_pol[(wylosowane_1jM)]).innerHTML=content_jM1;
		
	if(tablica_pol[losuj1_jM]===1||10||91||100)
	{
		if(tablica_pol[losuj1_jM]===1)
		{
			tablica_pol.splice((losuj1_jM-1), 2);
			tablica_pol.splice((losuj1_jM)+9, 2);
		}else if(tablica_pol[losuj1_jM]===10)
		{
			tablica_pol.splice((losuj1_jM-2), 2);
			tablica_pol.splice((losuj1_jM)+8, 2);
		}else if(tablica_pol[losuj1_jM]===91)
		{
			tablica_pol.splice((losuj1_jM)-11, 2);
			tablica_pol.splice((losuj1_jM-1), 2);
		}else if(tablica_pol[losuj1_jM]===100)
		{
			tablica_pol.splice((losuj1_jM)-12, 2);
			tablica_pol.splice((losuj1_jM-2), 2);
		}


	}else if(tablica_pol[losuj1_jM]===2||3||4||5||6||7||8||9)
	{
		tablica_pol.splice((losuj1_jM-2), 3);
		tablica_pol.splice((losuj1_jM)+8, 3);
		
	}else if(tablica_pol[losuj1_jM]===20||30||40||50||60||70||80||90)
	{
		tablica_pol.splice((losuj1_jM)-11, 2);
		tablica_pol.splice((losuj1_jM-1), 2);
		tablica_pol.splice((losuj1_jM)+9, 2);
		
	}else if(tablica_pol[losuj1_jM]===11||21||31||41||51||61||71||81)
	{
		tablica_pol.splice((losuj1_jM)-11, 2);
		tablica_pol.splice((losuj1_jM-1), 2);
		tablica_pol.splice((losuj1_jM)+9, 2);
		
	}else if(tablica_pol[losuj1_jM]===92||93||94||95||96||97||98||99)
	{
		tablica_pol.splice((losuj1_jM)-12, 3);
		tablica_pol.splice((losuj1_jM-2), 3);

	}

		content_jM1=content_jM1+'<img id="drag1" class="jedMasz" src ="img/jednomasztowiec.jpg" draggable="true" ondragstart="drag(event)">';
		
		document.getElementById('font'+tablica_pol[(wylosowane_1jM)]).innerHTML=content_jM1;
	
		tablica_pol.splice((losuj1_jM+8), 3);
		tablica_pol.splice((losuj1_jM-2), 3);
		tablica_pol.splice((losuj1_jM-12), 3);
//------------------------------wstawianie losowe jednomasztowcóa 2/4-----------------	
	
	let wylosowane_2jM=tablica_pol[losuj2_jM];
	alert(wylosowane_2jM);
	
		content_jM2=content_jM2+'<img id="drag2" class="jedMasz" src ="img/jednomasztowiec.jpg" draggable="true" ondragstart="drag(event)">';
		
		document.getElementById('font'+tablica_pol[(wylosowane_2jM)]).innerHTML=content_jM2;
		
	if(tablica_pol[losuj2_jM]===1||10||91||100)
	{
		if(tablica_pol[losuj2_jM]===1)
		{
			tablica_pol.splice((losuj2_jM-1), 2);
			tablica_pol.splice((losuj2_jM)+9, 2);
		}else if(tablica_pol[losuj2_jM]===10)
		{
			tablica_pol.splice((losuj2_jM-2), 2);
			tablica_pol.splice((losuj2_jM)+8, 2);
		}else if(tablica_pol[losuj2_jM]===91)
		{
			tablica_pol.splice((losuj2_jM)-11, 2);
			tablica_pol.splice((losuj2_jM-1), 2);
		}else if(tablica_pol[losuj2_jM]===100)
		{
			tablica_pol.splice((losuj2_jM)-12, 2);
			tablica_pol.splice((losuj2_jM-2), 2);
		}


	}else if(tablica_pol[losuj2_jM]===2||3||4||5||6||7||8||9)
	{
		tablica_pol.splice((losuj2_jM-2), 3);
		tablica_pol.splice((losuj2_jM)+8, 3);
		
	}else if(tablica_pol[losuj2_jM]===20||30||40||50||60||70||80||90)
	{
		tablica_pol.splice((losuj2_jM)-11, 2);
		tablica_pol.splice((losuj2_jM-1), 2);
		tablica_pol.splice((losuj2_jM)+9, 2);
		
	}else if(tablica_pol[losuj2_jM]===11||21||31||41||51||61||71||81)
	{
		tablica_pol.splice((losuj2_jM)-11, 2);
		tablica_pol.splice((losuj2_jM-1), 2);
		tablica_pol.splice((losuj2_jM)+9, 2);
		
	}else if(tablica_pol[losuj2_jM]===92||93||94||95||96||97||98||99)
	{
		tablica_pol.splice((losuj2_jM)-12, 3);
		tablica_pol.splice((losuj2_jM-2), 3);

	}

		content_jM2=content_jM2+'<img id="drag2" class="jedMasz" src ="img/jednomasztowiec.jpg" draggable="true" ondragstart="drag(event)">';
		
		document.getElementById('font'+tablica_pol[(wylosowane_2jM)]).innerHTML=content_jM2;
	
		tablica_pol.splice((losuj2_jM+8), 3);
		tablica_pol.splice((losuj2_jM-2), 3);
		tablica_pol.splice((losuj2_jM-12), 3);
		
		alert(tablica_pol);
}
btnLosuj.addEventListener('click', Losowanie_poprawione);
		