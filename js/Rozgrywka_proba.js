var bitwa=document.getElementById('podsumowanie');

function rozgrywka_gracz_komputer(){
	
var licznik_gracza=0;
var licznik_komputera=0;
var tablica_trafionych_komp =[];
var tablica_trafionych_gracz =[];
const min=1;
const max=100;	

$('.wave_show').click(function(){
	//alert($(this));		
			if(($(this).children().hasClass('trafiony'))($(this).children().hasClass('spudlowanie')))
			{
				alert("Już strzelałeś w te pole! Wybierz inne.");
				null.dummy;
				
			}
			
			else if($(this).children().hasClass('jedMasz'))
			{
				//$(this).click=null;
					alert("Trafiłes jednomasztowca!");
					$(this).html('<img class="trafiony" src="img/Trafiony_jednomasztowiec.jpg">');
					$(this).click(function(){null});
					licznik_gracza++;
					tablica_trafionych_gracz.push($(this));
					//alert(licznik_gracza);
			}
			else if($(this).children().hasClass('dwuMasz'))
			{
					alert("Trafiłes dwumasztowca!");
					$(this).html('<img class="trafiony" src="img/Trafiony_dwumasztowiec.jpg">');
					licznik_gracza++;
					$(this).click(function(){null});
					tablica_trafionych_gracz.push($(this));
					//alert(licznik_gracza);
			}
			else if($(this).children().hasClass('trojMasz'))
			{
					alert("Trafiłes trójmasztowca!");
					$(this).html('<img class="trafiony" src="img/Trafiony_trojmasztowiec.jpg">');
					licznik_gracza++;
					$(this).click(function(){null});
					tablica_trafionych_gracz.push($(this));
					//alert(licznik_gracza);
			}
			else if($(this).children().hasClass('czterMasz'))
			{
					alert("Trafiłes czteromasztowca!");
					$(this).html('<img class="trafiony" src="img/Trafiony_czteromasztowiec.jpg">');
					licznik_gracza++;
					$(this).click(function(){null});
					tablica_trafionych_gracz.push($(this));
					//alert(licznik_gracza);
			}else
			{
				$(this).html('<img class="spudlowanie" id="pudlo" src="img/pudlo.jpg">');
				tablica_trafionych_gracz.push($(this));
			}
			
			
			if(licznik_gracza==20)
					{
						alert("WYGRAŁEŚ!!!");
						location.href='index.html';
						//break;
					}
		
	
	}).click(function(){
		
//------------------STRZAŁ KOMPUTERA----------------------------------------
		
		do
		{
			var wylosowane_pole= Math.floor(Math.random()*(max-min+1))+min;
			tablica_trafionych_komp.sort();
			var sprawdzenie=tablica_trafionych_komp.some(function(itm)
					{
						return itm===wylosowane_pole;
					});
		}
		while(sprawdzenie);
		//}
		
		//alert("Elementy już w tablicy: "+tablica_trafionych_komp);
		//alert("Wylosowany nr po sprawdzeniu w tablicy: "+wylosowane_pole);
		var trafiony_font = $('#font'+wylosowane_pole);
		tablica_trafionych_komp.push(wylosowane_pole);
		tablica_trafionych_komp.sort();
		
		if(trafiony_font.children().hasClass('jedMasz'))
		{
				alert("Trafiono Twój jednomasztowiec!");
				$('#font'+wylosowane_pole).html('<img id="trafiony1" src="img/Trafiony_jednomasztowiec.jpg">');
				licznik_komputera++;
				
				
				switch(wylosowane_pole){
				case 1:
					tablica_trafionych_komp.push(wylosowane_pole+1,wylosowane_pole+10,wylosowane_pole+11);
				break;
				case 10:
					tablica_trafionych_komp.push(wylosowane_pole-1,wylosowane_pole+10,wylosowane_pole+9);
				break;
				case 91:
					tablica_trafionych_komp.push(wylosowane_pole+1,wylosowane_pole-9,wylosowane_pole-10);
				break;
				case 100:
					tablica_trafionych_komp.push(wylosowane_pole-1,wylosowane_pole-10,wylosowane_pole-11);
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					tablica_trafionych_komp.push(wylosowane_pole+1,wylosowane_pole-1,wylosowane_pole+10,wylosowane_pole+9,wylosowane_pole+11);
				break;
				case 20:
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					tablica_trafionych_komp.push(wylosowane_pole-1,wylosowane_pole+10,wylosowane_pole-10,wylosowane_pole+9,wylosowane_pole-11);
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					tablica_trafionych_komp.push(wylosowane_pole+1,wylosowane_pole+10,wylosowane_pole-10,wylosowane_pole+11,wylosowane_pole-9);
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					tablica_trafionych_komp.push(wylosowane_pole+1,wylosowane_pole-1,wylosowane_pole-10,wylosowane_pole-9,wylosowane_pole-11);
				default:
					tablica_trafionych_komp.push(wylosowane_pole+1,wylosowane_pole-1,wylosowane_pole+10,wylosowane_pole-10,wylosowane_pole+9,wylosowane_pole+11,wylosowane_pole-9,wylosowane_pole-11);
			}

				tablica_trafionych_komp.sort();
		}
		else if(trafiony_font.children().hasClass('dwuMasz'))
		{
				alert("Trafiono Twój dwumasztowiec!");
				$('#font'+wylosowane_pole).html('<img id="trafiony2" src="img/Trafiony_dwumasztowiec.jpg">');
				licznik_komputera++;
				//trafiony_dwumasztowiec=true;
				
				
		}
		else if(trafiony_font.children().hasClass('trojMasz'))
		{
				alert("Trafiono Twój trojmasztowiec!");
				$('#font'+wylosowane_pole).html('<img id="trafiony3" src="img/Trafiony_trojmasztowiec.jpg">');
				licznik_komputera++;
		}
		else if(trafiony_font.children().hasClass('czterMasz'))
		{
				alert("Trafiono Twój czteromasztowiec!");
				$('#font'+wylosowane_pole).html('<img id="trafiony4" src="img/Trafiony_czteromasztowiec.jpg">');
				licznik_komputera++;
		}
		else
		{
			$('#font'+wylosowane_pole).html('<img id="pudlo" src="img/pudlo.jpg">');
		}	
		
		
		if(licznik_komputera==20)
		{
			alert("PRZEGRAŁEŚ!!!");
			location.href='index.html';
			//break;
		}
	
})
};

bitwa.addEventListener('click',rozgrywka_gracz_komputer);
 
