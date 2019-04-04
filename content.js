var trolleos = 2;


switch(Math.floor((Math.random() * trolleos))) {
	case 0:
		$('body').each(function(e){$(this).css("color", "#3CFF00"); $(this).css("background", "#3CFF00")});
		break;
	case 1: 
		$('body button').each(function(){$(this).attr('href', 'podemos.info');});
		break;
  default:
    // code block
}