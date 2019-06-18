function start()
{
	var contents_div1=""; //treść planszy na której wybiera się pola
	for (i=1;i<=100;i++)
	{
		var field="font"+i;//pole
		contents_div1=contents_div1+'<div id="'+field+'" class="wave" ondrop="drop(event)" ondragover="allowDrop(event)">'+'</div>';
		if((i)%10==0) contents_div1=contents_div1+'<div style="clear:both;"></div>'
	
	}
	document.getElementById("board-1").innerHTML=contents_div1;
	
	var contents_div2=""; //treść planszy na której pokazane są skutki trafienia
	for (i=1;i<=100;i++)
	{
		var field="font_com"+i;//pole
		contents_div2=contents_div2+'<div class="wave_show" id="'+field+'">'+'</div>';
		if((i)%10==0) contents_div2=contents_div2+'<div style="clear:both;"></div>'
	}
	document.getElementById("board-2").innerHTML=contents_div2;
}

window.onload = start;

