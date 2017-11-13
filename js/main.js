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
});

var japanImages = ["images/japanImages/tokyoCherryBlossoms.jpg","images/japanImages/tokyoPerfectFruit.jpg","images/japanImages/tokyoSushiTuna.jpg","images/japanImages/tokyoSushi.jpg","images/japanImages/tokyoKillBill.jpg","images/japanImages/tokyoGrumpyCat.jpg","images/japanImages/kyotoBag.jpg","images/japanImages/kyotoHotel.jpg","images/japanImages/kyotoTemple.jpg"]; //the image array

//Clicking on the forward button moves to the next image in queue and sets the score for the previous image to 0.
  $("#forward").on("click",function(){
    if($("#image-to-vote-on").hasClass("image1")){
    $("#image-to-vote-on").attr("src",japanImages[1]).addClass("image2").removeClass("image1");
  } else if($("#image-to-vote-on").hasClass("image2")){
    $("#image-to-vote-on").attr("src",japanImages[2]).addClass("image3").removeClass("image2");
  } else if($("#image-to-vote-on").hasClass("image3")){
    $("#image-to-vote-on").attr("src",japanImages[3]).addClass("image4").removeClass("image3");
  } else if($("#image-to-vote-on").hasClass("image4")){
    $("#image-to-vote-on").attr("src",japanImages[4]).addClass("image5").removeClass("image4");
  } else if($("#image-to-vote-on").hasClass("image5")){
    $("#image-to-vote-on").attr("src",japanImages[5]).addClass("image6").removeClass("image5");
  } else if($("#image-to-vote-on").hasClass("image6")){
    $("#image-to-vote-on").attr("src",japanImages[6]).addClass("image7").removeClass("image6");
  } else if($("#image-to-vote-on").hasClass("image7")){
    $("#image-to-vote-on").attr("src",japanImages[7]).addClass("image8").removeClass("image7");
  } else {/*($("#image-to-vote-on").hasClass("image8")){*/
    $("#image-to-vote-on").attr("src",japanImages[8]).addClass("image9").removeClass("image8");
  }
  });

  //Clicking on the back button moves to the previous image in queue.
    $("#back").on("click",function(){
      if($("#image-to-vote-on").hasClass("image8")){
      $(".announcement").text("");
      $("#image-to-vote-on").attr("src",images[6]).addClass("image7").removeClass("image8");
    } else if($("#image-to-vote-on").hasClass("image7")){
      $("#image-to-vote-on").attr("src",images[5]).addClass("image6").removeClass("image7");
    } else if($("#image-to-vote-on").hasClass("image6")){
      $("#image-to-vote-on").attr("src",images[4]).addClass("image5").removeClass("image6");
    } else if($("#image-to-vote-on").hasClass("image5")){
      $("#image-to-vote-on").attr("src",images[3]).addClass("image4").removeClass("image5");
    } else if($("#image-to-vote-on").hasClass("image4")){
      $("#image-to-vote-on").attr("src",images[2]).addClass("image3").removeClass("image4");
    } else if($("#image-to-vote-on").hasClass("image3")){
      $("#image-to-vote-on").attr("src",images[1]).addClass("image2").removeClass("image3");
    } else {
      $("#image-to-vote-on").attr("src",images[0]).addClass("image1").removeClass("image2");
    }
    });
