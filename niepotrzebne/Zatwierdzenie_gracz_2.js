let potwierdz2=document.getElementById('zatwierdz_gracz_2');

function zatwierdzenie_gracz_2()
{
	var nick_gracz_drugi=document.getElementById('nick_gracz_2').value;
	location.href='Rozmieszczenie_statkow_gracz1.html';
	
}
potwierdz2.addEventListener('click', zatwierdzenie_gracz_2);