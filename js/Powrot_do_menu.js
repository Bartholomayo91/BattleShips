let powrot=document.getElementById('powrot_do_menu');

function powrot_menu()
{
	if(confirm('JESTEŚ PEWIEN? UTRACISZ OBECNE USTAWIENIE STATKÓW...'))
	{
		location.href='index.html';
	}
	
}
powrot.addEventListener('click',powrot_menu);