jQuery(document).ready(function($) {

    "use strict";

    /* ---------------------------------------------------------------------- */
    /*	------------------------------- Loading ----------------------------- */
    /* ---------------------------------------------------------------------- */

    /*Page Preloading*/
    $(window).load(function() {
        $('.preloader').fadeOut();
        $('.wrapper-content').css('opacity', '1').fadeIn();
        $('#custumize-style').fadeIn();
    });

    /* ---------------------------------------------------------------------- */
    /* ------------------- Opens the menu responsive ------------------------ */
    /* ---------------------------------------------------------------------- */

    $("#btn_open_menu").click(function(e) {

        e.preventDefault();

        $("#header").toggleClass("active");

        if ($("#header").hasClass('active')) {
            $("#header .menu_closed").css('display', 'block');
        } else {
            $("#header .menu_closed").css('display', 'none');
        }

        return false;
    });

    //closed menu in responsive
    $("#menu_closed").click(function(e) {

        e.preventDefault();

        $("#header").removeClass('active')
        $("#header .menu_closed").css('display', 'none');

        return false;
    });


    // On lie l'evenement resize a la fonction
    function resize_windows() {

        if (window.matchMedia("(min-width: 1025px)").matches) {
            $("#header").removeClass("active");
            $("#header .menu_closed").css('display', 'none');

        }

    }

    window.addEventListener('load', resize_windows, false);
    window.addEventListener('resize', resize_windows, false);


    /* ---------------------------------------------------------------------- */
    /* ------------------------ Menu Header Scroll -------------------------- */
    /* ---------------------------------------------------------------------- */

    /* niceScroll menu */
    $("#header:not(.collapsed)").niceScroll({
        touchbehavior: false,
        scrollspeed: 60,
        mousescrollstep: 38,
        cursorwidth: 5,
        cursorborder: 0,
        autohidemode: false,
        zindex: 99999999,
        horizrailenabled: false,
        cursorborderradius: '0px',
        cursorcolor: "#464646"
    });

    /* niceScroll layers*/
    $("#main section.layers .page_content").niceScroll({
        touchbehavior: false,
        scrollspeed: 60,
        mousescrollstep: 38,
        cursorwidth: 8,
        cursorborder: 0,
        autohidemode: false,
        zindex: 99999999,
        horizrailenabled: false,
        cursorborderradius: 20,
        cursorcolor: "#333"
    });


    /* ---------------------------------------------------------------------- */
    /* ----------------------- Tooltip icon social -------------------------- */
    /* ---------------------------------------------------------------------- */

    //tooltip social header
    $('#header_social_ul li a').tooltip({
        placement: "top"
    });
    //tooltip button close Menu
    $('#menu_closed').tooltip({
        placement: "right"
    });

    /* ---------------------------------------------------------------------- */
    /* ------------------------- Social header ------------------------------ */
    /* ---------------------------------------------------------------------- */


    $('.social-ul li').hover(function() {

        var tab_name = $(this).find('i');
        if (tab_name[0] === undefined) {
            tab_name = $(this).find('img');
        }
        var animation_style = 'fadeInUp';

        $(tab_name).addClass('animated ' + animation_style);
        $(tab_name).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(tab_name).removeClass('animated ' + animation_style);
        });

    }, function() {

        var tab_name1 = $(this).find('i');
        if (tab_name1[0] === undefined) {
            tab_name1 = $(this).find('img');
        }
        var animation_style1 = 'fadeInDown';

        $(tab_name1).addClass('animated ' + animation_style1);
        $(tab_name1).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(tab_name1).removeClass('animated ' + animation_style1);
        });


    });

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- prettyPhoto ---------------------------- */
    /* ---------------------------------------------------------------------- */

    $("a[rel^='portfolio'], a[data-gal^='portfolio']").prettyPhoto({
        animation_speed: 'fast', /* fast/slow/normal */
        social_tools: '',
        theme: 'pp_default',
        horizontal_padding: 5,
        deeplinking: false,
        allow_expand: false,
        hook: 'data-gal'
    });

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- Navigation  ---------------------------- */
    /* ---------------------------------------------------------------------- */

    $('.list-unstyled li a.link_menu, .logo .link_menu').click(function() {
        var ahref = $(this).attr('href').split("#");
        var id_name = ahref[1];
        var ahrefhash = '#' + id_name;

        $('nav.navigation ul.list-unstyled li').removeClass('active');
        if (id_name == 'profile') {
            $('nav.navigation ul.list-unstyled li.profile').addClass('active');
        }
        else{
            $(this).closest('li').addClass('active');
        }
        
        $("#main .layers").removeClass('page_current');
        $(ahrefhash).addClass('page_current');

        if (id_name == "resume") {
            $('.skillbar').each(function() {
                $(this).find('.skillbar-bar').width(0);
            });

            $('.skillbar').each(function() {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        }

        return false;
    });

}); // close
