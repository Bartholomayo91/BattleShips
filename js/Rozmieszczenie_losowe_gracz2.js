var btnLosuj_gracz2=document.getElementById("losowanie_gracz2");

function losowanie_czteromasztowca_gracz2()
{
	document.getElementById("conteinerOfShips2").style.display="none";
	document.getElementById("conteinerOfFields2").style.marginLeft="37%";
	
	document.getElementById("losowanie_gracz2").setAttribute('disabled', 'disabled');	
	document.getElementById("losowanie_gracz2").style.transform="scale(1.0)";	
	
	
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
		document.getElementById('font_com'+losuj1_cM).innerHTML='<img id="drag29" class="czterMasz" style="left:0" src ="img/czterm_cz1.jpg" >';
		document.getElementById('font_com'+losuj2_cM).innerHTML='<img id="drag30" class="czterMasz" style="left:0" src ="img/czterm_cz2.jpg" >';
		document.getElementById('font_com'+losuj3_cM).innerHTML='<img id="drag31" class="czterMasz" style="left:0" src ="img/czterm_cz3.jpg" >';
		document.getElementById('font_com'+losuj4_cM).innerHTML='<img id="drag32" class="czterMasz" style="left:0" src ="img/czterm_cz4.jpg" >';
		
		switch(losuj1_cM){
				case 1:
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+14)).innerHTML='<div class="blokada"></div>';
				break;
				case 7:
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-6)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 97:
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+14)).innerHTML='<div class="blokada"></div>';
				break;
				case 17:
				case 27:
				case 37:
				case 47:
				case 57:
				case 67:
				case 77:
				case 87:
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+14)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-6)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-6)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1_cM+4)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-6)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+13)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_cM+14)).innerHTML='<div class="blokada"></div>';
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
		document.getElementById('font_com'+losuj1p_cM).innerHTML='<img id="drag33" class="czterMasz" style="left:0" src ="img/czterm_cz1_pion.jpg" >';
		document.getElementById('font_com'+losuj2p_cM).innerHTML='<img id="drag34" class="czterMasz" style="left:0" src ="img/czterm_cz2_pion.jpg" >';
		document.getElementById('font_com'+losuj3p_cM).innerHTML='<img id="drag35" class="czterMasz" style="left:0" src ="img/czterm_cz3_pion.jpg" >';
		document.getElementById('font_com'+losuj4p_cM).innerHTML='<img id="drag38" class="czterMasz" style="left:0" src ="img/czterm_cz4_pion.jpg" >';
		
		switch(losuj1p_cM){
				case 31:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div class="blokada"></div>';
					
				break;
				case 40:
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-39)).innerHTML='<div class="blokada"></div>';	
					document.getElementById('font_com'+(losuj1p_cM-40)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-38)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-39)).innerHTML='<div class="blokada"></div>';
				break;
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-39)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-40)).innerHTML='<div class="blokada"></div>';
				break;
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-31)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-40)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-41)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-31)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-31)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-39)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-40)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-41)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1p_cM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-31)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-39)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-40)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_cM-41)).innerHTML='<div class="blokada"></div>';
			}
		
		
		
	}
}
//-----------------------------------------------------------------------------------------------------------------
//--------------------------------------------losowanie trójmasztowców---------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


