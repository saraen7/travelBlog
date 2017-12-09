//Image and Captain arrays
var assateagueImages = ["images/assateagueImages/photo1.jpg", "images/assateagueImages/photo2.jpg"];

var assateagueText = ["Group camping at Assateague National Park in Maryland.", "Wild ponies on Assateague Island."];

var incaTrailImages = ["images/incaTrailImages/incaTrailStart.jpg", "images/incaTrailImages/incaTrailStart2.jpg", "images/incaTrailImages/incaTrail.jpg", "images/incaTrailImages/incaTrail2.jpg", "images/incaTrailImages/incaTrail3.jpg", "images/incaTrailImages/machuPicchu.jpg"];

var incaTrailText = ["The sign at the head of the Inca Trail.", "The map at the head of the Inca Trail.", "View from the Inca Trail.", "The Inca Trail goes through multiple ecospheres. Here is a lower altitude, jungle view from the trail.", "Dawn on the trail. Day 4.", "Machu Picchu at mid-morning."];

var kyotoImages = ["images/kyotoImages/kyotoTemple.jpg", "images/kyotoImages/kyotoHotel.jpg"];

var kyotoText = ["The Fushimi Inari-taisha Shrine in Kyoto.",
"The traditional Japanese style hotel that we stayed at in Kyoto."];

var londonImages = ["images/londonImages/kensingtonGarden.jpg", "images/londonImages/britishMuseum.jpg", "images/londonImages/rosettaStone.jpg", "images/londonImages/globeTheater2.jpg", "images/londonImages/globeTheater.jpg", "images/londonImages/ukPhones.jpg"];

var londonText = ["Kensington Gardens outside of Kensington Palace in Hyde Park.",
"Atrium of the British Museum.",
"The Rosetta Stone in the British Museum.",
"The stage of the Globe Theater.",
"The painted ceiling of the Globe Theater stage.",
"London phone booths outside of Buckingham Palace."];

var lucerneImages = ["images/lucerneImages/lucerneRestaurant.jpg", "images/lucerneImages/swissTrain.jpg", "images/lucerneImages/swissMountain.jpg"];

var lucerneText = ["A restaurant in downtown Lucerne.", "The view out of the train window to the top of a mountain just outside of Lucerne.", "The Swiss flag in the Alps."];

var montrealImages = ["images/montrealImages/f1.jpg"];

var montrealText = ["Lewis Hamilton, winner of the 2015 Canadian Grand Prix."]

var orstaImages = ["images/orstaImages/norway1.jpg", "images/orstaImages/norwayCabin.jpg", "images/orstaImages/norwayFarm.jpg", "images/orstaImages/norwayHouse.jpg"];

var orstaText = ["Lake Lyngstøylvatnet in Ørsta.", "A family member's cabin just outside of Ørsta.", "A building on my great grandfather's property in Ørsta.", "The third floor attic at my great, great grandparents' home in Ørsta."];

var puntaCanaImages = ["images/puntaCanaImages/resort.jpg", "images/puntaCanaImages/balcony.jpg"];

var puntaCanaText = ["1960s resort in Punta Cana.", "1960s resort in Punta Cana."];

var seattleImages = ["images/seattleImages/seattleEastofHere.jpg", "images/seattleImages/seattleGumWall.jpg", "images/seattleImages/seattleAirBnB.jpg"];

var seattleText = ["Exploring the Queen Anne neighborhood in Seattle.", "The Gum Wall near Pike Place market.", "We stayed at an AirB&B during our trip and couldn't recommend the experience more."];

var tokyoImages = ["images/tokyoImages/tokyoCherryBlossoms.jpg","images/tokyoImages/tokyoPerfectFruit.jpg","images/tokyoImages/tokyoSushiTuna.jpg","images/tokyoImages/tokyoSushi.jpg","images/tokyoImages/tokyoKillBill.jpg","images/tokyoImages/tokyoGrumpyCat.jpg","images/tokyoImages/kyotoBag.jpg"];

