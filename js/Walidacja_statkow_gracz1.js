$(document).ready(function(){

	$('#podsumowanie').click(function podsumowanie_gracz1(){
		let tablica_gracza1=[];
		for (i=1;i<=100;i++)
			{
				let pole1="font"+i;
				let uchwyt1=document.getElementById(pole1);
				uchwyt1.childNodes;
				//let dziecko=uchwyt.firstElementChild.name;
				
				//tab_ze_statkami.push(dziecko);
				if(uchwyt1.hasChildNodes())
				{
					uchwyt1.childNodes;
					if(uchwyt1.firstChild.hasAttribute('id'))
					{
							tablica_gracza1.push(pole1);
					}
				}
			}
			
		if(tablica_gracza1.length<20)
		{
				alert("Nie ustawiłeś wszystkich statków!");
		}
		
		else{
		
				for(i=1;i<=100;i++)
				{
					let pole1 = $('#font'+i);
					if($('#font'+i).children().hasClass('jedMasz'))
					{
							$('#font'+i).html('<div class="jedMasz"></div>');
					}
					else if($('#font'+i).children().hasClass('dwuMasz'))
					{
							//alert("Trafiłes dwumasztowca!");
							$('#font'+i).html('<div class="dwuMasz"></div>');
					}
					else if($('#font'+i).children().hasClass('trojMasz'))
					{
							//alert("Trafiłes trójmasztowca!");
							$('#font'+i).html('<div class="trojMasz"></div>');
					}
					else if($('#font'+i).children().hasClass('czterMasz'))
					{
							//alert("Trafiłes czteromasztowca!");
							$('#font'+i).html('<div class="czterMasz"></div>');
					}
								
				}
		
			
		
					
					$('#plansza_gracz1').css('display','none');
					$('#plansza_gracz2').css('display','block');
					//$('#conteinerOfFields').css('float','left');
					//$('#board-2').css('margin-left','-170%');
		}
		
	})
});		
		

