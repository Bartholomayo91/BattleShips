var walidacja_gracz2=document.getElementById('podsumowanie_gracz2');
var poddanie_1=document.getElementById('poddanie1');
var poddanie_2=document.getElementById('poddanie_gracz2');
var uderzenie_gracz1=document.getElementsByTagName('wave_show');
var uderzenie_gracz2=document.getElementsByTagName('wave');
var licznik_gracza1=0;
var licznik_gracza2=0;


function podsumowanie_gracz2(){
		
		let tablica_gracza2=[];
		
		for (i=1;i<=100;i++)
			{
				let pole2="font_com"+i;
				let uchwyt2=document.getElementById(pole2);
				uchwyt2.childNodes;
				
				if(uchwyt2.hasChildNodes())
				{
					uchwyt2.childNodes;
					if(uchwyt2.firstChild.hasAttribute('id'))
					{
							tablica_gracza2.push(pole2);
					}
				}
			}
			
		if(tablica_gracza2.length<20)
		{
				alert("Nie ustawiłeś wszystkich statków!");
		}
		
		else
		{
			for(i=1;i<=100;i++)
			{
					let pole2 = 'font_com'+i;
					if($(pole2).children().hasClass('jedMasz'))
					{
						$(pole2).html('<div class="jedMasz_2"></div>');
						tablica_gracza2.push(pole2);
						
					}
					else if($(pole2).children().hasClass('dwuMasz'))
					{
							//alert("Trafiłes dwumasztowca!");
							$(pole2).html('<div class="dwuMasz_2"></div>')
							tablica_gracza2.push(pole2);
					}
					else if($(pole2).children().hasClass('trojMasz'))
					{
							//alert("Trafiłes trójmasztowca!");
							$(pole2).html('<div class="trojMasz_2"></div>')
							tablica_gracza2.push(pole2);
					}
					else if($(pole2).children().hasClass('czterMasz'))
					{
							//alert("Trafiłes czteromasztowca!");
							$(pole2).html('<div class="czterMasz_2"></div>')
							tablica_gracza2.push(pole2);
					}
							
			}
		
			
			$('#info_gracz1').css('display','block')
			$('#info_gracz1').html('<b style="color: green"><i>GRACZ_1</i></b> ROZPOCZYNA ROZGRYWKĘ!! (kliknij na wybrane pole).');
			$('#conteinerOfShips2').css('display','none');
			$('#conteinerOfFields2').css('margin-left','35%');
			$('#podsumowanie_gracz2').css('display','none');
			$('#losowanie_gracz2').css('display','none');
			$('#resetuj_gracz2').css('display','none');
			$('#powrot_do_menu2').css('display','none');
			$('#poddanie_gracz2').css('display','none');
			$('#poddanie1').css('display','block');
			$('#poddanie1').css('margin-left','50px');
			//$('#board-2').css('margin-left','-170%');
		}
	
	};
	
	
