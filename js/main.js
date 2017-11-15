var japanImages = ["images/japanImages/tokyoCherryBlossoms.jpg","images/japanImages/tokyoPerfectFruit.jpg","images/japanImages/tokyoSushiTuna.jpg","images/japanImages/tokyoSushi.jpg","images/japanImages/tokyoKillBill.jpg","images/japanImages/tokyoGrumpyCat.jpg","images/japanImages/kyotoBag.jpg","images/japanImages/kyotoHotel.jpg","images/japanImages/kyotoTemple.jpg"];

var japanText = [
  "Cherry Blossoms in Yoyogi Park, Shibuya, Tokyo.",
  "The Japanese have an obsession with perfection including perfect produce. The canalopes pictured here sold for approximately $60 each. Our hosts explained that these were primarily bought to impress professional contacts.",
  "The sushi was amazingly fresh in Japan. At the top of this image are three different fattiness levels of tuna.",
  "Sushi could also come via conveyer belt. At this Tokyo restaurant, orders placed directly on a tablet were prepared in the kitchen and then whisked to each diner on an electric tray.", "The restaurant shown in Kill Bill.",
  "Grumpy cat latte art.", "Some western cultural icons were very popular in Japan. I saw Tommy Lee Jones' picture every day of the trip. There were also odd bits of Americana like this bag pictured above.",
  "The traditional Japanese style hotel that we stayed at in Kyoto.",
  "The Fushimi Inari-taisha Shrine in Kyoto."];

var i=0;

function previousImage(imageArray, textArray){
	if(i<imageArray.length && i>0){
		i--;
		$("#image-to-vote-on").attr("src",imageArray[i]);
    $("#caption p").text(textArray[i]);
	}else{
		i=imageArray.length-1;
		$("#image-to-vote-on").attr("src",imageArray[i]);
    $("#caption p").text(textArray[i]);
	}
}
function nextImage(imageArray, textArray){
  console.log("hello world");
	if(i<imageArray.length-1){
		i++;
		$("#image-to-vote-on").attr("src",imageArray[i]);
    $("#caption p").text(textArray[i]);
	}else{
		i-=imageArray.length-1;
		$("#image-to-vote-on").attr("src",imageArray[i]);
    $("#caption p").text(textArray[i]);
	}
}

$(document).ready(function() {



  $("#buttons-wrapper .btn[value='Forward']").on("click",function(){nextImage(japanImages, japanText)});
  $("#buttons-wrapper .btn[value='Back']").on("click",function(){previousImage(japanImages, japanText)});



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

}); //end Document Ready
