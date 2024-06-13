
jQuery(window).on('beforeunload', function () {
	// jQuery('body').hide();
	jQuery(window).scrollTop(0);
});


// const perfData = window.performance.timing,
// 	EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
// 	time = parseInt((EstimatedTime / 1000) % 60) * 100;

// // Percentage Increment Animation
// var PercentageID = $(".loading__timer"),
// 	start = 0,
// 	end = 100,
// 	durataion = time;
// animateValue(PercentageID, start, end, durataion);

// function animateValue(id, start, end, duration) {

// 	var range = end - start,
// 		current = start,
// 		increment = end > start ? 1 : -1,
// 		stepTime = Math.abs(Math.floor(duration / range)),
// 		obj = $(id);

// 	var timer = setInterval(function () {
// 		current += increment;
// 		$(obj).text(`${current}%`);
// 		//obj.innerHTML = current;
// 		if (current == end) {
// 			clearInterval(timer);
// 			$("body").removeClass("invisible");
// 			$('.loader__bg').fadeOut(300);
// 		}
// 	}, stepTime);

// }

// Fading Out Loadbar on Finised
if (window.innerWidth <= 991) {
	$(".navMenu li a").click(function () {
		// $(".navbarBtn").click()
	})

}

$(".navbarBtn").click(function () {
	$("html").toggleClass("showmenu")
})


gsap.registerPlugin(ScrollTrigger);


// tabBtn


$(document).ready(function () {
	$('.tabBtn').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('.tabBtn').removeClass('current');
		$('.tabContent').removeClass('current');
		$(this).addClass('current');
		$("." + tab_id).addClass('current');
	})
})
$(document).ready(function () {
	$('.scrollDesignBtn').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('.scrollDesignBtn').removeClass('active');
		$('.mediaTabcontent').removeClass('active');
		$(this).addClass('active');
		$("#" + tab_id).addClass('active');
	})
})

// progressbar

$(document).ready(function () {
	$('.progressbar li').click(function () {
		var tab_id = $(this).attr('data-for');
		// $('ul.trulyTab li').removeClass('current');
		$(this).siblings().removeClass('active');
		// $('.trulyTab__cntnt').removeClass('current');
		$("#" + tab_id).siblings().removeClass('active');
		$(this).addClass('active');
		$("#" + tab_id).addClass('active');
	});
});
$(document).ready(function () {
	$('.nftPage__maintab').click(function () {
		var tab_id = $(this).attr('data-tab');
		// $('ul.trulyTab li').removeClass('current');
		$(this).siblings().removeClass('active');
		// $('.trulyTab__cntnt').removeClass('current');
		$("#" + tab_id).siblings().removeClass('active');
		$(this).addClass('active');
		$("#" + tab_id).addClass('active');
	});
});

let tlne = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } })
// console.log("tlne", tlne)
setTimeout(function () {
	tlne.fromTo(".homeBanner__diamond", { opacity: 0, yPercent: 20, }, { duration: 1.5, opacity: 1, yPercent: 0, }, "-=0")
	tlne.fromTo(".homeBanner__text", { opacity: 0, yPercent: 20, }, { duration: 1, opacity: 1, yPercent: 0, }, "-=1")
	tlne.fromTo(".homeBanner__paragraph", { opacity: 0, yPercent: 20, }, { duration: 1.2, opacity: 1, yPercent: 0, }, "-=1")
	tlne.fromTo(".homeBanner__btnHolder", { opacity: 0, yPercent: 20, }, { duration: 1.1, opacity: 1, yPercent: 0, }, "-=1")


}, 100);
// tlne.to(".commonSection__intro", { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1, }, "-=2")

gsap.timeline({
	scrollTrigger: {
		trigger: ".homeBanner",
		start: "bottom 99.99%",
		end: "bottom 0%",
		scrub: true,
	}
})


	.to(".homeBanner__diamond", { yPercent: -20, }, 0)
	.to(".homeBanner__text", { yPercent: -20, }, 0)
	.to(".homeBanner__paragraph", { yPercent: -20, }, 0)
	.to(".homeBanner__btnHolder", { yPercent: -20, }, 0)

