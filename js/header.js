function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            
        if (distanceY > 60) {
			$('#htitle').show();
			$('#header').addClass( "shadow" )
		
		} else if (distanceY < 60) {
			$('#htitle').hide();
			$('#header').removeClass( "shadow" )			
        }
    });
}
window.onload = init();

function goto(url){
		location.href=url;
}