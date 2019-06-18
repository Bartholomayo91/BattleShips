var btnLosuj=document.getElementById("losowanie");

function proba()
{
	const img =['dwum_cz1.jpg', 'dwum_cz1_pion.jpg'];
	let wybor_img=Math.round(Math.random());
	let pion_czy_poziom=img[wybor_img];
	//let pion_czy_poziom=img[1];
	
	//alert(pion_czy_poziom);
	
	const min=1;
	const max=100;
	let losuj1_dM = Math.floor(Math.random()*(max-min+1)+min);
	let losuj2_dM = losuj1_dM+1;
	let losuj1p_dM = Math.floor(Math.random()*(max-min+1)+min);
	let losuj2p_dM = losuj1p_dM-10;
	
	
	//alert(losuj1_dM);
	if(pion_czy_poziom=='dwum_cz1.jpg')	 
	{
		let statekDMPoziom = {
		
					losuj1_dM : losuj1_dM,
					losuj2_dM : losuj2_dM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								if(losuj1_dM%10==0)
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj1_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj2_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekDMPoziom.sprawdzenie_pola();
	
		//alert(losuj1_dM);
		document.getElementById('font'+losuj1_dM).innerHTML='<img id="drag5" class="dwuMasz" style="left:0;" src ="img/dwum_cz1.jpg" ">';
		document.getElementById('font'+losuj2_dM).innerHTML='<img id="drag6" class="dwuMasz" style="left:0;" src ="img/dwum_cz2.jpg" ">';
		
		switch(losuj1_dM){
				case 1:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 9:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 99:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 19:
				case 29:
				case 39:
				case 49:
				case 59:
				case 69:
				case 79:
				case 89:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
			}
	}
	
	else 
	{
		let statekDMPion = {
		
					losuj1p_dM : losuj1p_dM,
					losuj2p_dM : losuj2p_dM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								if(losuj1p_dM>=1&&losuj1p_dM<=10)
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj1p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj2p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekDMPion.sprawdzenie_pola();
		
		//alert(losuj1p_dM);
		document.getElementById('font'+losuj1p_dM).innerHTML='<img id="drag7" class="dwuMasz" style="left:0;" src ="img/dwum_cz1_pion.jpg" >';
		document.getElementById('font'+losuj2p_dM).innerHTML='<img id="drag8" class="dwuMasz" style="left:0;" src ="img/dwum_cz2_pion.jpg">';
		
		switch(losuj1p_dM){
				case 11:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
				break;
				case 20:
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
			}
		
	}
	
	
	
	
//-----------------------------losowanie drugiego dwumasztowca------------------------	
	
	
	
	wybor_img=Math.round(Math.random());
	pion_czy_poziom=img[wybor_img];
	
	
	
	if(pion_czy_poziom=='dwum_cz1.jpg')	 
	{
		let statekDMPoziom = {
		
					losuj1_dM : losuj1_dM,
					losuj2_dM : losuj2_dM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								if(losuj1_dM%10==0)
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj1_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj2_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekDMPoziom.sprawdzenie_pola();
	
		//alert(losuj1_dM);
		document.getElementById('font'+losuj1_dM).innerHTML='<img id="drag9" class="dwuMasz" style="left:0;" src ="img/dwum_cz1.jpg" ">';
		document.getElementById('font'+losuj2_dM).innerHTML='<img id="drag10" class="dwuMasz" style="left:0;" src ="img/dwum_cz2.jpg" ">';
		
		switch(losuj1_dM){
				case 1:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 9:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 99:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 19:
				case 29:
				case 39:
				case 49:
				case 59:
				case 69:
				case 79:
				case 89:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
			}
	}
	
	else 
	{
		let statekDMPion = {
		
					losuj1p_dM : losuj1p_dM,
					losuj2p_dM : losuj2p_dM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								if(losuj1p_dM>=1&&losuj1p_dM<=10)
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj1p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj2p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekDMPion.sprawdzenie_pola();
		
		//alert(losuj1p_dM);
		document.getElementById('font'+losuj1p_dM).innerHTML='<img id="drag11" class="dwuMasz" style="left:0;" src ="img/dwum_cz1_pion.jpg">';
		document.getElementById('font'+losuj2p_dM).innerHTML='<img id="drag12" class="dwuMasz" style="left:0;" src ="img/dwum_cz2_pion.jpg">';
		
		switch(losuj1p_dM){
				case 11:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
				break;
				case 20:
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
			}
		
	}
	
	
	
//-------------------------losowanie trzeciego dwumasztowca------------------------	
	
	
	wybor_img=Math.round(Math.random());
	pion_czy_poziom=img[wybor_img];
	
	
	
	
	if(pion_czy_poziom=='dwum_cz1.jpg')	 
	{
		let statekDMPoziom = {
		
					losuj1_dM : losuj1_dM,
					losuj2_dM : losuj2_dM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								if(losuj1_dM%10==0)
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj1_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj2_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
							}
					
						};
		
		
		statekDMPoziom.sprawdzenie_pola();
	
		//alert(losuj1_dM);
		document.getElementById('font'+losuj1_dM).innerHTML='<img id="drag13" class="dwuMasz" style="left:0;" src ="img/dwum_cz1.jpg">';
		document.getElementById('font'+losuj2_dM).innerHTML='<img id="drag14" class="dwuMasz" style="left:0;" src ="img/dwum_cz2.jpg">';
		
		switch(losuj1_dM){
				case 1:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 9:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 99:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 19:
				case 29:
				case 39:
				case 49:
				case 59:
				case 69:
				case 79:
				case 89:
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
			}
	}
	
	else 
	{
		let statekDMPion = {
		
					losuj1p_dM : losuj1p_dM,
					losuj2p_dM : losuj2p_dM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								if(losuj1p_dM>=1&&losuj1p_dM<=10)
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj1p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}
								if(document.getElementById('font'+losuj2p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekDMPion.sprawdzenie_pola();
		
		//alert(losuj1p_dM);
		document.getElementById('font'+losuj1p_dM).innerHTML='<img id="drag15" class="dwuMasz" style="left:0;" src ="img/dwum_cz1_pion.jpg">';
		document.getElementById('font'+losuj2p_dM).innerHTML='<img id="drag16" class="dwuMasz" style="left:0;" src ="img/dwum_cz2_pion.jpg">';
		
		switch(losuj1p_dM){
				case 11:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
				break;
				case 20:
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
			}
		
	}
	
}
btnLosuj.addEventListener('click', proba);
	