gsap.timeline({
	scrollTrigger: {
		trigger: ".bottomShowcase",
		start: "top 40%",
		end: "bottom 40%",
		scrub: true,
	}
})
	.to(".bottomShowcase__img", { bottom: "-20px" }, 0)



gsap.timeline({
	scrollTrigger: {
		trigger: ".section6",
		start: "bottom 99%",
		end: "bottom 0%",
		scrub: true,
		stagger: 0.3
	}
})
	.to(".section6_1> img", { yPercent: 20, }, 0)

if (window.innerWidth >= 768) {

	gsap.timeline({
		scrollTrigger: {
			trigger: ".section4",
			start: "top 50%",
			end: "bottom 0%",
			scrub: true,
			stagger: 0.3
		}
	})
		.to(".section4", { backgroundPosition: "0% 100%" }, 0)

	gsap.timeline({
		scrollTrigger: {
			trigger: ".section5",
			start: "top 50%",
			end: "bottom 0%",
			scrub: true,
			stagger: 0.3
		}
	})
		.to(".section5", { backgroundPosition: "0% 100%" }, 0)


}

gsap.timeline({
	scrollTrigger: {
		trigger: ".section9",
		start: "top 79%",
		end: "bottom 30%",
		scrub: true,
	}
})
	.fromTo(".toptenticals1", { xPercent: 20, }, { xPercent: 0, }, 0)
	.fromTo(".toptenticals2", { xPercent: -20, }, { xPercent: 0, }, 0)
	.to(".bottomtenticals1", { xPercent: 10, }, 0)
	.to(".bottomtenticals2", { xPercent: -20, }, 0)

// gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".section9",
// 		start: "top 50%",
// 		end: "bottom 90%",
// 		scrub: true,
// 	}
// })
// 	.fromTo(".joinusnowBox__frame", { opacity: 0, }, { opacity: 1, }, 0)
// 	.fromTo(".joinusnowBox__character", { opacity: 0, xPercent: 20, }, { opacity: 1, xPercent: 0, }, 0)
// 	.fromTo(".section9 .commonHeading__title", { xPercent: 20, opacity: 0 }, { xPercent: 0, opacity: 1 }, 0)
// 	.fromTo(".joinusnowBox__buttons", { xPercent: 20, opacity: 0 }, { xPercent: 0, opacity: 1 }, 0)


var containers = gsap.utils.toArray(".revealAnimation");
containers.forEach(function (container) {
	gsap.fromTo(
		container.querySelectorAll(".gs_reveal"),
		{ y: 50, opacity: 0, },
		{
			y: 0,
			opacity: 1,
			stagger: 0.3,
			scrollTrigger: {
				trigger: container,
				scrub: true,
				start: "top 80%",
				end: "bottom 90%",
				className: "active",
				immediateRender: false,

			}
		}
	);
});


var gameplay = gsap.utils.toArray(".game_points");

gameplay.forEach(function (container) {
	gsap.fromTo(
		container.querySelectorAll(".gs_reveals1"),
		{ y: 50, opacity: 0, },
		{
			y: 0,
			opacity: 1,
			stagger: 0.3,
			scrollTrigger: {
				trigger: gameplay,
				scrub: true,
				start: "top 100%",
				end: "bottom 80%",
				className: "active",
				immediateRender: false,

			}
		}
	);
});



gsap.timeline({
	// ease: "power4.inOut",

	scrollTrigger: {
		trigger: ".roadmap__holder",
		start: "top 50%",
		end: "bottom 80%",
		scrub: true,
		immediateRender: false,
		// markers: true,
	}
})
	.fromTo(".roadmapGrid__box1 .roadmapGrid__diamond", { top: "200px", }, { bottom: "-10px", duration: 1, stagger: 0.2, }, 0)
	.fromTo(".roadmapGrid__box2 .roadmapGrid__diamond", { top: "188px", }, { top: "18px", duration: 1, stagger: 0.2, left: "-20px", }, "<-0.5")
	.fromTo(".roadmapGrid__box3 .roadmapGrid__diamond", { top: "278px", }, { top: "45px", duration: 1, stagger: 0.2, }, 0)
	.fromTo(".roadmapGrid__box4 .roadmapGrid__diamond", { top: "260px", }, { top: "24px", duration: 1, stagger: 0.2, }, "<-0.3")
	.fromTo(".roadmapGrid__box5 .roadmapGrid__diamond", { bottom: "200px", }, { bottom: "-10px", duration: 1, stagger: 0.2, }, 0)
	.fromTo(".roadmapGrid__box6 .roadmapGrid__diamond", { top: "232px", }, { top: "82px", duration: 1, stagger: 0.2, }, "<-0.1")





