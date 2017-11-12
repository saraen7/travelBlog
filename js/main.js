$(document).ready(function() {
    $('#primary-nav .africa').on('click', function(e) {
        e.preventDefault();
        $('#primary-nav .africa').siblings().removeClass('active');
        $('#primary-nav .africa').toggleClass('active');
        if ($('#primary-nav .africa').hasClass('active')) {
            if ($('#slide-down').hasClass('open')) {
                $('#slide-down .drop.open').hide().removeClass('open');
                $('.drop.africa').show().addClass('open')
            } else {
                $('#slide-down .drop').hide();
                $('.drop.africa').show().addClass('open');
                $('#slide-down').slideDown(150).addClass('open')
            }
        } else {
            $('#slide-down').slideUp(150).removeClass('open')
        }
    });
    $('#primary-nav .asia').on('click', function(e) {
        e.preventDefault();
        $('#primary-nav .asia').siblings().removeClass('active');
        $('#primary-nav .asia').toggleClass('active');
        if ($('#primary-nav .asia').hasClass('active')) {
            if ($('#slide-down').hasClass('open')) {
                $('#slide-down .drop.open').hide().removeClass('open');
                $('.drop.asia').show().addClass('open')
            } else {
                $('#slide-down .drop').hide();
                $('.drop.asia').show().addClass('open');
                $('#slide-down').slideDown(150).addClass('open')
            }
        } else {
            $('#slide-down').slideUp(150).removeClass('open')
        }
    });
    $('#primary-nav .europe').on('click', function(e) {
        e.preventDefault();
        $('#primary-nav .europe').siblings().removeClass('active');
        $('#primary-nav .europe').toggleClass('active');
        if ($('#primary-nav .europe').hasClass('active')) {
            if ($('#slide-down').hasClass('open')) {
                $('#slide-down .drop.open').hide().removeClass('open');
                $('.drop.europe').show().addClass('open')
            } else {
                $('#slide-down .drop').hide();
                $('.drop.europe').show().addClass('open');
                $('#slide-down').slideDown(150).addClass('open')
            }
        } else {
            $('#slide-down').slideUp(150).removeClass('open')
        }
    });
    $('#primary-nav .northAmerica').on('click', function(e) {
        e.preventDefault();
        $('#primary-nav .northAmerica').siblings().removeClass('active');
        $('#primary-nav .northAmerica').toggleClass('active');
        if ($('#primary-nav .northAmerica').hasClass('active')) {
            if ($('#slide-down').hasClass('open')) {
                $('#slide-down .drop.open').hide().removeClass('open');
                $('.drop.northAmerica').show().addClass('open')
            } else {
                $('#slide-down .drop').hide();
                $('.drop.northAmerica').show().addClass('open');
                $('#slide-down').slideDown(150).addClass('open')
            }
        } else {
            $('#slide-down').slideUp(150).removeClass('open')
        }
    });
    $('#primary-nav .southAmerica').on('click', function(e) {
        e.preventDefault();
        $('#primary-nav .southAmerica').siblings().removeClass('active');
        $('#primary-nav .southAmerica').toggleClass('active');
        if ($('#primary-nav .southAmerica').hasClass('active')) {
            if ($('#slide-down').hasClass('open')) {
                $('#slide-down .drop.open').hide().removeClass('open');
                $('.drop.southAmerica').show().addClass('open')
            } else {
                $('#slide-down .drop').hide();
                $('.drop.southAmerica').show().addClass('open');
                $('#slide-down').slideDown(150).addClass('open')
            }
        } else {
            $('#slide-down').slideUp(150).removeClass('open')
        }
    });
    $('#primary-nav .oceania').on('click', function(e) {
        e.preventDefault();
        $('#primary-nav .oceania').siblings().removeClass('active');
        $('#primary-nav .oceania').toggleClass('active');
        if ($('#primary-nav .oceania').hasClass('active')) {
            if ($('#slide-down').hasClass('open')) {
                $('#slide-down .drop.open').hide().removeClass('open');
                $('.drop.oceania').show().addClass('open')
            } else {
                $('#slide-down .drop').hide();
                $('.drop.oceania').show().addClass('open');
                $('#slide-down').slideDown(150).addClass('open')
            }
        } else {
            $('#slide-down').slideUp(150).removeClass('open')
        }
    });
    $('#primary-nav .blogs').on('click', function(e) {
        e.preventDefault();
        $('#primary-nav .blogs').siblings().removeClass('active');
        $('#primary-nav .blogs').toggleClass('active');
        if ($('#primary-nav .blogs').hasClass('active')) {
            if ($('#slide-down').hasClass('open')) {
                $('#slide-down .drop.open').hide().removeClass('open');
                $('.drop.blogs').show().addClass('open')
            } else {
                $('#slide-down .drop').hide();
                $('.drop.blogs').show().addClass('open');
                $('#slide-down').slideDown(150).addClass('open')
            }
        } else {
            $('#slide-down').slideUp(150).removeClass('open')
        }
    })
});
