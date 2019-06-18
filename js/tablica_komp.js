function tablica_statkow_komp()
{
let tablica_komputera=[];
	//let tab_ze_statkami=[];
	for (i=1;i<=100;i++)
	{
		let pole="font_com"+i;
		let uchwyt=document.getElementById(pole);
		uchwyt.childNodes;
		//let dziecko=uchwyt.firstElementChild.name;
		
		//tab_ze_statkami.push(dziecko);
		if(uchwyt.hasChildNodes())
		{
			uchwyt.childNodes;
			if(uchwyt.firstChild.hasAttribute('id'))
			{
					tablica_komputera.push(pole);
			}
		}
	}
	//alert(tablica_komputera);
}