$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("nav.navbar").addClass("navbar_add_bg");
    } else {
        $("nav.navbar").removeClass("navbar_add_bg");
    }
});

$(document).ready(function () {
    $('.home_sliders').owlCarousel({
        items: 1,
        autoplay: true,
        nav: true,
        dots: false,
        autoplayTimeout: 4000,
        loop: false,
        autoplayHoverPause: true,
        smartSpeed: 500,
        loop: true,
    });
});




$(document).ready(function () {
    $(".car_rent_bnt").click(function () {
        $(".car_rent_form").removeClass("all_form_hide")
        $(".hotel_booking_form").addClass("all_form_hide")
        $(".air_ticket_booking").addClass("all_form_hide")
        $(".ship_ticket_form").addClass("all_form_hide")
        $(".car_rent_bnt").addClass("active")
        $(".hotel_booking_btn").removeClass("active")
        $(".air_ticket_btn").removeClass("active")
        $(".ship_ticket_btn").removeClass("active")
    });

    $(".hotel_booking_btn").click(function () {
        $(".hotel_booking_form").removeClass("all_form_hide")
        $(".car_rent_form").addClass("all_form_hide")
        $(".air_ticket_booking").addClass("all_form_hide")
        $(".ship_ticket_form").addClass("all_form_hide")

        $(".ship_ticket_btn").removeClass("active")
        $(".car_rent_bnt").removeClass("active")
        $(".air_ticket_btn").removeClass("active")
        $(".hotel_booking_btn").addClass("active")


    });
    $(".air_ticket_btn").click(function () {
        $(".air_ticket_booking").removeClass("all_form_hide")
        $(".car_rent_form").addClass("all_form_hide")
        $(".hotel_booking_form").addClass("all_form_hide")
        $(".ship_ticket_form").addClass("all_form_hide")

        $(".air_ticket_btn").addClass("active")
        $(".car_rent_bnt").removeClass("active")
        $(".hotel_booking_btn").removeClass("active")
        $(".ship_ticket_btn").removeClass("active")
    });
    $(".ship_ticket_btn").click(function () {
        $(".ship_ticket_form").removeClass("all_form_hide")
        $(".car_rent_form").addClass("all_form_hide")
        $(".hotel_booking_form").addClass("all_form_hide")
        $(".air_ticket_booking").addClass("all_form_hide")

        $(".ship_ticket_btn").addClass("active")
        $(".car_rent_bnt").removeClass("active")
        $(".air_ticket_btn").removeClass("active")
        $(".hotel_booking_btn").removeClass("active")
    });


    $("#localbooking").click(function () {
        if ($("#localbooking").is(":checked")) {
            $('.local_air_ticket').removeClass('all_form_hide');
            $('.international_air_ticket').addClass('all_form_hide');
        } else {
            $('.local_air_ticket').addClass('all_form_hide');
        }
    });

    $("#InterBooking").click(function () {
        if ($("#InterBooking").is(":checked")) {
            $('.international_air_ticket').removeClass('all_form_hide');
            $('.local_air_ticket').addClass('all_form_hide');
        } else {
            $('.local_air_ticket').addClass('all_form_hide');
        }
    });
});

$(function(){
    $('.counter').counterUp({
        delay: 30,
        time: 2000
    });
})

$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});


$(document).ready(function () {

    $(".all_team_members").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 15,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            280:{
                items:1
            },
            320: {
                items: 1
            },
            768: {
                items: 3
            },
            769: {
                items: 4
            }
        }
    });

});

$(document).ready(function () {

    $(".setisfy_client").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 15,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            280:{
                items:2
            },
            320: {
                items: 5
            },
            768: {
                items: 8
            },
            769: {
                items: 12
            }
        }
    });

});