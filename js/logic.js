console.log("Initlaise");

$( document ).ready( function() {
	// $('.do_bookOpen').on('click', function() {
	// 	$( this ).toggleClass( 'active' );
	// 	$( '.form-booking' ).toggleClass( 'active' );
	// });
	// $('.do_menu').on('click', function() {
	// 	$( this ).toggleClass( 'active' );
	// 	$( '.navbar-links' ).toggleClass( 'active' );
	// });
	// $('.do_datePicker').on('click', function() {
	// 	console.log("Doin the datepicker");
	// 	$( this ).toggleClass( 'active' );
	// 	$( '.offcanvas_level' ).toggleClass( 'active' );
	// });

	$('.do_open').on('click', function(){
		openTarget = $(this).attr('data-open');
		$( openTarget ).toggleClass('active');
		console.log(openTarget);
	});
} );