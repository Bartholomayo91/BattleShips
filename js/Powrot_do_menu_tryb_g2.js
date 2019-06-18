let powrot2=document.getElementById('powrot_do_menu2');

function powrot_menu()
{
	if(confirm('JESTEŚ PEWIEN? UTRACISZ OBECNE USTAWIENIE STATKÓW...'))
	{
		location.href='index.html';
	}
	
}
powrot2.addEventListener('click',powrot_menu);