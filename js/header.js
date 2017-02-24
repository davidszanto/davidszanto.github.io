function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            
        if (distanceY > 60 ) {
			$('#htitle').fadeIn(500)
			$('#bigtitle').fadeOut(500);
			$('#bigheadertext').fadeOut(500);
			$('#header').addClass( "shadow" )
		
		} else if (distanceY < 70) {
			$('#htitle').fadeOut(500);
			$('#bigtitle').fadeIn(500);		
			$('#bigheadertext').fadeIn(500);		
			$('#header').removeClass( "shadow" )			
        }
    });
    
   
}
window.onload = init();

function goto(url){
		location.href=url;
}