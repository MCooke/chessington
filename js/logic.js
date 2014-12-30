$( document ).ready( function() {

	$( '.do_open' ).on( 'click', function() {
		openTarget = $( this ).attr( 'data-open' );
		$( openTarget ).toggleClass('active');
	} );

	$( window ).on( 'click.small scroll.small' ,function(){
		$( '.navbar_section-logo' ).addClass( 'small' );
		$( this ).off( 'click.small scroll.small ');
	});
} );