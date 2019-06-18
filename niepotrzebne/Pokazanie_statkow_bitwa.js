let proba=document.getElementById('proba');
function rozloz_w_bitwie()
{
for (i=1;i<=100;i++)
	{
				
		document.getElementById('font'+i).innerHTML=tab_ze_statkami[i];
			
	}
}
proba.addEventListener('click',rozloz_w_bitwie);