
$(document).ready(function(){


/* ==========================================================================
   Preload
========================================================================== */
    
    
    $("html").queryLoader2({
        barColor: "#111",
        backgroundColor: "#fff",
        percentage: true,
        barHeight: 3,
        completeAnimation: "fade",
        minimumTime: 200
    });

    $("body").fadeIn('slow')

/* ==========================================================================
   Scroll about page
========================================================================== */
$(".learn-more").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });
    

/* ==========================================================================
   For Bootstrap current state on portfolio sorting
========================================================================== */


    $('ul.nav-pills li a').click(function (e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })


/* ==========================================================================
  Parallax
========================================================================== */

    $('#parallax-quote').parallax("50%", 0.8);
    $('#parallax-connect').parallax("50%", 0.8);
    $('.parallax-content').parallax("50%", 0.3);


 
/* ==========================================================================
  Flex Slider
========================================================================== */ 
    
      $('.flexslider').flexslider({
        animation: "slide",
        selector: ".home-slides > li",
        controlNav: true,
        directionNav: false ,
        direction: "vertical"
      });

 
/* ==========================================================================
  Google Maps
========================================================================== */ 
 $('.gmap').each(function(index, element) {
    var gmap = $(element);
    var addr = 'http://maps.google.com/maps?hl=en&ie=utf8&output=embed&sensor=false&iwd=1&mrt=loc&t=m&q=' + encodeURIComponent(gmap.attr('data-address'));
    addr += '&z=' + gmap.attr('data-zoom');
    if (gmap.attr('data-bubble') == 'true') {
      addr += '&iwloc=addr';
    } else {
      addr += '&iwloc=near';
    }
    gmap.attr('src', addr);
  });    

/* ==========================================================================
  Portfolio sorting 
========================================================================== */

  $(window).load(function(){
    var $container = $('.grid-wrapper');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.grid-controls li a').click(function(){
        $('.grid-controls .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});


     $('.mix a').hover(
               function(){ 
                         $(this).find('.overlay').stop().slideDown(500);
                         return false;
               },
               function(){
                         $(this).find('.overlay').stop().slideUp(500);
                         return false;
               }
     );



/* ==========================================================================
  Team
========================================================================== */

  $(".team-footer").mouseenter(function() {
            $(".follow", this).stop().animate({top:70},'fast');
            $(".follow", this).next().fadeIn()
    });

    $(".team-footer").mouseleave(function() {
            $(".follow", this).stop().animate({top:0},'fast');
            $(".follow", this).next().fadeOut()

    });


/* ==========================================================================
  Magnific Popup
========================================================================== */
/*  */
$('.grid-wrapper').magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery:{
      enabled:true
      }
    });

/* ==========================================================================
 Sticky menu
========================================================================== */
$(".navbar").sticky({topSpacing: 0});

/* ==========================================================================
 Scroll spy and scroll filter
========================================================================== */

    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing" 
     });



/*==========================================================================
VEGAS Home Slider
========================================================================== */   

  
    $.vegas('slideshow', {
        backgrounds:[
        
        { src:'img/backgrounds/1.jpg', fade:1000 },
        { src:'img/backgrounds/2.jpg', fade:1000 },
        { src:'img/backgrounds/3.jpg', fade:1000 }
        ]
      })('overlay', {
        src:'img/overlays/16.png'
      });
      $( "#vegas-next" ).click(function() {
        $.vegas('next');
      });
      $( "#vegas-prev" ).click(function() {
        $.vegas('previous');
    });

/*==========================================================================
Contact form 
========================================================================== */  

      $('#contact-form').validate({
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                minlength: 2,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.text('OK!').addClass('valid')
                .closest('.control-group').removeClass('error').addClass('success');
        }
    });

/*==========================================================================
Count to timer
========================================================================== */ 

 $('.counter').waypoint(function() {
    $(this).countTo();
     }, {
     triggerOnce: true,
     offset: 'bottom-in-view'
});       
         
                   

});

