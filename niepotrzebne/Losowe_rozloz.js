var btnLosuj=document.getElementById("losowanie");
function Losowe_rozlozenie()
{
	
	
	
/*	
	
	let jMasz1=document.getElementById("drag1");
	let jMasz2=document.getElementById("drag2");
	let jMasz3=document.getElementById("drag3");
	let jMasz4=document.getElementById("drag4");
	
	let dMasz1=document.getElementById("drag11");
	let dMasz2=document.getElementById("drag12");
	
	let dMasz3=document.getElementById("drag13");
	let dMasz4=document.getElementById("drag14");
	
	let dMasz5=document.getElementById("drag15");
	let dMasz6=document.getElementById("drag16");
	
	let tMasz7=document.getElementById("drag17");
	let tMasz8=document.getElementById("drag18");
	let tMasz9=document.getElementById("drag19");
	
	let tMasz10=document.getElementById("drag20");
	let tMasz11=document.getElementById("drag21");
	let tMasz12=document.getElementById("drag22");
	
	let cMasz13=document.getElementById("drag23");
	let cMasz14=document.getElementById("drag24");
	let cMasz15=document.getElementById("drag25");
	let cMasz16=document.getElementById("drag26");
	
	const min=1;
	const max=100;
	
	var content_jM1="";
	var content_jM2="";
	var content_jM3="";
	var content_jM4="";
	var tablica_zajetych_pol=[];
	*/
	var tablica_pol=[];
	
	for (i=1;i<=100;i++)
	{
		
		tablica_pol.push(i);
		
	}
	alert(tablica_pol[43]);
	
	//let losuj1_jM=Math.floor(Math.random()*(max-min+1)+min);	
	//let losuj2_jM=Math.floor(Math.random()*(max-min+1)+min);	
	//let losuj3_jM=Math.floor(Math.random()*(max-min+1)+min);	
	//let losuj4_jM=Math.floor(Math.random()*(max-min+1)+min);	
//------------------------------wstawianie losowe jednomasztowców-----------------	
	/*	content_jM1=content_jM1+'<img id="drag1" class="jedMasz" src ="img/jednomasztowiec.jpg" draggable="true" ondragstart="drag(event)">'
		document.getElementById("font"+losuj1_jM).innerHTML=content_jM1;
		
		tablica_zajetych_pol.push(losuj1_jM, (losuj1_jM-1),(losuj1_jM+1),(losuj1_jM-9),(losuj1_jM-10),(losuj1_jM-11),(losuj1_jM+9),(losuj1_jM+10),(losuj1_jM+11));
		
		let sprawdz_l2_jM;
		do
		{
			losuj2_jM=Math.floor(Math.random()*(max-min+1)+min);
			sprawdz_l2_jM=tablica_zajetych_pol.some(function(el){ return el===losuj2_jM;});
		}
		while(sprawdz_l2_jM);
		
		content_jM2=content_jM2+'<img id="drag2" class="jedMasz" src ="img/jednomasztowiec.jpg" draggable="true" ondragstart="drag(event)">'
		document.getElementById("font"+losuj2_jM).innerHTML=content_jM2;
		
		tablica_zajetych_pol.push(losuj2_jM, (losuj2_jM-1),(losuj2_jM+1),(losuj2_jM-9),(losuj2_jM-10),(losuj2_jM-11),(losuj2_jM+9),(losuj2_jM+10),(losuj2_jM+11));
		
		
		let sprawdz_l3_jM;
		do
		{
			losuj3_jM=Math.floor(Math.random()*(max-min+1)+min);
			sprawdz_l3_jM=tablica_zajetych_pol.some(function(el){ return el===losuj3_jM;});
		}
		while(sprawdz_l3_jM); 
		content_jM3=content_jM3+'<img id="drag3" class="jedMasz" src ="img/jednomasztowiec.jpg" draggable="true" ondragstart="drag(event)">'
		document.getElementById("font"+losuj3_jM).innerHTML=content_jM3;
		
		tablica_zajetych_pol.push(losuj3_jM, (losuj3_jM-1),(losuj3_jM+1),(losuj3_jM-9),(losuj3_jM-10),(losuj3_jM-11),(losuj3_jM+9),(losuj3_jM+10),(losuj3_jM+11));
		
		
		let sprawdz_l4_jM;
		do
		{
			losuj4_jM=Math.floor(Math.random()*(max-min+1)+min);
			sprawdz_l4_jM=tablica_zajetych_pol.some(function(el){ return el===losuj4_jM;});
		}
		while(sprawdz_l4_jM); 
		content_jM4=content_jM4+'<img id="drag4" class="jedMasz" src ="img/jednomasztowiec.jpg" draggable="true" ondragstart="drag(event)">'
		document.getElementById("font"+losuj4_jM).innerHTML=content_jM4;
		
		tablica_zajetych_pol.push(losuj4_jM, (losuj4_jM-1),(losuj4_jM+1),(losuj4_jM-9),(losuj4_jM-10),(losuj4_jM-11),(losuj4_jM+9),(losuj4_jM+10),(losuj4_jM+11));
		
//---------------------------wstawianie losowe dwumasztowców----------------------

	var content_dM1="";
	var content_dM2="";
	var content_dM3="";
	var content_dM4=""
	var content_dM5="";
	var content_dM6="";
	
	let losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj2_dM=losuj1_dM+1;	
	
	let losuj3_dM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj4_dM=losuj3_dM+1;	
	
	let losuj5_dM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj6_dM=losuj5_dM+1;	
	

	let sprawdz_l1_dM;
	let sprawdz_l2_dM;
	do
	{
		losuj1_dM=Math.floor(Math.random()*(max-min+1)+min);
		losuj2_dM=losuj1_dM+1;
		
		sprawdz_l1_dM=tablica_zajetych_pol.some(function(el){ return el===losuj1_dM;});
		sprawdz_l2_dM=tablica_zajetych_pol.some(function(el){ return el===losuj2_dM;});
	}
	while(losuj1_dM%10===0&&sprawdz_l1_dM && sprawdz_l2_dM);
		
		content_dM1=content_dM1+'<img id="drag11" class="dwuMasz" style="left: 0px; " src ="img/dwum_cz1.jpg" draggable="true" ondragstart="drag(event)">';
		document.getElementById("font"+losuj1_dM).innerHTML=content_dM1;
		
		content_dM2=content_dM2+'<img id="drag12" class="dwuMasz" style="left: 0px; " src ="img/dwum_cz2.jpg" draggable="true" ondragstart="drag(event)">';
		document.getElementById("font"+losuj2_dM).innerHTML=content_dM2;
		
		tablica_zajetych_pol.push(losuj1_dM, (losuj1_dM-1),(losuj1_dM+1),(losuj1_dM+2),(losuj1_dM-8),(losuj1_dM-9),(losuj1_dM-10),(losuj1_dM-11),(losuj1_dM+9),(losuj1_dM+10),(losuj1_dM+11),(losuj1_dM+12));
		
		
		
		
	let sprawdz_l3_dM;
	let sprawdz_l4_dM;
	do
	{
		losuj3_dM=Math.floor(Math.random()*(max-min+1)+min);
		losuj4_dM=losuj3_dM+1;
		
		sprawdz_l3_dM=tablica_zajetych_pol.some(function(el){ return el===losuj3_dM;});
		sprawdz_l4_dM=tablica_zajetych_pol.some(function(el){ return el===losuj4_dM;});
	}
	while(losuj3_dM%10===0&&sprawdz_l3_dM && sprawdz_l4_dM);

		content_dM3=content_dM3+'<img id="drag13" class="dwuMasz" style="left: 0px; " src ="img/dwum_cz1.jpg" draggable="true" ondragstart="drag(event)">';
		document.getElementById("font"+losuj3_dM).innerHTML=content_dM3;
		
		content_dM4=content_dM4+'<img id="drag14" class="dwuMasz" style="left: 0px; " src ="img/dwum_cz2.jpg" draggable="true" ondragstart="drag(event)">';
		document.getElementById("font"+losuj4_dM).innerHTML=content_dM4;
		
		tablica_zajetych_pol.push(losuj3_dM, (losuj3_dM-1),(losuj3_dM+1),(losuj3_dM+2),(losuj3_dM-8),(losuj3_dM-9),(losuj3_dM-10),(losuj3_dM-11),(losuj3_dM+9),(losuj3_dM+10),(losuj3_dM+11),(losuj3_dM+12));
		
		
		
	let sprawdz_l5_dM;
	let sprawdz_l6_dM;
	do
	{
		losuj5_dM=Math.floor(Math.random()*(max-min+1)+min);
		losuj6_dM=losuj5_dM+1;
		
		sprawdz_l5_dM=tablica_zajetych_pol.some(function(el){ return el===losuj5_dM;});
		sprawdz_l6_dM=tablica_zajetych_pol.some(function(el){ return el===losuj6_dM;});
	}
	while(losuj5_dM%10===0 && sprawdz_l5_dM && sprawdz_l6_dM);
		
		content_dM5=content_dM5+'<img id="drag15" class="dwuMasz" style="left: 0px; " src ="img/dwum_cz1.jpg" draggable="true" ondragstart="drag(event)">';
		document.getElementById("font"+losuj5_dM).innerHTML=content_dM5;
		
		content_dM6=content_dM6+'<img id="drag16" class="dwuMasz" style="left: 0px; " src ="img/dwum_cz2.jpg" draggable="true" ondragstart="drag(event)">';
		document.getElementById("font"+losuj6_dM).innerHTML=content_dM6;
		
		tablica_zajetych_pol.push(losuj5_dM, (losuj5_dM-1),(losuj5_dM+1),(losuj5_dM+2),(losuj5_dM-8),(losuj5_dM-9),(losuj5_dM-10),(losuj5_dM-11),(losuj5_dM+9),(losuj5_dM+10),(losuj5_dM+11),(losuj5_dM+12));

		document.getElementById("conteinerOfShips").style.display="none";
		
		alert(tablica_zajetych_pol);*/
}
btnLosuj.addEventListener('click', Losowe_rozlozenie);
