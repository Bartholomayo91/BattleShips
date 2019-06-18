let ucieczka=document.getElementById('poddanie1');

function poddaj_flote()
{
	if(confirm('JESTEŚ PEWIEN, ŻE CHCESZ PORZUCIĆ SWOJĄ FLOTĘ NA PEWNĄ ŚMIERĆ?'))
	{
		alert('DO STU DIABŁÓW! TWOJA FLOTA ZATONĘŁA! PRZEGRAŁEŚ!');
		location.href='index.html';
	}
	
}
ucieczka.addEventListener('click',poddaj_flote);