function losowanie_trojmasztowcow_gracz2()
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
								else if(document.getElementById('font_com'+losuj1_tM).hasChildNodes())
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj2_tM).hasChildNodes())
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj3_tM).hasChildNodes())
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
		document.getElementById('font_com'+losuj1_tM).innerHTML='<img id="drag17" class="trojMasz" style="left:0" src ="img/trojm_cz1.jpg" >';
		document.getElementById('font_com'+losuj2_tM).innerHTML='<img id="drag18" class="trojMasz" style="left:0" src ="img/trojm_cz2.jpg" >';
		document.getElementById('font_com'+losuj3_tM).innerHTML='<img id="drag19" class="trojMasz" style="left:0" src ="img/trojm_cz3.jpg" >';
		
		switch(losuj1_tM){
				case 1:
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
				break;
				case 8:
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 98:
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
				break;
				case 18:
				case 28:
				case 38:
				case 48:
				case 58:
				case 68:
				case 78:
				case 88:
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
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
																
								else if(document.getElementById('font_com'+losuj1p_tM).hasChildNodes())
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj2p_tM).hasChildNodes())
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj3p_tM).hasChildNodes())
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
		document.getElementById('font_com'+losuj1p_tM).innerHTML='<img id="drag20" class="trojMasz" style="left:0" src ="img/trojm_cz1_pion.jpg" >';
		document.getElementById('font_com'+losuj2p_tM).innerHTML='<img id="drag21" class="trojMasz" style="left:0" src ="img/trojm_cz2_pion.jpg" >';
		document.getElementById('font_com'+losuj3p_tM).innerHTML='<img id="drag22" class="trojMasz" style="left:0" src ="img/trojm_cz3_pion.jpg" >';
				
		switch(losuj1p_tM){
				case 21:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
				break;
				case 30:
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-28)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
				break;
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
				break;
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
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
								else if(document.getElementById('font_com'+losuj1_tM).hasChildNodes())
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj2_tM).hasChildNodes())
									{
										losuj1_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_tM=losuj1_tM+1;
										losuj3_tM=losuj2_tM+1;
										statekTMPoziom.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj3_tM).hasChildNodes())
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
		document.getElementById('font_com'+losuj1_tM).innerHTML='<img id="drag23" class="trojMasz" style="left:0" src ="img/trojm_cz1.jpg" >';
		document.getElementById('font_com'+losuj2_tM).innerHTML='<img id="drag24" class="trojMasz" style="left:0" src ="img/trojm_cz2.jpg" >';
		document.getElementById('font_com'+losuj3_tM).innerHTML='<img id="drag25" class="trojMasz" style="left:0" src ="img/trojm_cz3.jpg" >';
		
		switch(losuj1_tM){
				case 1:
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
				break;
				case 8:
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 98:
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
				break;
				case 18:
				case 28:
				case 38:
				case 48:
				case 58:
				case 68:
				case 78:
				case 88:
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1_tM+3)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-7)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_tM+13)).innerHTML='<div class="blokada"></div>';
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
																
								else if(document.getElementById('font_com'+losuj1p_tM).hasChildNodes())
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj2p_tM).hasChildNodes())
									{
										losuj1p_tM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_tM=losuj1p_tM-10;
										losuj3p_tM=losuj2p_tM-10;
										statekTMPion.sprawdzenie_pola();
									}
								else if(document.getElementById('font_com'+losuj3p_tM).hasChildNodes())
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
		document.getElementById('font_com'+losuj1p_tM).innerHTML='<img id="drag26" class="trojMasz" style="left:0" src ="img/trojm_cz1_pion.jpg" >';
		document.getElementById('font_com'+losuj2p_tM).innerHTML='<img id="drag27" class="trojMasz" style="left:0" src ="img/trojm_cz2_pion.jpg" >';
		document.getElementById('font_com'+losuj3p_tM).innerHTML='<img id="drag28" class="trojMasz" style="left:0" src ="img/trojm_cz3_pion.jpg" >';
				
		switch(losuj1p_tM){
				case 21:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
				break;
				case 30:
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-28)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
				break;
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
				break;
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1p_tM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-29)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-30)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_tM-31)).innerHTML='<div class="blokada"></div>';
			}
		
	}

}
//-----------------------------------------------------------------------------------------------------------------
//--------------------------------------------losowanie dwujmasztowców--------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
	function losowanie_dwumasztowcow_gracz2()
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
								if(document.getElementById('font_com'+losuj1_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
								if(document.getElementById('font_com'+losuj2_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekDMPoziom.sprawdzenie_pola();
	
		//alert(losuj1_dM);
		document.getElementById('font_com'+losuj1_dM).innerHTML='<img id="drag5" class="dwuMasz" style="left:0;" src ="img/dwum_cz1.jpg" ">';
		document.getElementById('font_com'+losuj2_dM).innerHTML='<img id="drag6" class="dwuMasz" style="left:0;" src ="img/dwum_cz2.jpg" ">';
		
		switch(losuj1_dM){
				case 1:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 9:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 99:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 19:
				case 29:
				case 39:
				case 49:
				case 59:
				case 69:
				case 79:
				case 89:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
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
								if(document.getElementById('font_com'+losuj1p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}
								if(document.getElementById('font_com'+losuj2p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekDMPion.sprawdzenie_pola();
		
		//alert(losuj1p_dM);
		document.getElementById('font_com'+losuj1p_dM).innerHTML='<img id="drag7" class="dwuMasz" style="left:0;" src ="img/dwum_cz1_pion.jpg" >';
		document.getElementById('font_com'+losuj2p_dM).innerHTML='<img id="drag8" class="dwuMasz" style="left:0;" src ="img/dwum_cz2_pion.jpg">';
		
		switch(losuj1p_dM){
				case 11:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
				break;
				case 20:
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
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
								if(document.getElementById('font_com'+losuj1_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
								if(document.getElementById('font_com'+losuj2_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekDMPoziom.sprawdzenie_pola();
	
		//alert(losuj1_dM);
		document.getElementById('font_com'+losuj1_dM).innerHTML='<img id="drag9" class="dwuMasz" style="left:0;" src ="img/dwum_cz1.jpg" ">';
		document.getElementById('font_com'+losuj2_dM).innerHTML='<img id="drag10" class="dwuMasz" style="left:0;" src ="img/dwum_cz2.jpg" ">';
		
		switch(losuj1_dM){
				case 1:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 9:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 99:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 19:
				case 29:
				case 39:
				case 49:
				case 59:
				case 69:
				case 79:
				case 89:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
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
								if(document.getElementById('font_com'+losuj1p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}
								if(document.getElementById('font_com'+losuj2p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekDMPion.sprawdzenie_pola();
		
		//alert(losuj1p_dM);
		document.getElementById('font_com'+losuj1p_dM).innerHTML='<img id="drag11" class="dwuMasz" style="left:0;" src ="img/dwum_cz1_pion.jpg">';
		document.getElementById('font_com'+losuj2p_dM).innerHTML='<img id="drag12" class="dwuMasz" style="left:0;" src ="img/dwum_cz2_pion.jpg">';
		
		switch(losuj1p_dM){
				case 11:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
				break;
				case 20:
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
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
								if(document.getElementById('font_com'+losuj1_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
								if(document.getElementById('font_com'+losuj2_dM).hasChildNodes())
									{
										losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2_dM=losuj1_dM+1;
										statekDMPoziom.sprawdzenie_pola();
									}
							}
					
						};
		
		
		statekDMPoziom.sprawdzenie_pola();
	
		//alert(losuj1_dM);
		document.getElementById('font_com'+losuj1_dM).innerHTML='<img id="drag13" class="dwuMasz" style="left:0;" src ="img/dwum_cz1.jpg">';
		document.getElementById('font_com'+losuj2_dM).innerHTML='<img id="drag14" class="dwuMasz" style="left:0;" src ="img/dwum_cz2.jpg">';
		
		switch(losuj1_dM){
				case 1:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 9:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 99:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
				break;
				case 19:
				case 29:
				case 39:
				case 49:
				case 59:
				case 69:
				case 79:
				case 89:
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1_dM+2)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-8)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_dM+12)).innerHTML='<div class="blokada"></div>';
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
								if(document.getElementById('font_com'+losuj1p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}
								if(document.getElementById('font_com'+losuj2p_dM).hasChildNodes())
									{
										losuj1p_dM=Math.floor(Math.random()*(max-min+1)+min);
										losuj2p_dM=losuj1p_dM-10;
										statekDMPion.sprawdzenie_pola();
									}

							}
					
						};
		
		
		statekDMPion.sprawdzenie_pola();
		
		//alert(losuj1p_dM);
		document.getElementById('font_com'+losuj1p_dM).innerHTML='<img id="drag15" class="dwuMasz" style="left:0;" src ="img/dwum_cz1_pion.jpg">';
		document.getElementById('font_com'+losuj2p_dM).innerHTML='<img id="drag16" class="dwuMasz" style="left:0;" src ="img/dwum_cz2_pion.jpg">';
		
		switch(losuj1p_dM){
				case 11:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
				break;
				case 20:
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
				break;
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
					
				break;
				default:
					document.getElementById('font_com'+(losuj1p_dM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-19)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-20)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1p_dM-21)).innerHTML='<div class="blokada"></div>';
			}
		
	}
	
}
//-----------------------------------------------------------------------------------------------------------------
//--------------------------------------------losowanie jednomasztowców--------------------------------------------
//-----------------------------------------------------------------------------------------------------------------	
function losowanie_jednomasztowcow_gracz2()
{
	const min=1;
	const max=100;
//---------------------------losowanie pierwszego statku - jednomasztowca---------------
	let content_jM1="";
	let content_jM2="";
	let content_jM3="";
	let content_jM4="";

	
	let losuj1_jM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj2_jM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj3_jM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj4_jM=Math.floor(Math.random()*(max-min+1)+min);

				while(document.getElementById('font_com'+losuj1_jM).hasChildNodes())
				{losuj1_jM=Math.floor(Math.random()*(max-min+1)+min);}
			
	
				content_jM1=content_jM1+'<img id="drag1" class="jedMasz" src ="img/jednomasztowiec.jpg">';
				
				document.getElementById('font_com'+losuj1_jM).innerHTML=content_jM1;
				
			switch(losuj1_jM){
				case 1:
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 10:
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 20:
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-9)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-11)).innerHTML='<div class="blokada"></div>';
				break;
				default:
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+11)).innerHTML='<div class="blokada"></div>';
			}
			
//----------------------------losowanie drugiego jednomasztowca-------------------------------

				while(document.getElementById('font_com'+losuj2_jM).hasChildNodes())
				{losuj2_jM=Math.floor(Math.random()*(max-min+1)+min);}
			
				content_jM2=content_jM2+'<img id="drag2" class="jedMasz" src ="img/jednomasztowiec.jpg">';
				
				document.getElementById('font_com'+losuj2_jM).innerHTML=content_jM2;
				
			switch(losuj2_jM){
				case 1:
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 10:
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 20:
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-9)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-11)).innerHTML='<div class="blokada"></div>';
				break;
				default:
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+11)).innerHTML='<div class="blokada"></div>';
			}

			//--------------------wstawianie trzeciego jednomasztowca---------------
			while(document.getElementById('font_com'+losuj3_jM).hasChildNodes())
				{losuj3_jM=Math.floor(Math.random()*(max-min+1)+min);}
			
			content_jM3=content_jM3+'<img id="drag3" class="jedMasz" src ="img/jednomasztowiec.jpg">';
				
				document.getElementById('font_com'+losuj3_jM).innerHTML=content_jM3;
				
			switch(losuj3_jM){
				case 1:
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 10:
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 20:
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-9)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-11)).innerHTML='<div class="blokada"></div>';
				break;
				default:
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+11)).innerHTML='<div class="blokada"></div>';
			}
//------------------------wstawianie czwartego jednomasztowca---------------
				while(document.getElementById('font_com'+losuj4_jM).hasChildNodes())
				{losuj4_jM=Math.floor(Math.random()*(max-min+1)+min);}
			
			
				content_jM4=content_jM4+'<img id="drag4" class="jedMasz" src ="img/jednomasztowiec.jpg">';
				
				document.getElementById('font_com'+losuj4_jM).innerHTML=content_jM4;
				
			switch(losuj4_jM){
				case 1:
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 10:
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div class="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div class="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-11)).innerHTML='<div class="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+11)).innerHTML='<div class="blokada"></div>';
				break;
				case 20:
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div class="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-9)).innerHTML='<div class="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-11)).innerHTML='<div class="blokada"></div>';
				break;
				default:
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-11)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+9)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div class="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+11)).innerHTML='<div class="blokada"></div>';
			}
}

btnLosuj_gracz2.addEventListener('click', function()
{
	
	losowanie_czteromasztowca_gracz2();
	losowanie_trojmasztowcow_gracz2();
	losowanie_dwumasztowcow_gracz2();
	losowanie_jednomasztowcow_gracz2();
	
});