/*RSVP*/

function rsvpInput()
	{
		var inputField = document.getElementById("code_input");
		var rsvpCode = new String(inputField.value);
		if (rsvpCode == "stella") {
			$("#code_input_container").fadeOut(500);
			$(".rsvp_plusone").fadeIn(500);
		} else if (rsvpCode == "1234") {
			$("#code_input_container").fadeOut(500);
			$(".rsvp_single").fadeIn(500);
		} else {
			document.getElementById("feedback").innerHTML = "Woah woah woah, hold up...maybe try all lower case";
		}
	}



/*COUNTDOWN*/

/*
* Basic Count Down to Date and Time
* Author: @mrwigster / trulycode.com
*/
(function (e) {
	e.fn.countdown = function (t, n) {
	function i() {
		currentDate = Date.parse(r.date) / 1e3;
		eventDate = Math.floor(e.now() / 1e3);
		if (eventDate <= currentDate) {
			n.call(this);
			clearInterval(interval)
		}
		seconds = eventDate - currentDate;
        years = Math.floor(seconds / 31536000);
		seconds -= years * 60 * 60 * 24 * 365;
		days = Math.floor(seconds / 86400);
		seconds -= days * 60 * 60 * 24;
		hours = Math.floor(seconds / 3600);
		seconds -= hours * 60 * 60;
		minutes = Math.floor(seconds / 60);
		seconds -= minutes * 60;
        years == 1 ? thisEl.find(".timeRefYears").text("year") : thisEl.find(".timeRefYears").text("years");
		days == 1 ? thisEl.find(".timeRefDays").text("day") : thisEl.find(".timeRefDays").text("days");
		hours == 1 ? thisEl.find(".timeRefHours").text("hour") : thisEl.find(".timeRefHours").text("hours");
		minutes == 1 ? thisEl.find(".timeRefMinutes").text("minute") : thisEl.find(".timeRefMinutes").text("minutes");
		seconds == 1 ? thisEl.find(".timeRefSeconds").text("second") : thisEl.find(".timeRefSeconds").text("seconds");
		if (r["format"] == "on") {
            years = String(years).length >= 2 ? years : "0" + years;
			days = String(days).length >= 2 ? days : "0" + days;
			hours = String(hours).length >= 2 ? hours : "0" + hours;
			minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
			seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
		}
		if (!isNaN(eventDate)) {
            thisEl.find(".years").text(years);
			thisEl.find(".days").text(days);
			thisEl.find(".hours").text(hours);
			thisEl.find(".minutes").text(minutes);
			thisEl.find(".seconds").text(seconds)
		} else {
			alert("Invalid date. Example: 30 Tuesday 2013 15:50:00");
			clearInterval(interval)
		}
	}
	thisEl = e(this);
	var r = {
		date: null,
		format: null
	};
	t && e.extend(r, t);
	i();
	interval = setInterval(i, 1e3)
	}
	})(jQuery);
	$(document).ready(function () {
	function e() {
		var e = new Date;
		e.setDate(e.getDate() + 60);
		dd = e.getDate();
		mm = e.getMonth() + 1;
		y = e.getFullYear();
		futureFormattedDate = mm + "/" + dd + "/" + y;
		return futureFormattedDate
	}
	$("#countdown").countdown({
		date: "27 June 2015 13:00:00", // Change this to your desired date to countdown to
		format: "on"
	});
});

/*==========================================================================
Count up timer
========================================================================== */ 

window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('jan,27,2018,00:00:00'); // ****** Change this line!
};
function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);
    
  
    
  days=Math.floor(difference/(60*60*1000*24)*1);
  years = Math.floor(days / 365);
  if (years > 1){ days = days - (years * 365)}
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
  document.getElementById('years').firstChild.nodeValue = years;
  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hours').firstChild.nodeValue = hours;
  document.getElementById('minutes').firstChild.nodeValue = mins;
  document.getElementById('seconds').firstChild.nodeValue = secs;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}