$(document).ready(function(){

	$('#podsumowanie_gracz2').click(function podsumowanie_gracz2(){
		let tablica_gracza2=[];
		for (i=1;i<=100;i++)
			{
				let pole2="font_com"+i;
				let uchwyt2=document.getElementById(pole2);
				uchwyt2.childNodes;
				//let dziecko=uchwyt.firstElementChild.name;
				
				//tab_ze_statkami.push(dziecko);
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
		
		else{
		
				for(i=1;i<=100;i++)
				{
					let pole1 = $('#font_com'+i);
					if($('#font_com'+i).children().hasClass('jedMasz'))
					{
							$('#font_com'+i).html('<div class="jedMasz_2"></div>');
					}
					else if($('#font_com'+i).children().hasClass('dwuMasz'))
					{
							//alert("Trafiłes dwumasztowca!");
							$('#font_com'+i).html('<div class="dwuMasz_2"></div>');
					}
					else if($('#font_com'+i).children().hasClass('trojMasz'))
					{
							//alert("Trafiłes trójmasztowca!");
							$('#font_com'+i).html('<div class="trojMasz_2"></div>');
					}
					else if($('#font_com'+i).children().hasClass('czterMasz'))
					{
							//alert("Trafiłes czteromasztowca!");
							$('#font_com'+i).html('<div class="czterMasz_2"></div>');
					}
								
				}
		
			
			$('#conteinerOfShips2').css('display','none');
			$('#conteinerOfFields2').css('float','none');
			
			$('#info_gracz2').css('display','none');
			$('#przyciski_gracz2').css('display','none');
		
			$('#plansza_gracz1').css('display','block')
			$('#info_gracz1').html('<b style="color: black"><i>GRACZ_1</i></b> ROZPOCZYNA ROZGRYWKĘ!! (kliknij na wybrane pole).');
			$('#przyciski_gracz1').css('display','none');
			$('#conteinerOfFields').css('display','none');
			$('#conteinerOfShips').css('display','none');
			$('#poddanie1').css('display','block');
			$('#poddanie1').css('margin-left','50%');
			$('#poddanie1').css('margin-top','2%');
		}
		
	})
});		
		


	

	

	
	
		

