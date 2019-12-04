$(document).ready(function() {

// Select

    // show-hide list

    $( ".select input" ).focus( function(){

        $(this).closest('.select').children('.opt_list').addClass("show");

    });



    $( ".select input" ).focusout( function(){

        $(this).closest('.select').children('.opt_list').removeClass("show");

    });



    // Value from list

    $(".opt_list li").click(function() {

        var $value = $(this).data("value")

        var $input = $(this).closest('.select').children('input')

        $input.val($value);

	});



    $('.select input').keyup(function(){

        // Search text
        var text = $(this).val();

        // Hide all content class element
        $('.opt_list li').hide();

        // Search and show
        $('.opt_list li:contains("'+text+'")').show();

    });


});
