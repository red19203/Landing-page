'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarCloseBtn = document.querySelector("[data-nav-close-btn]");

navbarOpenBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

navbarCloseBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});



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


  


















