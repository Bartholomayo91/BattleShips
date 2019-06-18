let podsumowanie=document.getElementById("podsumowanie");
function liczenie(){
	
	let tablica_gracza=[];
	//let tab_ze_statkami=[];
	for (i=1;i<=100;i++)
	{
		let pole="font"+i;
		let uchwyt=document.getElementById(pole);
		uchwyt.childNodes;
		//let dziecko=uchwyt.firstElementChild.name;
		
		//tab_ze_statkami.push(dziecko);
		if(uchwyt.hasChildNodes())
		{
			uchwyt.childNodes;
			if(uchwyt.firstChild.hasAttribute('id'))
			{
					tablica_gracza.push(pole);
			}
		}
	}
	
	if(tablica_gracza.length<20)
	{
		alert("Nie ustawiłeś wszystkich statków!");
	}
	else
	{
		
		document.getElementById('board-2').style.display="inline";
		document.getElementById('conteinerOfFields').style.marginLeft="18%";
		document.getElementById('conteinerOfFields').style.width="1300px";
		document.getElementById("conteinerOfShips").style.display="none";
		document.getElementById('poddanie1').style.display="inline";
		
		document.getElementById('poddanie1').style.marginLeft="-60%";
		document.getElementById('podsumowanie').style.display="none";
		document.getElementById('losowanie').style.display="none";
		document.getElementById('resetuj').style.display="none";
		document.getElementById('powrot_do_menu').style.display="none";
		document.getElementById('info_gracz1').innerHTML='<b style="color: black"><i>GRACZ</i></b> kliknij na wybrane pole, na planszy po prawej.	Następnie ruch wykona komputer. POWODZENIA!';
		
		
		alert("ZACZYNA GRACZ");
		
	}
	
}
podsumowanie.addEventListener("click", function(){
	
	
	liczenie();
	los_czteromasztowiec_komp();
	los_trojmasztowce_komp();
	los_dwumasztowce_komp();
	los_jednomasztowce_komp();
	//tablica_statkow_komp();
	
	
});
	