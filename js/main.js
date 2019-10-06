$(document).ready(function() {
	$("#menu-nav").on("click", "a", function(event) {
		//отменяем стандратную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем перезод на расстояние - top за 1500 мс
		$('body, html').animate({scrollTop: top}, 1200);	
	});
});

function contactForm(state) {
	document.getElementById('contacts-main').style.display = state; 
	$('body').addClass('stop-scrolling')
	document.getElementById('main-info').style.opacity = 0.2;
	document.getElementById('main-projects').style.opacity = 0.2;	
	document.getElementById('footer').style.opacity = 0.2;
	document.getElementById('scrollTop').style.display = 'none';
	//document.getElementById('body').style.opacity = 0.2;
	//document.getElementById('contacts-main').styte.opacity = 1;
};

function contactFormClose(state) {
	document.getElementById('contacts-main').style.display = state;
	$('body').removeClass('stop-scrolling')
	document.getElementById('main-info').style.opacity = 1;
	document.getElementById('main-projects').style.opacity = 1;	
	document.getElementById('footer').style.opacity = 1;
	document.getElementById('scrollTop').style.display = 'block';
	//document.getElementById('body').style.opacity = 1;
};



window.onscroll = function () {
	var scrollElem = document.getElementById('scrollTop');
	if (document.documentElement.clientHeight == 501) {
		scrollElem.style.opacity = 0;
	} else {
		scrollElem.style.opacity = 1;
		console.log(document.body.scrollTop);
		console.log(document.documentElement.clientHeight);
	};
};

var timeout;
function goUp() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, -40);
		timeout = setTimeout('goUp()', 20);
	} else clearTimeout(timeout);
};