// gsap.fromTo(
// 	document.querySelectorAll(".roadmapGrid__box"),
// 	{ y: 150, opacity: 0, },
// 	{
// 		y: 0,
// 		opacity: 1,
// 		stagger: 0.3,
// 		scrollTrigger: {
// 			trigger: ".roadmap",
// 			scrub: true,
// 			start: "top 60%",
// 			end: "bottom 98%",
// 			immediateRender: false,

// 		}
// 	},
// );


// gsap.fromTo(
// 	document.querySelectorAll(".roadmapGrid__inner>ul"),
// 	{ y: 150, opacity: 0, },
// 	{
// 		y: 0, opacity: 1,
// 		stagger: 0.3,
// 		scrollTrigger: {
// 			trigger: ".roadmap",
// 			scrub: true,
// 			start: "top 59%",
// 			end: "bottom 98%",
// 			immediateRender: false,
// 		}
// 	},

// );


// gsap.fromTo(
// 	document.querySelectorAll(".roadmapGrid__diamond"),
// 	{ rotate: 360, opacity: 0, scale: 0, y: -150 },
// 	{
// 		rotate: 0, opacity: 1, scale: 1, y: 0,
// 		stagger: 0.4,
// 		scrollTrigger: {
// 			trigger: ".roadmap",
// 			scrub: true,
// 			start: "top 59%",
// 			end: "bottom 98%",
// 			immediateRender: false,
// 		}
// 	},

// );

// gsap.fromTo(
// 	document.querySelectorAll(".roadmapGrid__head"),
// 	{ rotateX: 360, opacity: 0, scale: 0, y: -150 },
// 	{
// 		rotateX: 0, opacity: 1, scale: 1, y: 0,
// 		stagger: 0.4,
// 		scrollTrigger: {
// 			trigger: ".roadmap",
// 			scrub: true,
// 			start: "top 59%",
// 			end: "bottom 98%",
// 			immediateRender: false,

// 		}
// 	},
// );
gsap.fromTo(
	document.querySelectorAll(".teamBox"),
	{ autoAlpha: 0, xPercent: 10 },
	{
		duration: 2, autoAlpha: 1, xPercent: 0,
		stagger: 0.4,
		scrollTrigger: {
			trigger: "#team",
			start: "top 80%",
			end: "bottom 90%",
			scrub: true,
			immediateRender: false,

		}
	},

);

if (window.innerWidth >= 991) {

	gsap.timeline({
		scrollTrigger: {
			trigger: ".joinUpContentHolder",
			start: "top 100%",
			end: "bottom 80%",
			scrub: true,
		}
	})
		.fromTo(".joinusnowBox__frame", { opacity: 0, }, { opacity: 1, }, 0)
		.fromTo(".joinusnowBox__character", { opacity: 0, xPercent: 20, }, { opacity: 1, xPercent: 0, }, 0)
		.fromTo(".joinusnowBox__contentRight .heading-sub h2", { xPercent: 20, opacity: 0 }, { xPercent: 0, opacity: 1 }, 0)
		.fromTo(".joinusnowBox__buttons", { xPercent: 20, opacity: 0 }, { xPercent: 0, opacity: 1 }, 0)

}


gsap.fromTo(
	document.querySelectorAll(".gameplaybox"),
	{ autoAlpha: 0, yPercent: 20 },
	{
		duration: 2, autoAlpha: 1, yPercent: 0,
		stagger: 0.4,
		scrollTrigger: {
			trigger: ".gameplaySec",
			start: "top 60%",
			end: "top 20%",
			scrub: true,
			immediateRender: false,

		}
	},

);
gsap.fromTo(
	document.querySelectorAll(".gameplayboxcntnt__icon"),
	{ autoAlpha: 0, scale: 0, rotate: 180 },
	{
		duration: 3, autoAlpha: 1, scale: 1, rotate: 0,
		stagger: 0.4,
		scrollTrigger: {
			trigger: ".gameplaySec",
			start: "top 60%",
			end: "top 20%",
			scrub: true,
			immediateRender: false,

		}
	},

);



