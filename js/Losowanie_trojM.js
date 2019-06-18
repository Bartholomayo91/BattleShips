var btnLosuj=document.getElementById("losowanie");

function proba1()
{
	const img =['trojm_cz1.jpg', 'trojm_cz1_pion.jpg'];
	let wybor_img=Math.round(Math.random());
	let pion_czy_poziom=img[wybor_img];
	//let pion_czy_poziom=img[0];
	
	//alert(pion_czy_poziom);
	
	const min=1;
	const max=100;
	let losuj1_tM = Math.floor(Math.random()*(max-min+1)+min);
	let losuj2_tM = losuj1_tM+1;
	let losuj3_tM = losuj2_tM+1;
	let losuj1p_tM = Math.floor(Math.random()*(max-min+1)+min);
	let losuj2p_tM = losuj1p_tM-10;
	let losuj3p_tM = losuj2p_tM-10;
	
	
	//alert(losuj1_tM);
	if(pion_czy_poziom=='trojm_cz1.jpg')	 
	{
		const reg1=/^[1-9]{1}9/;
		const reg2=/^[9]{1}/;
		let sprawdz_reg1=reg1.test(losuj1_tM);
		let sprawdz_reg2=reg2.test(losuj1_tM);
		
		let statekTMPoziom = {
					reg1:reg1,
					reg2:reg2,
					losuj1_tM : losuj1_tM,
					losuj2_tM : losuj2_tM,
					losuj3_tM : losuj3_tM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								sprawdz_reg1=reg1.test(losuj1_tM);
								sprawdz_reg2=reg2.test(losuj1_tM);
								if(losuj1_tM%10==0)
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								if(losuj1_tM===9||sprawdz_reg1)
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font'+losuj1_tM).hasChildNodes())
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font'+losuj2_tM).hasChildNodes())
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font'+losuj3_tM).hasChildNodes())
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekTMPoziom.sprawdzenie_pola();
	
		//alert(losuj1_tM);
		document.getElementById('font'+losuj1_tM).innerHTML='<img id="drag17" class="trojMasz" style="left:0" src ="img/trojm_cz1.jpg" >';
		document.getElementById('font'+losuj2_tM).innerHTML='<img id="drag18" class="trojMasz" style="left:0" src ="img/trojm_cz2.jpg" >';
		document.getElementById('font'+losuj3_tM).innerHTML='<img id="drag19" class="trojMasz" style="left:0" src ="img/trojm_cz3.jpg" >';
		
		switch(losuj1_tM){
				case 1:
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
				break;
				case 8:
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 98:
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
				break;
				case 18:
				case 28:
				case 38:
				case 48:
				case 58:
				case 68:
				case 78:
				case 88:
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
			}
	}
	
	else 
	{
		
		let statekTMPion = {
	
					losuj1p_tM : losuj1p_tM,
					losuj2p_tM : losuj2p_tM,
					losuj3p_tM : losuj3p_tM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								
								if(losuj1p_tM>=1&&losuj1p_tM<=20)
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}
																
								else if(document.getElementById('font'+losuj1p_tM).hasChildNodes())
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font'+losuj2p_tM).hasChildNodes())
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font'+losuj3p_tM).hasChildNodes())
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekTMPion.sprawdzenie_pola();
	
		//alert(losuj1p_tM);
		document.getElementById('font'+losuj1p_tM).innerHTML='<img id="drag20" class="trojMasz" style="left:0" src ="img/trojm_cz1_pion.jpg" >';
		document.getElementById('font'+losuj2p_tM).innerHTML='<img id="drag21" class="trojMasz" style="left:0" src ="img/trojm_cz2_pion.jpg" >';
		document.getElementById('font'+losuj3p_tM).innerHTML='<img id="drag22" class="trojMasz" style="left:0" src ="img/trojm_cz3_pion.jpg" >';
				
		switch(losuj1p_tM){
				case 21:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
				break;
				case 30:
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-28)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
				break;
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
				break;
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
			}
		
	}
//-------------------------------losowanie drugiego trójmasztowca------------------

	wybor_img=Math.round(Math.random());
	pion_czy_poziom=img[wybor_img];
if(pion_czy_poziom=='trojm_cz1.jpg')	 
	{
		const reg=/^[0-9]{1}9/;
		let sprawdz_reg=reg.test(losuj1_tM);
		
		let statekTMPoziom = {
					reg:reg,
					losuj1_tM : losuj1_tM,
					losuj2_tM : losuj2_tM,
					losuj3_tM : losuj3_tM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								sprawdz_reg=reg.test(losuj1_tM);
								if(losuj1_tM%10==0)
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(sprawdz_reg)
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font'+losuj1_tM).hasChildNodes())
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font'+losuj2_tM).hasChildNodes())
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font'+losuj3_tM).hasChildNodes())
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekTMPoziom.sprawdzenie_pola();
	
		//alert(losuj1_tM);
		document.getElementById('font'+losuj1_tM).innerHTML='<img id="drag23" class="trojMasz" style="left:0" src ="img/trojm_cz1.jpg" >';
		document.getElementById('font'+losuj2_tM).innerHTML='<img id="drag24" class="trojMasz" style="left:0" src ="img/trojm_cz2.jpg" >';
		document.getElementById('font'+losuj3_tM).innerHTML='<img id="drag25" class="trojMasz" style="left:0" src ="img/trojm_cz3.jpg" >';
		
		switch(losuj1_tM){
				case 1:
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
				break;
				case 8:
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 98:
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
				break;
				case 18:
				case 28:
				case 38:
				case 48:
				case 58:
				case 68:
				case 78:
				case 88:
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
			}
	}
	
	else 
	{
		
		let statekTMPion = {
	
					losuj1p_tM : losuj1p_tM,
					losuj2p_tM : losuj2p_tM,
					losuj3p_tM : losuj3p_tM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								
								if(losuj1p_tM>=1&&losuj1p_tM<=20)
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}
																
								else if(document.getElementById('font'+losuj1p_tM).hasChildNodes())
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font'+losuj2p_tM).hasChildNodes())
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font'+losuj3p_tM).hasChildNodes())
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekTMPion.sprawdzenie_pola();
	
		//alert(losuj1p_tM);
		document.getElementById('font'+losuj1p_tM).innerHTML='<img id="drag26" class="trojMasz" style="left:0" src ="img/trojm_cz1_pion.jpg" >';
		document.getElementById('font'+losuj2p_tM).innerHTML='<img id="drag27" class="trojMasz" style="left:0" src ="img/trojm_cz2_pion.jpg" >';
		document.getElementById('font'+losuj3p_tM).innerHTML='<img id="drag28" class="trojMasz" style="left:0" src ="img/trojm_cz3_pion.jpg" >';
				
		switch(losuj1p_tM){
				case 21:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
				break;
				case 30:
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-28)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
				break;
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
				break;
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
			}
		
	}

}
btnLosuj.addEventListener('click', proba1);