var tokyoText = [
  "Cherry Blossoms in Yoyogi Park, Shibuya, Tokyo.",
  "The Japanese have an obsession with perfection including perfect produce. The canalopes pictured here sold for approximately $60 each. Our hosts explained that these were primarily bought to impress professional contacts.",
  "The sushi was amazingly fresh in Japan. At the top of this image are three different fattiness levels of tuna.",
  "Sushi could also come via conveyer belt. At this Tokyo restaurant, orders placed directly on a tablet were prepared in the kitchen and then whisked to each diner on an electric tray.", "The restaurant shown in Kill Bill.",
  "Grumpy cat latte art.", "Some western cultural icons were very popular in Japan. I saw Tommy Lee Jones' picture every day of the trip. There were also odd bits of Americana like this bag pictured above."];

  var homeImages = [kyotoImages[0], orstaImages[0], incaTrailImages[5]];

  var homeText = [kyotoText[0], orstaText[0], incaTrailText[5]];

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
  $("#buttons-wrapper.assateague .btn[value='Forward']").on("click",function(){nextImage(assateagueImages, assateagueText)});
  $("#buttons-wrapper.assateague .btn[value='Back']").on("click",function(){previousImage(assateagueImages, assateagueText)});

  $("#buttons-wrapper.incaTrail .btn[value='Forward']").on("click",function(){nextImage(incaTrailImages, incaTrailText)});
  $("#buttons-wrapper.incaTrail .btn[value='Back']").on("click",function(){previousImage(incaTrailImages, incaTrailText)});

  $("#buttons-wrapper.kyoto .btn[value='Forward']").on("click",function(){nextImage(kyotoImages, kyotoText)});
  $("#buttons-wrapper.kyoto .btn[value='Back']").on("click",function(){previousImage(kyotoImages, kyotoText)});

  $("#buttons-wrapper.london .btn[value='Forward']").on("click",function(){nextImage(londonImages, londonText)});
  $("#buttons-wrapper.london .btn[value='Back']").on("click",function(){previousImage(londonImages, londonText)});

  $("#buttons-wrapper.lucerne .btn[value='Forward']").on("click",function(){nextImage(lucerneImages, lucerneText)});
  $("#buttons-wrapper.lucerne .btn[value='Back']").on("click",function(){previousImage(lucerneImages, lucerneText)});

  $("#buttons-wrapper.montreal .btn[value='Forward']").on("click",function(){nextImage(montrealImages, montrealText)});
  $("#buttons-wrapper.montreal .btn[value='Back']").on("click",function(){previousImage(montrealImages, montrealText)});

  $("#buttons-wrapper.orsta .btn[value='Forward']").on("click",function(){nextImage(orstaImages, orstaText)});
  $("#buttons-wrapper.orsta .btn[value='Back']").on("click",function(){previousImage(orstaImages, orstaText)});

  $("#buttons-wrapper.puntaCana .btn[value='Forward']").on("click",function(){nextImage(puntaCanaImages, puntaCanaText)});
  $("#buttons-wrapper.puntaCana .btn[value='Back']").on("click",function(){previousImage(puntaCanaImages, puntaCanaText)});

  $("#buttons-wrapper.seattle .btn[value='Forward']").on("click",function(){nextImage(seattleImages, seattleText)});
  $("#buttons-wrapper.seattle .btn[value='Back']").on("click",function(){previousImage(seattleImages, seattleText)});

  $("#buttons-wrapper.tokyo .btn[value='Forward']").on("click",function(){nextImage(tokyoImages, tokyoText)});
  $("#buttons-wrapper.tokyo .btn[value='Back']").on("click",function(){previousImage(tokyoImages, tokyoText)});

  $("#buttons-wrapper.home .btn[value='Forward']").on("click",function(){nextImage(homeImages, homeText)});
  $("#buttons-wrapper.home .btn[value='Back']").on("click",function(){previousImage(homeImages, homeText)});

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