//select option style 
$('.formControl--select').each(function () {
	var $this = $(this), numberOfOptions = $(this).children('option').length;

	$this.addClass('select-hidden ');
	$this.wrap('<div class="select formControl"></div>');
	$this.after('<div class="select-styled"></div>');

	var $styledSelect = $this.next('div.select-styled');
	$styledSelect.text($this.children('option').eq(0).text());

	var $list = $('<ul />', {
		'class': 'select-options'
	}).insertAfter($styledSelect);

	for (var i = 0; i < numberOfOptions; i++) {
		$('<li />', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
		}).appendTo($list);
		//if ($this.children('option').eq(i).is(':selected')){
		//  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
		//}
	}

	var $listItems = $list.children('li');

	$styledSelect.click(function (e) {
		e.stopPropagation();
		$('div.select-styled.active').not(this).each(function () {
			$(this).removeClass('active').next('ul.select-options').hide();
		});
		$(this).toggleClass('active').next('ul.select-options').toggle();
	});

	$listItems.click(function (e) {
		e.stopPropagation();
		$styledSelect.text($(this).text()).removeClass('active');
		$this.val($(this).attr('rel'));
		$list.hide();
		//console.log($this.val());
	});

	$(document).click(function () {
		$styledSelect.removeClass('active');
		$list.hide();
	});

});



$(".navMenu__downArrow").click(function () {
	$(this).parent().siblings().find(".navMenu__downArrow").removeClass("active");
	$(this).parent().siblings().find(".navMenu__dropdown").slideUp(350);
	$(this).parent().find(".navMenu__dropdown").slideToggle(350);
	$(this).toggleClass("active")
})

if (window.innerWidth <= 991) {

	$(".mobile_toggle").click(function () {
		$(this).parent().siblings().find(".navMenu__downArrow").removeClass("active");
		$(this).parent().siblings().find(".navMenu__dropdown").slideUp(350);
		$(this).parent().find(".navMenu__dropdown").slideToggle(350);
		$(this).toggleClass("active");
	});
}



$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	//>=, not <=
	if (scroll >= 200) {
		$(".navbarMain").addClass("darkHeader");
	}
	else {
		$(".navbarMain").removeClass("darkHeader");
	}
});



const lenis = new Lenis({
	duration: 1.4,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
	direction: 'vertical', // vertical, horizontal
	gestureDirection: 'vertical', // vertical, horizontal, both
	smooth: true,
	mouseMultiplier: 1,
	smoothTouch: false,
	touchMultiplier: 2,
	infinite: false,
})



//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
	// console.log({ scroll, limit, velocity, direction, progress })
	var updateprgrss = progress * 100
	// console.log("---updateprgrss----",updateprgrss)
	$('.progressIndicator__innr').css('width', `${updateprgrss}%`);
})


function raf(time) {
	lenis.raf(time)
	ScrollTrigger.update();
	requestAnimationFrame(raf)

}

requestAnimationFrame(raf)






function myHandler(e) {
	// alert("sd")
	$('.game_slide').slick('slickGoTo', parseInt($('.game_slide').slick('slickCurrentSlide')) + 1);
	$('.tab_bounty').removeClass("active");
	$(".tabBountyBtn").removeClass("active");
}

$(".tabBountyBtn").click(function () {

	var video = $(this).parents('.tab_bounty').find("video").get(0);
	video.addEventListener('ended', myHandler, false);

	$(this).toggleClass("active");
	if (video.paused === true) {
		video.play();
		$(this).parents('.tab_bounty').addClass("active");
	} else {
		video.pause();
		$(this).parents('.tab_bounty').removeClass("active");
	}


	// $(this).next("video")[0].addEventListener('ended', myHandler, false);
	// console.log("$video", $(this).find("video") )

})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		lenis.scrollTo(this.getAttribute('href'), { offset: -150 })
	});
})


// lenis.scrollTo('#top',{offset:100,duration:4}
