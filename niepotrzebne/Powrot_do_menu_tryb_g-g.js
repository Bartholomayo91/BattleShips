let powrot=document.getElementById('powrot_do_menu');

function powrot_menu()
{
	if(confirm('JESTEŚ PEWIEN?'))
	{
		location.href='index.html';
	}
	
}
powrot.addEventListener('click',powrot_menu);