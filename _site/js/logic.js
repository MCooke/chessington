$( document ).ready( function() {

	$( '.do_open' ).on( 'click', function() {
		openTarget = $( this ).attr( 'data-open' );
		$( openTarget ).toggleClass('active');
	} );

	$( window ).on( 'click.small scroll.small' ,function(){
		$( '.navbar_section-logo' ).addClass( 'small' );
		$( this ).off( 'click.small scroll.small ');
	});

	$('#parkDate').datepicker({
		onSelect: function(date){
			$( '.offcanvas_level-datepicker' ).toggleClass('active');
			$('#dateButton').text( date );
			console.log("Hey");
		}
	});

	$('.slick').slick({
		slide: 'div',
		dots: true
	});
	// $('#parkDate').datepicker.onSelect(function(){
	// 	console.log("Hey");
	// });
} );