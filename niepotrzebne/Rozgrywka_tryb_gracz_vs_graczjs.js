$(document).ready(function(){	
	var licznik_gracza1=0;
	var licznik_gracza2=0;
	
	$('#poddanie_gracz2').css('display','none');
	//$('#poddanie').css('display','block');
	$('.wave_show').css('cursor','pointer');
	//$('.wave_show').hover.css('backgroundColor','lightgreen');
	$('.wave_show').click(function(){
		
				if($(this).children().hasClass('jedMasz'))
				{
					//$(this).click=null;
						alert("Trafiłes jednomasztowca!");
						$(this).html('<img class="trafiony1" src="img/Trafiony_jednomasztowiec.jpg">');
						$(this).click=null;
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else if($(this).children().hasClass('dwuMasz'))
				{
						alert("Trafiłes dwumasztowca!");
						$(this).html('<img class="trafiony2" src="img/Trafiony_dwumasztowiec.jpg">');
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else if($(this).children().hasClass('trojMasz'))
				{
						alert("Trafiłes trójmasztowca!");
						$(this).html('<img class="trafiony3" src="img/Trafiony_trojmasztowiec.jpg">');
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else if($(this).children().hasClass('czterMasz'))
				{
						alert("Trafiłes czteromasztowca!");
						$(this).html('<img class="trafiony4" src="img/Trafiony_czteromasztowiec.jpg">');
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else
				{
					$(this).html('<img id="pudlo" src="img/pudlo.jpg">');
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
				

		});
		
		
		$('.wave').click(function(){

				if($(this).children().hasClass('jedMasz'))
				{
					//$(this).click=null;
						alert("Trafiłes jednomasztowca!");
						$(this).html('<img class="trafiony1" src="img/Trafiony_jednomasztowiec.jpg">');
						$(this).click=null;
						licznik_gracza2++;
						//alert(licznik_gracza1);
				}
				else if($(this).children().hasClass('dwuMasz'))
				{
						alert("Trafiłes dwumasztowca!");
						$(this).html('<img class="trafiony2" src="img/Trafiony_dwumasztowiec.jpg">');
						licznik_gracza2++;
						//alert(licznik_gracza1);
				}
				else if($(this).children().hasClass('trojMasz'))
				{
						alert("Trafiłes trójmasztowca!");
						$(this).html('<img class="trafiony3" src="img/Trafiony_trojmasztowiec.jpg">');
						licznik_gracza2++;
						//alert(licznik_gracza1);
				}
				else if($(this).children().hasClass('czterMasz'))
				{
						alert("Trafiłes czteromasztowca!");
						$(this).html('<img class="trafiony4" src="img/Trafiony_czteromasztowiec.jpg">');
						licznik_gracza2++;
						//alert(licznik_gracza1);
				}
				else
				{
					$(this).html('<img id="pudlo" src="img/pudlo.jpg">');
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
				
		
		});
		
		$('#poddanie_gracz2').click(function(){
			
			
			if(confirm('JESTEŚ PEWIEN, ŻE CHCESZ PORZUCIĆ SWOJĄ FLOTĘ? WYGRA GRACZ_1...'))
					{
						alert('DO STU DIABŁÓW! FLOTA GRACZa_2 ZATONĘŁA!...WYGRYWA GRACZ_1!');
						location.href='index.html';
					}
			
			
		});
		
		$('#poddanie1').click(function(){
			
			
			if(confirm('JESTEŚ PEWIEN, ŻE CHCESZ PORZUCIĆ SWOJĄ FLOTĘ? WYGRA GRACZ_2...'))
					{
						alert('DO STU DIABŁÓW! FLOTA GRACZa_2 ZATONĘŁA!...WYGRYWA GRACZ_2!');
						location.href='index.html';
					}
			
			
		});
});		



