function los_jednomasztowce_komp()
{
	const min=1;
	const max=100;
//---------------------------losowanie pierwszego statku - jednomasztowca---------------
	let content_jM1="";
	let content_jM2="";
	let content_jM3="";
	let content_jM4="";

	
	let losuj1_jM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj2_jM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj3_jM=Math.floor(Math.random()*(max-min+1)+min);	
	let losuj4_jM=Math.floor(Math.random()*(max-min+1)+min);

				while(document.getElementById('font_com'+losuj1_jM).hasChildNodes())
				{losuj1_jM=Math.floor(Math.random()*(max-min+1)+min);}
			
	
				content_jM1=content_jM1+'<div class="jedMasz"></div>';
				
				document.getElementById('font_com'+losuj1_jM).innerHTML=content_jM1;
				
			switch(losuj1_jM){
				case 1:
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+11)).innerHTML='<div id="blokada"></div>';
				break;
				case 10:
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div id="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div id="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-11)).innerHTML='<div id="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+11)).innerHTML='<div id="blokada"></div>';
				break;
				case 20:
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div id="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-9)).innerHTML='<div id="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-11)).innerHTML='<div id="blokada"></div>';
				break;
				default:
					document.getElementById('font_com'+(losuj1_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj1_jM+11)).innerHTML='<div id="blokada"></div>';
			}
			
//----------------------------losowanie drugiego jednomasztowca-------------------------------

				while(document.getElementById('font_com'+losuj2_jM).hasChildNodes())
				{losuj2_jM=Math.floor(Math.random()*(max-min+1)+min);}
			
				content_jM2=content_jM2+'<div class="jedMasz"></div>';
				
				document.getElementById('font_com'+losuj2_jM).innerHTML=content_jM2;
				
			switch(losuj2_jM){
				case 1:
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+11)).innerHTML='<div id="blokada"></div>';
				break;
				case 10:
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div id="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div id="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-11)).innerHTML='<div id="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+11)).innerHTML='<div id="blokada"></div>';
				break;
				case 20:
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div id="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-9)).innerHTML='<div id="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-11)).innerHTML='<div id="blokada"></div>';
				break;
				default:
					document.getElementById('font_com'+(losuj2_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj2_jM+11)).innerHTML='<div id="blokada"></div>';
			}

			//--------------------wstawianie trzeciego jednomasztowca---------------
			while(document.getElementById('font_com'+losuj3_jM).hasChildNodes())
				{losuj3_jM=Math.floor(Math.random()*(max-min+1)+min);}
			
			content_jM3=content_jM3+'<div class="jedMasz"></div>';
				
				document.getElementById('font_com'+losuj3_jM).innerHTML=content_jM3;
				
			switch(losuj3_jM){
				case 1:
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+11)).innerHTML='<div id="blokada"></div>';
				break;
				case 10:
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div id="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div id="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-11)).innerHTML='<div id="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+11)).innerHTML='<div id="blokada"></div>';
				break;
				case 20:
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div id="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-9)).innerHTML='<div id="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-11)).innerHTML='<div id="blokada"></div>';
				break;
				default:
					document.getElementById('font_com'+(losuj3_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj3_jM+11)).innerHTML='<div id="blokada"></div>';
			}
//------------------------wstawianie czwartego jednomasztowca---------------
				while(document.getElementById('font_com'+losuj4_jM).hasChildNodes())
				{losuj4_jM=Math.floor(Math.random()*(max-min+1)+min);}
			
			
				content_jM4=content_jM4+'<div class="jedMasz"></div>';
				
				document.getElementById('font_com'+losuj4_jM).innerHTML=content_jM4;
				
			switch(losuj4_jM){
				case 1:
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+11)).innerHTML='<div id="blokada"></div>';
				break;
				case 10:
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div id="blokada"></div>';
				break;
				case 91:
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div id="blokada"></div>';	
				break;
				case 100:
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-11)).innerHTML='<div id="blokada"></div>';
				break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+11)).innerHTML='<div id="blokada"></div>';
				break;
				case 20:
				case 30:
				case 40:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div id="blokada"></div>';
				break;
				case 11:
				case 21:
				case 31:
				case 41:
				case 51:
				case 61:
				case 71:
				case 81:
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-9)).innerHTML='<div id="blokada"></div>';
				break;
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-11)).innerHTML='<div id="blokada"></div>';
				break;
				default:
					document.getElementById('font_com'+(losuj4_jM+1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-1)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM-11)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+9)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+10)).innerHTML='<div id="blokada"></div>';
					document.getElementById('font_com'+(losuj4_jM+11)).innerHTML='<div id="blokada"></div>';
			}
}

	