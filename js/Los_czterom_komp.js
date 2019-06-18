function los_czteromasztowiec_komp()
{
	const img =['czterm_cz1.jpg', 'czterm_cz1_pion.jpg'];
	let wybor_img=Math.round(Math.random());
	let pion_czy_poziom=img[wybor_img];
	//let pion_czy_poziom=img[0];
	
	//alert(pion_czy_poziom);
	
	const min=1;
	const max=100;
	let losuj1_cM = Math.floor(Math.random()*(max-min+1)+min);
	let losuj2_cM = losuj1_cM+1;
	let losuj3_cM = losuj2_cM+1;
	let losuj4_cM = losuj3_cM+1;
	let losuj1p_cM = Math.floor(Math.random()*(max-min+1)+min);
	let losuj2p_cM = losuj1p_cM-10;
	let losuj3p_cM = losuj2p_cM-10;
	let losuj4p_cM = losuj3p_cM-10;
	
	
	//alert(losuj1_cM);
	if(pion_czy_poziom=='czterm_cz1.jpg')	 
	{
		const reg1=/^[8-9]{1}/;
		const reg2=/^[1-9]{1}[8-9]{1}/;
		let sprawdz_reg1=reg1.test(losuj1_cM);
		let sprawdz_reg2=reg2.test(losuj1_cM);
		
		let statekCMPoziom = {
					reg1:reg1,
					reg2:reg2,
					losuj1_cM : losuj1_cM,
					losuj2_cM : losuj2_cM,
					losuj3_cM : losuj3_cM,
					losuj4_cM : losuj4_cM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								sprawdz_reg1=reg1.test(losuj1_cM);
								sprawdz_reg2=reg2.test(losuj1_cM);
								if(losuj1_cM%10==0)
									{
										losuj1_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_cM=losuj1_cM+1;
										losuj3_cM=losuj2_cM+1;
										losuj4_cM=losuj3_cM+1;
										statekCMPoziom.sprawdzenie_pola();
									}
								if(sprawdz_reg1||sprawdz_reg2)
									{
										losuj1_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_cM=losuj1_cM+1;
										losuj3_cM=losuj2_cM+1;
										losuj4_cM=losuj3_cM+1;
										statekCMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj1_cM).hasChildNodes())
									{
										losuj1_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_cM=losuj1_cM+1;
										losuj3_cM=losuj2_cM+1;
										losuj4_cM=losuj3_cM+1;
										statekCMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj2_cM).hasChildNodes())
									{
										losuj1_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_cM=losuj1_cM+1;
										losuj3_cM=losuj2_cM+1;
										losuj4_cM=losuj3_cM+1;
										statekCMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj3_cM).hasChildNodes())
									{
										losuj1_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_cM=losuj1_cM+1;
										losuj3_cM=losuj2_cM+1;
										losuj4_cM=losuj3_cM+1;
										statekCMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj4_cM).hasChildNodes())
									{
										losuj1_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_cM=losuj1_cM+1;
										losuj3_cM=losuj2_cM+1;
										losuj4_cM=losuj3_cM+1;
										statekCMPoziom.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekCMPoziom.sprawdzenie_pola();
	
		//alert(losuj1_cM);
		document.getElementById('font_com'+losuj1_cM).innerHTML='<div class="czterMasz"></div>';
		document.getElementById('font_com'+losuj2_cM).innerHTML='<div class="czterMasz"></div>';
		document.getElementById('font_com'+losuj3_cM).innerHTML='<div class="czterMasz"></div>';
		document.getElementById('font_com'+losuj4_cM).innerHTML='<div class="czterMasz"></div>';
		
		switch(losuj1_cM){
				case 1:
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+14)).innerHTML='<div id="blokada"></div>';
				break;
				case 7:
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div id="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-6)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div id="blokada"></div>';	
				break;
				case 97:
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-11)).innerHTML='<div id="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+14)).innerHTML='<div id="blokada"></div>';
				break;
				case 17:
				case 27:
				case 37:
				case 47:
				case 57:
				case 67:
				case 77:
				case 87:
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div id="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+14)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-6)).innerHTML='<div id="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-6)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-11)).innerHTML='<div id="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-6)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+14)).innerHTML='<div id="blokada"></div>';
			}
		
	}
	else{
		
				
		let statekCMPion = {
					
					losuj1p_cM : losuj1p_cM,
					losuj2p_cM : losuj2p_cM,
					losuj3p_cM : losuj3p_cM,
					losuj4p_cM : losuj4p_cM,
					max : 100,
					min : 1,
					sprawdzenie_pola:function ()
							{
								
								if(losuj1p_cM>=1&&losuj1p_cM<=30)
									{
										losuj1p_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_cM=losuj1p_cM-10;
										losuj3p_cM=losuj2p_cM-10;
										losuj4p_cM=losuj3p_cM-10;
										statekCMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj1p_cM).hasChildNodes())
									{
										losuj1p_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_cM=losuj1p_cM-10;
										losuj3p_cM=losuj2p_cM-10;
										losuj4p_cM=losuj3p_cM-10;
										statekCMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj2p_cM).hasChildNodes())
									{
										losuj1p_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_cM=losuj1p_cM-10;
										losuj3p_cM=losuj2p_cM-10;
										losuj4p_cM=losuj3p_cM-10;
										statekCMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj3p_cM).hasChildNodes())
									{
										losuj1p_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_cM=losuj1p_cM-10;
										losuj3p_cM=losuj2p_cM-10;
										losuj4p_cM=losuj3p_cM-10;
										statekCMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj4_cM).hasChildNodes()||null)
									{
										losuj1p_cM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_cM=losuj1p_cM-10;
										losuj3p_cM=losuj2p_cM-10;
										losuj4p_cM=losuj3p_cM-10;
										statekCMPion.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekCMPion.sprawdzenie_pola();
	
		//alert(losuj1_cM);
		document.getElementById('font_com'+losuj1p_cM).innerHTML='<div class="czterMasz"></div>';
		document.getElementById('font_com'+losuj2p_cM).innerHTML='<div class="czterMasz"></div>';
		document.getElementById('font_com'+losuj3p_cM).innerHTML='<div class="czterMasz"></div>';
		document.getElementById('font_com'+losuj4p_cM).innerHTML='<div class="czterMasz"></div>';
		
		switch(losuj1p_cM){
				case 31:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div id="blokada"></div>';
					
				break;
				case 40:
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div id="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-39)).innerHTML='<div id="blokada"></div>';	
					document.getElementById('font_com'+(losuj1p_cM-40)).innerHTML='<div id="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-38)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-39)).innerHTML='<div id="blokada"></div>';
				break;
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-39)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-40)).innerHTML='<div id="blokada"></div>';
				break;
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-21)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-31)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-40)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-41)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div id="blokada"></div>';
				break;
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-21)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-31)).innerHTML='<div id="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-21)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-31)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-39)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-40)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-41)).innerHTML='<div id="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-21)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-31)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-39)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-40)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-41)).innerHTML='<div id="blokada"></div>';
			}

	}
}


