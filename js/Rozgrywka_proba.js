var bitwa=document.getElementById('podsumowanie');

function rozgrywka_gracz_komputer(){
	
var licznik_gracza=0;
var licznik_komputera=0;
var tablica_strzalow_komp =[];
var tablica_trafionych_gracz =[];
var flaga_dwumasztowca;
var inne_pole=false;
var wylosowane_pole;
const min=1;
const max=2;	


	do{
		
	$('.wave_show').click(function(){
			//alert($(this));		
		
			
				if(($(this).children().hasClass('trafiony'))||($(this).children().hasClass('spudlowanie')))
				{
					alert("Już strzelałeś w te pole! Wybierz inne.");
					inne_pole=true;
					
				}else{
					
								if($(this).children().hasClass('jedMasz'))
								{
									//$(this).click=null;
										alert("Trafiłes jednomasztowca!");
										$(this).html('<img class="trafiony" src="img/Trafiony_jednomasztowiec.jpg">');
										$(this).click(function(){null});
										licznik_gracza++;
										tablica_trafionych_gracz.push($(this));
										//alert(licznik_gracza);
										inne_pole=false;
								}
								else if($(this).children().hasClass('dwuMasz'))
								{
										alert("Trafiłes dwumasztowca!");
										$(this).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
										licznik_gracza++;
										$(this).click(function(){null});
										tablica_trafionych_gracz.push($(this));
										//alert(licznik_gracza);
										inne_pole=false;
								}
								else if($(this).children().hasClass('trojMasz'))
								{
										alert("Trafiłes trójmasztowca!");
										$(this).html('<img class="trafiony" src="img/Trafiony_trojmasztowiec.jpg">');
										licznik_gracza++;
										$(this).click(function(){null});
										tablica_trafionych_gracz.push($(this));
										//alert(licznik_gracza);
										inne_pole=false;
								}
								else if($(this).children().hasClass('czterMasz'))
								{
										alert("Trafiłes czteromasztowca!");
										$(this).html('<img class="trafiony" src="img/Trafiony_czteromasztowiec.jpg">');
										licznik_gracza++;
										$(this).click(function(){null});
										tablica_trafionych_gracz.push($(this));
										//alert(licznik_gracza);
										inne_pole=false;
								}else
								{
									$(this).html('<img class="spudlowanie" class="pudlo" src="img/pudlo.jpg">');
									tablica_trafionych_gracz.push($(this));
									inne_pole=false;
								}
								
								if(licznik_gracza==20)
								{
									alert("WYGRAŁEŚ!!!");
									location.href='index.html';
									//break;
								}
								
								
				//------------------STRZAŁ KOMPUTERA---------------------------------------------------------------------------				
								setTimeout(function(){
								do
								{	
				//------------------trafienie dwumasztowca w kolejnym ruchu------------------------------------------------------------------
									if(flaga_dwumasztowca==true)
									{
										//alert("w ifie, gdy flaga dwumasztowa jest true "+wylosowane_pole);
										switch(wylosowane_pole){
											case 1:
													//tab_sprawdzen_dla_dwumasztowca.push(wylosowane_pole+2,wylosowane_pole+20)
													//let trafiony_dwumasztowiec=$('#font'+wylosowane_pole);
													let wylosowane_pole1=wylosowane_pole+2;
													let wylosowane_pole2=wylosowane_pole+12;
													let wylosowane_pole3=wylosowane_pole+20;
													let wylosowane_pole4=wylosowane_pole+21;
													
													if ($("font"+wylosowane_pole+1).hasClass('pudlo'))
													{
																	alert("Trafiono Twój dwumasztowiec, bo obok jest juz pudlo");
																	$('#font'+wylosowane_pole+10).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																	licznik_komputera++;
																	sprawdzenie=tablica_strzalow_komp.some(function(itm)
																			{
																				return itm===wylosowane_pole+10;
																			});
																	flaga_dwumasztowca=false;
																	tablica_strzalow_komp.push(wylosowane_pole+10);
																	null.dummy;
																	
													}else if($("font"+wylosowane_pole+10).hasClass('pudlo'))
													{
														
																	alert("Trafiono Twój dwumasztowiec, bo ponizej jest juz pudlo!");
																	$('#font'+wylosowane_pole+1).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																	licznik_komputera++;
																	sprawdzenie=tablica_strzalow_komp.some(function(itm)
																			{
																				return itm===wylosowane_pole+1;
																			});
																	flaga_dwumasztowca=false;
																	tablica_strzalow_komp.push(wylosowane_pole+1);
																	null.dummy;
														
													}
														
													
													
														if($('#font'+wylosowane_pole1).hasClass('trafiony')||$('#font'+wylosowane_pole2).hasClass('trafiony'))
															{
																	//wylosowane_pole=wylosowane_pole+10;
																	tablica_strzalow_komp.push(wylosowane_pole+1,wylosowane_pole+10,wylosowane_pole+11, wylosowane_pole+20, wylosowane_pole+21);
																				alert("Trafiono Twój dwumasztowiec, bo obok nie ma mozliwosci");
																				$('#font'+wylosowane_pole+10).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																				licznik_komputera++;
																				
																	sprawdzenie=tablica_strzalow_komp.some(function(itm)
																			{
																				return itm===wylosowane_pole+10;
																			});
																	flaga_dwumasztowca=false;
																	null.dummy; //funkcja (a właściwie zapis) przerywająca event
																	
														}else if($('#font'+wylosowane_pole3).hasClass('trafiony')||$('#font'+wylosowane_pole4).hasClass('trafiony'))
															{
																	//wylosowane_pole=wylosowane_pole+1;
																	tablica_strzalow_komp.push(wylosowane_pole-1,wylosowane_pole+2,wylosowane_pole+10,wylosowane_pole+11, wylosowane_pole+12);
																				alert("Trafiono Twój dwumasztowiec, bo ponizej nie ma mozliwosci");
																				$('#font'+wylosowane_pole+1).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																				licznik_komputera++;
																	sprawdzenie=tablica_strzalow_komp.some(function(itm)
																			{
																				return itm===wylosowane_pole+1;
																			});
																	flaga_dwumasztowca=false;
																	null.dummy;
														}else{
															
																	var tablica_pol_do_wykonczenia_dwumasztowca=[wylosowane_pole+1,wylosowane_pole+10];
																	let losowanie_pola=Math.round(Math.random());
																	let wylosowane_pole5=tablica_pol_do_wykonczenia_dwumasztowca[losowanie_pola];
																	let trafiony_dwumasztowiec2=$('#font'+wylosowane_pole5);
																	
																	if(trafiony_dwumasztowiec2.children().hasClass('dwuMasz'))
																		{
																				alert("Trafiono Twój dwumasztowiec w wyniku losowania!");
																				$('#font'+wylosowane_pole5).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																				licznik_komputera++;
																				
																				sprawdzenie=tablica_strzalow_komp.some(function(itm)
																							{
																								return itm===wylosowane_pole5;
																							});
																				tablica_strzalow_komp.push(wylosowane_pole+1, wylosowane_pole+10, wylosowane_pole+11);			
																				flaga_dwumasztowca=false;
																				null.dummy;
																				
																		}
																	else if (!(trafiony_dwumasztowiec2.children().hasClass('dwuMasz')))
																		{
																			
																		alert("Ustawiam jedynek i kropka");
																		trafiony_dwumasztowiec2.html('<img class="pudlo" src="img/pudlo.jpg">');
																		tablica_strzalow_komp.push(wylosowane_pole5);	
																		null.dummy;
																		}
																	
															}
											
											break;
								





















								
											case 2:
											alert("w ifie, gdy flaga dwumasztowa jest true "+wylosowane_pole);
													let pole_z_lewej=document.getElementById('font'+(wylosowane_pole-1));
													let pole_z_prawej=document.getElementById('font'+(wylosowane_pole+1));
													let pole_ponizej=document.getElementById('font'+(wylosowane_pole+10));
													let wylosowane_pole11=wylosowane_pole+2;
													let wylosowane_pole22=wylosowane_pole+12;
													let wylosowane_pole33=wylosowane_pole+19;
													let wylosowane_pole44=wylosowane_pole+20;
													let wylosowane_pole55=wylosowane_pole+21;
													
													if (pole_z_prawej.hasClass('pudlo')&&pole_ponizej.hasClass('pudlo'))
													{
																	alert("Trafiono Twój dwumasztowiec1");
																	$('#font'+wylosowane_pole-1).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																	licznik_komputera++;
																	sprawdzenie=tablica_strzalow_komp.some(function(itm)
																			{
																				return itm===wylosowane_pole-1;
																			});
																			tablica_strzalow_komp.push(wylosowane_pole-1);
																	flaga_dwumasztowca=false;
																	null.dummy;
																	
													}else if(pole_z_lewej.hasClass('pudlo')&&pole_z_prawej.hasClass('pudlo'))
													{
														
																	alert("Trafiono Twój dwumasztowiec2!");
																	$('#font'+wylosowane_pole+10).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																	licznik_komputera++;
																	sprawdzenie=tablica_strzalow_komp.some(function(itm)
																			{
																				return itm===wylosowane_pole+10;
																			});
																	tablica_strzalow_komp.push(wylosowane_pole+10);
																	flaga_dwumasztowca=false;
																	null.dummy;
														
													}else if(pole_ponizej.hasClass('pudlo')&&pole_z_lewej.hasClass('pudlo'))
													{
														
																	alert("Trafiono Twój dwumasztowiec2!");
																	$('#font'+wylosowane_pole+1).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																	licznik_komputera++;
																	sprawdzenie=tablica_strzalow_komp.some(function(itm)
																			{
																				return itm===wylosowane_pole+1;
																			});
																	tablica_strzalow_komp.push(wylosowane_pole+1);
																	flaga_dwumasztowca=false;
																	null.dummy;
														
													}
														
													
													
													if($('#font'+wylosowane_pole11).hasClass('trafiony')||$('#font'+wylosowane_pole22).hasClass('trafiony'))
														{
																	//wylosowane_pole=wylosowane_pole+10;
																	tablica_strzalow_komp.push(wylosowane_pole+1,wylosowane_pole+11);
																				pole_z_prawej.html('<img class="pudlo">');
																				$('#font'+(wylosowane_pole+11)).html('<img class="pudlo">');
																
																																		
														}
														
													if($('#font'+wylosowane_pole33).hasClass('trafiony')||$('#font'+wylosowane_pole44).hasClass('trafiony')||$('#font'+wylosowane_pole55).hasClass('trafiony'))
														{
																	//wylosowane_pole=wylosowane_pole+1;
																	tablica_strzalow_komp.push(wylosowane_pole+9,wylosowane_pole+10,wylosowane_pole+11);
																				$('#font'+(wylosowane_pole+9)).html('<img class="pudlo">');
																				pole_ponizej.html('<img class="pudlo">');
																				$('#font'+(wylosowane_pole+11)).html('<img class="pudlo">');
																				
														}
														
													if(pole_z_prawej.hasClass("pudlo"))
														
														{
															
																	var tablica_pol_do_wykonczenia_dwumasztowca=[wylosowane_pole-1,wylosowane_pole+10];
																	let losowanie_pola=Math.round(Math.random());
																	let wylosowane_pole6=tablica_pol_do_wykonczenia_dwumasztowca[losowanie_pola];
																	let trafiony_dwumasztowiec2=$('#font'+wylosowane_pole6);
																	
																	if(trafiony_dwumasztowiec2.children().hasClass('dwuMasz'))
																		{
																				alert("Trafiono Twój dwumasztowiec3!");
																				$('#font'+wylosowane_pole6).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																				licznik_komputera++;
																	
																				flaga_dwumasztowca=false;
																				
																				sprawdzenie=tablica_strzalow_komp.some(function(itm)
																							{
																								return itm===wylosowane_pole6;
																							});
																				tablica_strzalow_komp.push(wylosowane_pole6);
																				null.dummy;
																		}
																	else if (!(trafiony_dwumasztowiec2.children().hasClass('dwuMasz')))
																		{
																			
																		alert("Ustawiam jedynek i kropka11");
																		trafiony_dwumasztowiec2.html('<img class="pudlo" src="img/pudlo.jpg">');
																		tablica_strzalow_komp.push(wylosowane_pole6);
																		null.dummy;
																		}
																	
													}else if(pole_ponizej.hasClass("pudlo"))
															
													{
																var tablica_pol_do_wykonczenia_dwumasztowca=[wylosowane_pole-1,wylosowane_pole+1];
																		let losowanie_pola=Math.round(Math.random());
																		let wylosowane_pole7=tablica_pol_do_wykonczenia_dwumasztowca[losowanie_pola];
																		let trafiony_dwumasztowiec2=$('#font'+wylosowane_pole7);
																		
																		if(trafiony_dwumasztowiec2.children().hasClass('dwuMasz'))
																			{
																					alert("Trafiono Twój dwumasztowiec3!");
																					$('#font'+wylosowane_pole7).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																					licznik_komputera++;
																		
																					flaga_dwumasztowca=false;
																					
																					sprawdzenie=tablica_strzalow_komp.some(function(itm)
																								{
																									return itm===wylosowane_pole7;
																								});
																					tablica_strzalow_komp.push(wylosowane_pole7);
																					null.dummy;
																			}
																		else if (!(trafiony_dwumasztowiec2.children().hasClass('dwuMasz')))
																			{
																				
																			alert("Ustawiam jedynek i kropka22");
																			trafiony_dwumasztowiec2.html('<img class="pudlo" src="img/pudlo.jpg">');
																			tablica_strzalow_komp.push(wylosowane_pole7);
																			null.dummy;
																			}
															
															
															
													}else if(pole_z_lewej.hasClass("pudlo"))
															
															{
																var tablica_pol_do_wykonczenia_dwumasztowca=[wylosowane_pole+1,wylosowane_pole+10];
																		let losowanie_pola=Math.round(Math.random());
																		let wylosowane_pole7=tablica_pol_do_wykonczenia_dwumasztowca[losowanie_pola];
																		let trafiony_dwumasztowiec2=$('#font'+wylosowane_pole7);
																		
																		if(trafiony_dwumasztowiec2.children().hasClass('dwuMasz'))
																			{
																					alert("Trafiono Twój dwumasztowiec3!");
																					$('#font'+wylosowane_pole7).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																					licznik_komputera++;
																		
																					flaga_dwumasztowca=false;
																					
																					sprawdzenie=tablica_strzalow_komp.some(function(itm)
																								{
																									return itm===wylosowane_pole7;
																								});
																					tablica_strzalow_komp.push(wylosowane_pole7);
																					null.dummy;
																			}
																		else if (!(trafiony_dwumasztowiec2.children().hasClass('dwuMasz')))
																			{
																				
																			alert("Ustawiam jedynek i kropka33");
																			trafiony_dwumasztowiec2.html('<img class="pudlo" src="img/pudlo.jpg">');
																			tablica_strzalow_komp.push(wylosowane_pole7);
																			null.dummy;
																			}
															
														}else
															
															{
																var tablica_pol_do_wykonczenia_dwumasztowca=[wylosowane_pole-1,wylosowane_pole+1, ,wylosowane_pole+10];
																		let losowanie_pola=Math.floor(Math.random()*(2-0+1))+0;
																		let wylosowane_pole9=tablica_pol_do_wykonczenia_dwumasztowca[losowanie_pola];
																		let trafiony_dwumasztowiec2=$('#font'+wylosowane_pole9);
																		alert(trafiony_dwumasztowiec2.value);
																		if(trafiony_dwumasztowiec2.children().hasClass('dwuMasz'))
																			{
																					alert("Trafiono Twój dwumasztowiec3!");
																					$('#font'+wylosowane_pole9).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
																					licznik_komputera++;
																		
																					flaga_dwumasztowca=false;
																					
																					sprawdzenie=tablica_strzalow_komp.some(function(itm)
																								{
																									return itm===wylosowane_pole9;
																								});
																					tablica_strzalow_komp.push(wylosowane_pole9);
																					null.dummy;
																			}
																		else if (!(trafiony_dwumasztowiec2.children().hasClass('dwuMasz')))
																			{
																				
																			alert("Ustawiam jedynke i kropka44");
																			trafiony_dwumasztowiec2.html('<img class="pudlo" src="img/pudlo.jpg">');
																			tablica_strzalow_komp.push(wylosowane_pole9);
																			null.dummy;
																			}
															}
											
											break;
										}
				























				
											
									}
									else{
														wylosowane_pole= Math.floor(Math.random()*(max-min+1))+min;
														tablica_strzalow_komp.sort();
														var sprawdzenie=tablica_strzalow_komp.some(function(itm)
																{
																	return itm===wylosowane_pole;
																});
										}
								}
								while(sprawdzenie);
								//}
								
								
								//alert("Wylosowany nr po sprawdzeniu w tablicy: "+wylosowane_pole);
								var trafiony_font = $('#font'+wylosowane_pole);
								tablica_strzalow_komp.push(wylosowane_pole);
								tablica_strzalow_komp.sort();
								alert("Elementy już w tablicy po losowaniu: "+tablica_strzalow_komp);
								
								if(trafiony_font.children().hasClass('jedMasz'))
								{
										alert("Trafiono Twój jednomasztowiec!");
										$('#font'+wylosowane_pole).html('<img class="trafiony" src="img/Trafiony_jednomasztowiec.jpg">');
										licznik_komputera++;
										
										
										switch(wylosowane_pole){
										case 1:
											tablica_strzalow_komp.push(wylosowane_pole+1,wylosowane_pole+10,wylosowane_pole+11);
										break;
										case 10:
											tablica_strzalow_komp.push(wylosowane_pole-1,wylosowane_pole+10,wylosowane_pole+9);
										break;
										case 91:
											tablica_strzalow_komp.push(wylosowane_pole+1,wylosowane_pole-9,wylosowane_pole-10);
										break;
										case 100:
											tablica_strzalow_komp.push(wylosowane_pole-1,wylosowane_pole-10,wylosowane_pole-11);
										break;
										case 2:
										case 3:
										case 4:
										case 5:
										case 6:
										case 7:
										case 8:
										case 9:
											tablica_strzalow_komp.push(wylosowane_pole+1,wylosowane_pole-1,wylosowane_pole+10,wylosowane_pole+9,wylosowane_pole+11);
										break;
										case 20:
										case 30:
										case 40:
										case 50:
										case 60:
										case 70:
										case 80:
										case 90:
											tablica_strzalow_komp.push(wylosowane_pole-1,wylosowane_pole+10,wylosowane_pole-10,wylosowane_pole+9,wylosowane_pole-11);
										break;
										case 11:
										case 21:
										case 31:
										case 41:
										case 51:
										case 61:
										case 71:
										case 81:
											tablica_strzalow_komp.push(wylosowane_pole+1,wylosowane_pole+10,wylosowane_pole-10,wylosowane_pole+11,wylosowane_pole-9);
										break;
										case 92:
										case 93:
										case 94:
										case 95:
										case 96:
										case 97:
										case 98:
										case 99:
											tablica_strzalow_komp.push(wylosowane_pole+1,wylosowane_pole-1,wylosowane_pole-10,wylosowane_pole-9,wylosowane_pole-11);
										default:
											tablica_strzalow_komp.push(wylosowane_pole+1,wylosowane_pole-1,wylosowane_pole+10,wylosowane_pole-10,wylosowane_pole+9,wylosowane_pole+11,wylosowane_pole-9,wylosowane_pole-11);
									}

										tablica_strzalow_komp.sort();
								}
								else if(trafiony_font.children().hasClass('dwuMasz'))
								{
										alert("Trafiono Twój dwumasztowiec!");
										$('#font'+wylosowane_pole).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
										licznik_komputera++;
										flaga_dwumasztowca=true;
										
										
								}
								else if(trafiony_font.children().hasClass('trojMasz'))
								{
										alert("Trafiono Twój trojmasztowiec!");
										$('#font'+wylosowane_pole).html('<img class="trafiony" src="img/Trafiony_trojmasztowiec.jpg">');
										licznik_komputera++;
								}
								else if(trafiony_font.children().hasClass('czterMasz'))
								{
										alert("Trafiono Twój czteromasztowiec!");
										$('#font'+wylosowane_pole).html('<img class="trafiony" src="img/Trafiony_czteromasztowiec.jpg">');
										licznik_komputera++;
								}
								else
								{
									$('#font'+wylosowane_pole).html('<img class="pudlo" src="img/pudlo.jpg">');
								}	
								
								
								if(licznik_komputera==20)
								{
									alert("PRZEGRAŁEŚ!!!");
									location.href='index.html';
									//break;
								}
							},1000);
							
						}	
				
			})

	}while(inne_pole);
							
};


bitwa.addEventListener('click',rozgrywka_gracz_komputer);
 