function uderzenie1(){

	$('#poddanie_gracz2').css('display','none');
	//$('#poddanie').css('display','block');
	$('.wave_show').css('cursor','pointer');
	//$('.wave_show').hover.css('backgroundColor','lightgreen');
	
		
				if($(uderzenie_gracz1).children().hasClass('jedMasz_2'))
				{
					//$(this).click=null;
						alert("Trafiłes jednomasztowca!");
						$(uderzenie_gracz1).html('<img class="trafiony1" src="img/Trafiony_jednomasztowiec.jpg">');
						//$(uderzenie_gracz1).click=null;
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else if($(uderzenie_gracz1).children().hasClass('dwuMasz_2'))
				{
						alert("Trafiłes dwumasztowca!");
						$(uderzenie_gracz1).html('<img class="trafiony2" src="img/Trafiony_dwumasztowiec.jpg">');
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else if($(uderzenie_gracz1).children().hasClass('trojMasz_2'))
				{
						alert("Trafiłes trójmasztowca!");
						$(uderzenie_gracz1).html('<img class="trafiony3" src="img/Trafiony_trojmasztowiec.jpg">');
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else if($(uderzenie_gracz1).children().hasClass('czterMasz_2'))
				{
						alert("Trafiłes czteromasztowca!");
						$(uderzenie_gracz1).html('<img class="trafiony4" src="img/Trafiony_czteromasztowiec.jpg">');
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else
				{
					$(uderzenie_gracz1).html('<img id="pudlo" src="img/pudlo.jpg">');
					alert("PUDŁO!!!");
				}
				
				if(licznik_gracza1==20)
						{
							alert("GRACZ_1 - WYGRAŁEŚ!!!");
							location.href='index.html';
							//break;
						}
						
				alert("TERAZ KOLEJ GRACZA_2");
				$('#board-2').css('display','none');
				$('#board-1').css('display','block');
				$('#info_gracz1').html('<b style="color: green"><i>GRACZ_2</i></b> ATAKUJE!! (kliknij na wybrane pole).');
				$('#poddanie1').css('display','none');
				$('#poddanie_gracz2').css('display','block');
				$('#poddanie_gracz2').css('margin-left','50px');
				$('.wave').css('cursor','pointer');
				

};

function uderzenie2(){
		
				if($(uderzenie_gracz2).children().hasClass('jedMasz'))
				{
					//$(this).click=null;
						alert("Trafiłes jednomasztowca!");
						$(uderzenie_gracz2).html('<img class="trafiony1" src="img/Trafiony_jednomasztowiec.jpg">');
						//$(this).click=null;
						licznik_gracza2++;
						//alert(licznik_gracza1);
				}
				else if($(uderzenie_gracz2).children().hasClass('dwuMasz'))
				{
						alert("Trafiłes dwumasztowca!");
						$(uderzenie_gracz2).html('<img class="trafiony2" src="img/Trafiony_dwumasztowiec.jpg">');
						licznik_gracza2++;
						//alert(licznik_gracza1);
				}
				else if($(uderzenie_gracz2).children().hasClass('trojMasz'))
				{
						alert("Trafiłes trójmasztowca!");
						$(uderzenie_gracz2).html('<img class="trafiony3" src="img/Trafiony_trojmasztowiec.jpg">');
						licznik_gracza2++;
						//alert(licznik_gracza1);
				}
				else if($(uderzenie_gracz2).children().hasClass('czterMasz'))
				{
						alert("Trafiłes czteromasztowca!");
						$(uderzenie_gracz2).html('<img class="trafiony4" src="img/Trafiony_czteromasztowiec.jpg">');
						licznik_gracza2++;
						//alert(licznik_gracza1);
				}
				else
				{
					$(uderzenie_gracz2).html('<img id="pudlo" src="img/pudlo.jpg">');
					alert("PUDŁO!!!");
				}
				
				if(licznik_gracza2==20)
						{
							alert("GRACZ_2 - WYGRAŁEŚ!!!");
							location.href='index.html';
							//break;
						}
						
				alert("TERAZ KOLEJ GRACZA_1");
				$('#board-1').css('display','none');
				$('#board-2').css('display','block');
				$('#info_gracz1').html('<b style="color: green"><i>GRACZ_1</i></b> ATAKUJE!! (kliknij na wybrane pole).');
				$('#poddanie_gracz2').css('display','none');
				$('#poddanie1').css('display','block');
				$('#poddanie1').css('margin-left','50px');
				$('.wave').css('cursor','pointer');
			
				//$('#przyciski_gracz1').css('display','none');
				
		
};

function poddanieGracz1(){
		
		
			if(confirm('JESTEŚ PEWIEN, ŻE CHCESZ PORZUCIĆ SWOJĄ FLOTĘ? WYGRA GRACZ_1...'))
					{
						alert('DO STU DIABŁÓW! FLOTA GRACZa_2 ZATONĘŁA!...WYGRYWA GRACZ_1!');
						location.href='index.html';
					}
			
			
};
		
function poddanieGracz2(){
			
			
			if(confirm('JESTEŚ PEWIEN, ŻE CHCESZ PORZUCIĆ SWOJĄ FLOTĘ? WYGRA GRACZ_2...'))
					{
						alert('DO STU DIABŁÓW! FLOTA GRACZa_2 ZATONĘŁA!...WYGRYWA GRACZ_2!');
						location.href='index.html';
					}
			
			
};

walidacja_gracz2.addEventListener('click', podsumowanie_gracz2);
//uderzenie_gracz1.addEventListener('click', uderzenie1);
//uderzenie_gracz2.addEventListener('click', uderzenie2);
poddanie_1.addEventListener('click', poddanieGracz1);
poddanie_2.addEventListener('click', poddanieGracz2);

	

	

	
	
		

