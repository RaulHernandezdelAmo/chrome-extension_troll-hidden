var trolleos = 3;

var random = Math.floor(Math.random() * trolleos);
console.log(random);

switch(random) {
	case 0:
		$('body').each(function(e){$(this).css("color", "#3CFF00"); $(this).css("background", "#3CFF00")});
		break;
	case 1: 
		$('body button').each(function(){$(this).attr('href', 'podemos.info');});
		break;
	case 2:
		while(true){alert('menuda liada');}
		break;
  default:
    // code block
}
