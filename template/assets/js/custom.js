(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay: true,
      nav: true,
      margin:0,
      responsive:{ 
          1200:{
              items:5
          },
          992:{
              items:3
          },
          760:{
            items:2
        }
      }
  });
  
  $("#modal_trigger").leanModal({
		top: 100,
		overlay: 0.6,
		closeButton: ".modal_close"
});

$(function() {
		// Calling Login Form
		$("#login_form").click(function() {
				$(".social_login").hide();
				$(".user_login").show();
				return false;
		});

		// Calling Register Form
		$("#register_form").click(function() {
				$(".social_login").hide();
				$(".user_register").show();
				$(".header_title").text('Register');
				return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function() {
				$(".user_login").hide();
				$(".user_register").hide();
				$(".social_login").show();
				$(".header_title").text('Login');
				return false;
		});
});

  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }


  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);

function showLanguage(lang) {

  var languageButtons = document.getElementsByClassName("language");

  for (var i = 0; i < languageButtons.length; i++) {
    var button = languageButtons[i];
    var language = button.getAttribute("data-lang");
    var languageText = button.getElementsByClassName("language-text")[0];

    if (language === lang) {
      button.style.display = "none";
    } else {
      button.style.display = "inline-block";
    }

    languageText.style.display = "block";
  }

  var languageButtons = document.getElementsByClassName("language-button");
  for (var i = 0; i < languageButtons.length; i++) {
    languageButtons[i].style.display = "none";
  }
  
  document.getElementById(lang).style.display = "block";
  
  var navbarLinks = document.getElementsByClassName("navbar-link");
  for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].style.display = "none";
    if (navbarLinks[i].getAttribute("data-lang") === lang) {
      navbarLinks[i].style.display = "block";
    }
  }
  
  var downloadButton = document.getElementById("download-button");
  var buttonText = {
    "en": "Download now",
    "fr": "Télécharger maintenant",
    "ar": "حمل الآن"
  };
  downloadButton.innerHTML = buttonText[lang];

  var downloadLinks = document.getElementsByClassName("download-link");
  for (var i = 0; i < downloadLinks.length; i++) {
    var downloadLink = downloadLinks[i];
    var spans = downloadLink.getElementsByTagName("span");
    for (var j = 0; j < spans.length; j++) {
      var span = spans[j];
      var langAttr = span.getAttribute("data-lang");
      if (langAttr === lang) {
        span.style.display = "inline";
      } else {
        span.style.display = "none";
      }
    }
  }
  var featuresItems = document.getElementsByClassName("features-item");
  for (var i = 0; i < featuresItems.length; i++) {
    var featuresItem = featuresItems[i];
    var titles = featuresItem.getElementsByClassName("features-item-title")[0].getElementsByTagName("span");
    var texts = featuresItem.getElementsByClassName("features-item-text")[0].getElementsByTagName("span");
    for (var j = 0; j < titles.length; j++) {
      var title = titles[j];
      var text = texts[j];
      var langAttr = title.getAttribute("data-lang");
      if (langAttr === lang) {
        title.style.display = "block";
        text.style.display = "block";
      } else {
        title.style.display = "none";
        text.style.display = "none";
      }
    }
  }
  var overviewContent = document.getElementsByClassName("overview-content")[0];
  var overviewItems = overviewContent.getElementsByTagName("span");
  for (var i = 0; i < overviewItems.length; i++) {
    var item = overviewItems[i];
    var langAttr = item.getAttribute("data-lang");
    if (langAttr === lang) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  var section = document.getElementById('blog');
  var elements = section.querySelectorAll('[data-lang]');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elementLang = element.getAttribute('data-lang');
    if (elementLang === lang) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }

  var titles = document.querySelectorAll('title[data-lang]');

  for (var i = 0; i < titles.length; i++) {
    var title = titles[i];

    if (title.getAttribute('data-lang') === lang) {
      title.style.display = 'block';
      document.title = title.innerText;
    } else {
      title.style.display = 'none';
    }
  }
  var logoElements = document.getElementsByClassName("logo");
for (var i = 0; i < logoElements.length; i++) {
  var logoElement = logoElements[i];
  var langAttr = logoElement.getAttribute("data-lang");
  if (langAttr === lang) {
    logoElement.style.display = "flex";
  } else {
    logoElement.style.display = "none";
  }
}

}

// go top variable
const goTopBtn = document.querySelector("[data-go-top]");

// window scroll event for go top button
window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});
  

// utility functions
if(!Util) function Util () {};

Util.addClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.add(classList[0]);
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.remove(classList[0]);
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
  if(bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};

Util.moveFocus = function (element) {
  if( !element ) element = document.getElementsByTagName('body')[0];
  element.focus();
  if (document.activeElement !== element) {
    element.setAttribute('tabindex','-1');
    element.focus();
  }
};

