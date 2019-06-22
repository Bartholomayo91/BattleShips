var rozpoczecie_gry=document.getElementById('podsumowanie_gracz2');
var poddanie_1=document.getElementById('poddanie1');
var poddanie_2=document.getElementById('poddanie_gracz2');
var uderzenie_gracz1=document.getElementsByTagName('wave_show');
var uderzenie_gracz2=document.getElementsByTagName('wave');
var licznik_gracza1=0;
var licznik_gracza2=0;

function rozpoczecie()
{
	alert("NIECH ROZPOCZNIE SIE RZEŹ!!");	
};
	
function uderzenie1(){

	$('#poddanie_gracz2').css('display','none');
	$('.wave_show').css('cursor','pointer');
	$('#plansza_gracz2').css('margin-top','-29px');
	
	
	$('.wave_show').click(function(){	
				if($(this).children().hasClass('jedMasz_2'))
				{
					//$(this).click=null;
						alert("Trafiłes jednomasztowca!");
						$(this).html('<img class="trafiony1" src="img/Trafiony_jednomasztowiec.jpg">');
						//$(uderzenie_gracz1).click=null;
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else if($(this).children().hasClass('dwuMasz_2'))
				{
						alert("Trafiłes dwumasztowca!");
						$(this).html('<img class="trafiony2" src="img/Trafiony_dwumasztowiec.jpg">');
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else if($(this).children().hasClass('trojMasz_2'))
				{
						alert("Trafiłes trójmasztowca!");
						$(this).html('<img class="trafiony3" src="img/Trafiony_trojmasztowiec.jpg">');
						licznik_gracza1++;
						//alert(licznik_gracza1);
				}
				else if($(this).children().hasClass('czterMasz_2'))
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
							
						}
						
				//alert("TERAZ KOLEJ GRACZA_2");
				$('#board-2').css('display','none');
				$('#conteinerOfFields').css('display','block');
				$('#board-1').css('display','block');
				$('#info_gracz1').html('<b style="color: black"><i>GRACZ_2</i></b> ATAKUJE!! (kliknij na wybrane pole).');
				$('#poddanie1').css('display','none');
				$('#poddanie_gracz2').css('display','block');
				$('#poddanie_gracz2').css('margin-left','50%');
				$('#poddanie_gracz2').css('margin-top','2%');
				$('.wave').css('cursor','pointer');
				


				})
}

function uderzenie2(){
		$('.wave').click(function(){
				if($(this).children().hasClass('jedMasz'))
				{
					
						alert("Trafiłes jednomasztowca!");
						$(this).html('<img class="trafiony1" src="img/Trafiony_jednomasztowiec.jpg">');
						//$(this).click=null;
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
							
						}
						
				//alert("TERAZ KOLEJ GRACZA_1");
				$('#board-1').css('display','none');
				$('#board-2').css('display','block');
				$('#info_gracz1').html('<b style="color: black"><i>GRACZ_1</i></b> ATAKUJE!! (kliknij na wybrane pole).');
				$('#poddanie_gracz2').css('display','none');
				$('#poddanie1').css('display','block');
				$('#poddanie1').css('margin-left','50%');
				$('#poddanie1').css('margin-top','2%');
				$('.wave').css('cursor','pointer');
	
		
	})
};

function poddanieGracz1(){
	
	$('#poddanie_gracz2').click(function(){		
		
			if(confirm('JESTEŚ PEWIEN, ŻE CHCESZ PORZUCIĆ SWOJĄ FLOTĘ? WYGRA GRACZ_1...'))
					{
						alert('DO STU DIABŁÓW! FLOTA GRACZa_2 ZATONĘŁA!...WYGRYWA GRACZ_1!');
						location.href='index.html';
					}
			
			
})
};
		
function poddanieGracz2(){
	
	$('#poddanie1').click(function(){
			
			
			if(confirm('JESTEŚ PEWIEN, ŻE CHCESZ PORZUCIĆ SWOJĄ FLOTĘ? WYGRA GRACZ_2...'))
					{
						alert('DO STU DIABŁÓW! FLOTA GRACZa_2 ZATONĘŁA!...WYGRYWA GRACZ_2!');
						location.href='index.html';
					}
	})			
};

rozpoczecie_gry.addEventListener('click', function(){
	
	rozpoczecie();
	uderzenie1();
	uderzenie2();
	poddanieGracz1();
	poddanieGracz2();
	
});


	

	

	
	
		

