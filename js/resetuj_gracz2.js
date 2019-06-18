let reset_gracz2=document.getElementById("resetuj_gracz2");

function resetuj2()

{
	
	
	var contents_div2=""; //treść planszy na której pokazane są skutki trafienia
	for (i=1;i<=100;i++)
	{
		var field="font_com"+i;//pole
		contents_div2=contents_div2+'<div class="wave_show" id="'+field+'" ondrop="drop(event)" ondragover="allowDrop(event)">'+'</div>';
		if((i)%10==0) contents_div2=contents_div2+'<div style="clear:both;"></div>'
	}
	document.getElementById("board-2").innerHTML=contents_div2;
	document.getElementById("conteinerOfShips2").style.display="block";
	document.getElementById('losowanie_gracz2').removeAttribute('disabled','enabled');document.getElementById("conteinerOfFields2").style.marginLeft="1%";
}
	

	
reset_gracz2.addEventListener('click', resetuj2);