Util.getIndexInArray = function(array, el) {
  return Array.prototype.indexOf.call(array, el);
};


// File#: _1_language-picker
// Usage: codyhouse.co/license
(function() {
	var LanguagePicker = function(element) {
		this.element = element;
		this.select = this.element.getElementsByTagName('select')[0];
		this.options = this.select.getElementsByTagName('option');
		this.selectedOption = getSelectedOptionText(this);
		this.pickerId = this.select.getAttribute('id');
		this.trigger = false;
		this.dropdown = false;
		this.firstLanguage = false;
		// dropdown arrow inside the button element
		this.arrowSvgPath = '<svg viewBox="0 0 16 16"><polygon points="3,5 8,11 13,5 "></polygon></svg>';
		this.globeSvgPath = '<svg viewBox="0 0 16 16"><path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M13.9,7H12c-0.1-1.5-0.4-2.9-0.8-4.1 C12.6,3.8,13.6,5.3,13.9,7z M8,14c-0.6,0-1.8-1.9-2-5H10C9.8,12.1,8.6,14,8,14z M6,7c0.2-3.1,1.3-5,2-5s1.8,1.9,2,5H6z M4.9,2.9 C4.4,4.1,4.1,5.5,4,7H2.1C2.4,5.3,3.4,3.8,4.9,2.9z M2.1,9H4c0.1,1.5,0.4,2.9,0.8,4.1C3.4,12.2,2.4,10.7,2.1,9z M11.1,13.1 c0.5-1.2,0.7-2.6,0.8-4.1h1.9C13.6,10.7,12.6,12.2,11.1,13.1z"></path></svg>';

		initLanguagePicker(this);
		initLanguagePickerEvents(this);
	};

	function initLanguagePicker(picker) {
		// create the HTML for the custom dropdown element
		picker.element.insertAdjacentHTML('beforeend', initButtonPicker(picker) + initListPicker(picker));
		
		// save picker elements
		picker.dropdown = picker.element.getElementsByClassName('language-picker__dropdown')[0];
		picker.languages = picker.dropdown.getElementsByClassName('language-picker__item');
		picker.firstLanguage = picker.languages[0];
		picker.trigger = picker.element.getElementsByClassName('language-picker__button')[0];
	};

	function initLanguagePickerEvents(picker) {
		// make sure to add the icon class to the arrow dropdown inside the button element
		var svgs = picker.trigger.getElementsByTagName('svg');
		Util.addClass(svgs[0], 'li4-icon');
		Util.addClass(svgs[1], 'li4-icon');
		// language selection in dropdown
		// ⚠️ Important: you need to modify this function in production
		initLanguageSelection(picker);

		// click events
		picker.trigger.addEventListener('click', function(){
			toggleLanguagePicker(picker, false);
		});
		// keyboard navigation
		picker.dropdown.addEventListener('keydown', function(event){
			if(event.keyCode && event.keyCode == 38 || event.key && event.key.toLowerCase() == 'arrowup') {
				keyboardNavigatePicker(picker, 'prev');
			} else if(event.keyCode && event.keyCode == 40 || event.key && event.key.toLowerCase() == 'arrowdown') {
				keyboardNavigatePicker(picker, 'next');
			}
		});
	};

	function toggleLanguagePicker(picker, bool) {
		var ariaExpanded;
		if(bool) {
			ariaExpanded = bool;
		} else {
			ariaExpanded = picker.trigger.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
		}
		picker.trigger.setAttribute('aria-expanded', ariaExpanded);
		if(ariaExpanded == 'true') {
			picker.firstLanguage.focus(); // fallback if transition is not supported
			picker.dropdown.addEventListener('transitionend', function cb(){
				picker.firstLanguage.focus();
				picker.dropdown.removeEventListener('transitionend', cb);
			});
			// place dropdown
			placeDropdown(picker);
		}
	};

	function placeDropdown(picker) {
		var triggerBoundingRect = picker.trigger.getBoundingClientRect();
		Util.toggleClass(picker.dropdown, 'language-picker__dropdown--right', (window.innerWidth < triggerBoundingRect.left + picker.dropdown.offsetWidth));
		Util.toggleClass(picker.dropdown, 'language-picker__dropdown--up', (window.innerHeight < triggerBoundingRect.bottom + picker.dropdown.offsetHeight));
	};

	function checkLanguagePickerClick(picker, target) { // if user clicks outside the language picker -> close it
		if( !picker.element.contains(target) ) toggleLanguagePicker(picker, 'false');
	};

	function moveFocusToPickerTrigger(picker) {
		if(picker.trigger.getAttribute('aria-expanded') == 'false') return;
		if(document.activeElement.closest('.language-picker__dropdown') == picker.dropdown) picker.trigger.focus();
	};

	function initButtonPicker(picker) { // create the button element -> picker trigger
		// check if we need to add custom classes to the button trigger
		var customClasses = picker.element.getAttribute('data-trigger-class') ? ' '+picker.element.getAttribute('data-trigger-class') : '';
	
		var button = '<button class="language-picker__button'+customClasses+'" aria-label="'+picker.select.value+' '+picker.element.getElementsByTagName('label')[0].textContent+'" aria-expanded="false" aria-controls="'+picker.pickerId+'-dropdown">';
		button = button + '<span aria-hidden="true" class="language-picker__label language-picker__flag language-picker__flag--'+picker.select.value+'">'+picker.globeSvgPath+'<em>'+picker.selectedOption+'</em>';
		button = button +picker.arrowSvgPath+'</span>';
		return button+'</button>';
	};

	function initListPicker(picker) { // create language picker dropdown
		var list = '<div class="language-picker__dropdown" aria-describedby="'+picker.pickerId+'-description" id="'+picker.pickerId+'-dropdown">';
		list = list + '<p class="li4-sr-only" id="'+picker.pickerId+'-description">'+picker.element.getElementsByTagName('label')[0].textContent+'</p>';
		list = list + '<ul class="language-picker__list" role="listbox">';
		for(var i = 0; i < picker.options.length; i++) {
			var selected = picker.options[i].selected ? ' aria-selected="true"' : '',
				language = picker.options[i].getAttribute('lang');
			list = list + '<li><a lang="'+language+'" hreflang="'+language+'" href="'+getLanguageUrl(picker.options[i])+'"'+selected+' role="option" data-value="'+picker.options[i].value+'" class="language-picker__item language-picker__flag language-picker__flag--'+picker.options[i].value+'"><span>'+picker.options[i].text+'</span></a></li>';
		};
		return list;
	};

	function getSelectedOptionText(picker) { // used to initialize the label of the picker trigger button
		var label = '';
		if('selectedIndex' in picker.select) {
			label = picker.options[picker.select.selectedIndex].text;
		} else {
			label = picker.select.querySelector('option[selected]').text;
		}
		return label;
	};

	function getLanguageUrl(option) {
		// ⚠️ Important: You should replace this return value with the real link to your website in the selected language
		// option.value gives you the value of the language that you can use to create your real url (e.g, 'english' or 'italiano')
		return '#';
	};

	function initLanguageSelection(picker) {
		picker.element.getElementsByClassName('language-picker__list')[0].addEventListener('click', function(event){
			var language = event.target.closest('.language-picker__item');
			if(!language) return;
			
			if(language.hasAttribute('aria-selected') && language.getAttribute('aria-selected') == 'true') {
				// selecting the same language
				event.preventDefault();
				picker.trigger.setAttribute('aria-expanded', 'false'); // hide dropdown
			} else { 
				// ⚠️ Important: this 'else' code needs to be removed in production. 
				// The user has to be redirected to the new url -> nothing to do here
				event.preventDefault();
				picker.element.getElementsByClassName('language-picker__list')[0].querySelector('[aria-selected="true"]').removeAttribute('aria-selected');
				language.setAttribute('aria-selected', 'true');
				picker.trigger.getElementsByClassName('language-picker__label')[0].setAttribute('class', 'language-picker__label language-picker__flag language-picker__flag--'+language.getAttribute('data-value'));
				picker.trigger.getElementsByClassName('language-picker__label')[0].getElementsByTagName('em')[0].textContent = language.textContent;
				picker.trigger.setAttribute('aria-expanded', 'false');
			}
		});
	};

	function keyboardNavigatePicker(picker, direction) {
		var index = Util.getIndexInArray(picker.languages, document.activeElement);
		index = (direction == 'next') ? index + 1 : index - 1;
		if(index < 0) index = picker.languages.length - 1;
		if(index >= picker.languages.length) index = 0;
		Util.moveFocus(picker.languages[index]);
	};

	//initialize the LanguagePicker objects
	var languagePicker = document.getElementsByClassName('js-language-picker');
	if( languagePicker.length > 0 ) {
		var pickerArray = [];
		for( var i = 0; i < languagePicker.length; i++) {
			(function(i){pickerArray.push(new LanguagePicker(languagePicker[i]));})(i);
		}

		// listen for key events
		window.addEventListener('keyup', function(event){
			if( event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape' ) {
				// close language picker on 'Esc'
				pickerArray.forEach(function(element){
					moveFocusToPickerTrigger(element); // if focus is within dropdown, move it to dropdown trigger
					toggleLanguagePicker(element, 'false'); // close dropdown
				});
			} 
		});
		// close language picker when clicking outside it
		window.addEventListener('click', function(event){
			pickerArray.forEach(function(element){
				checkLanguagePickerClick(element, event.target);
			});
		});
	}
}());




