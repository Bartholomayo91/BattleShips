let potwierdz1=document.getElementById('zatwierdz_gracz_1');

function zatwierdzenie_gracz_1()
{
	var nick_gracz_pierwszy=document.getElementById('nick_gracz_1').value;
	location.href='Gracz2.html';
	
}
potwierdz1.addEventListener('click', zatwierdzenie_gracz_1);