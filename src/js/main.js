window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
document.addEventListener('DOMContentLoaded', function () {
  $('.articmodal-close').click(function (e) {
    $.arcticmodal('close');

  });
  $('.header__button, .about__btn, .van__link, .item__link').click(function (e) {
    e.preventDefault();
    $('#popup-call').arcticmodal({
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
    })
    $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
      },
      "Please check your input."
    );
    function valEl(el) {

      el.validate({
        rules: {
          tel: {
            required: true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name: {
            required: true
          },
          text: {
            required: true,
          }
        },
        messages: {
          tel: {
            required: 'Заполните поле',
            regex: 'Телефон может содержать символы + - ()'
          },
          name: {
            required: 'Заполните поле',
          },
          text: {
            required: 'Заполните поле',
          },
          email: {
            required: 'Заполните поле',
            email: 'Неверный формат E-mail'
          }
        },
        submitHandler: function (form) {
          $('#loader').fadeIn();
          var $form = $(form);
          var $formId = $(form).attr('id');
          switch ($formId) {
            case 'popupResult':
              $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
              })
                .always(function (response) {
                  setTimeout(function () {
                    $('#loader').fadeOut();
                  }, 800);
                  setTimeout(function () {
                    $.arcticmodal('close');
                    $('#popup-thank').arcticmodal({});
                    $form.trigger('reset');
                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                  }, 1100);

                });
              break;
          }
          return false;
        }
      })
    }

    $('.js-form').each(function () {
      valEl($(this));
    });
    $('[data-scroll]').on('click', function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
    })
  });

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons = document.getElementsByClassName("accordeon__button");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons.length; i++) {
      accordeonButtons[i].className = "accordeon__button closed";
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
      pannels[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass == "accordeon__button closed") {
      this.className = "accordeon__button active";
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  }
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('one');

  const hiddenDiv = document.getElementById('dot1');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('one');

  const hiddenDiv = document.getElementById('dot2');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('one');

  const hiddenDiv = document.getElementById('dot3');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('one');

  const hiddenDiv = document.getElementById('dot4');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('two');

  const hiddenDiv = document.getElementById('dot5');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('two');

  const hiddenDiv = document.getElementById('dot6');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('two');

  const hiddenDiv = document.getElementById('dot7');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('two');

  const hiddenDiv = document.getElementById('dot8');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('three');

  const hiddenDiv = document.getElementById('dot9');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('three');

  const hiddenDiv = document.getElementById('dot10');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('three');

  const hiddenDiv = document.getElementById('dot11');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('three');

  const hiddenDiv = document.getElementById('dot12');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('four');

  const hiddenDiv = document.getElementById('dot13');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('four');

  const hiddenDiv = document.getElementById('dot14');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('four');

  const hiddenDiv = document.getElementById('dot15');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('four');

  const hiddenDiv = document.getElementById('dot16');

  // ✅ Show hidden DIV on hover
  el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });

  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs');
});
document.addEventListener("DOMContentLoaded", () => {
  const value = document.querySelector("#value")
  const input = document.querySelector("#pi_input")
  value.textContent = input.value
  input.addEventListener("input", (event) => {
    value.textContent = event.target.value
  })
});
document.addEventListener("DOMContentLoaded", () => {
  const value = document.querySelector("#value2")
  const input = document.querySelector("#pi_input2")
  value.textContent = input.value
  input.addEventListener("input", (event) => {
    value.textContent = event.target.value
  })
});
document.addEventListener("DOMContentLoaded", () => {
  const value = document.querySelector("#value3")
  const input = document.querySelector("#pi_input3")
  value.textContent = input.value
  input.addEventListener("input", (event) => {
    value.textContent = event.target.value
  })
});
document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs2');
});
document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    $(".youtube-link").grtyoutube({
      autoPlay: true
    });
  });

  (function ($) {

    $.fn.grtyoutube = function (options) {

      return this.each(function () {

        // Get video ID
        var getvideoid = $(this).attr("youtubeid");

        // Default options
        var settings = $.extend({
          videoID: getvideoid,
          autoPlay: true
        }, options);

        // Convert some values
        if (settings.autoPlay === true) { settings.autoPlay = 1 } else { settings.autoPlay = 0 }

        // Initialize on click
        if (getvideoid) {
          $(this).on("click", function () {
            $("body").append('<div class="grtvideo-popup">' +
              '<div class="grtvideo-popup-content">' +
              '<span class="grtvideo-popup-close">&times;</span>' +
              '<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/' + settings.videoID + '?rel=0&wmode=transparent&autoplay=' + settings.autoPlay + '&iv_load_policy=3" allowfullscreen frameborder="0"></iframe>' +
              '</div>' +
              '</div>');
          });
        }

        // Close the box on click or escape
        $(this).on('click', function (event) {
          event.preventDefault();
          $(".grtvideo-popup-close, .grtvideo-popup").click(function () {
            $(".grtvideo-popup").remove();
          });
        });

        $(document).keyup(function (event) {
          if (event.keyCode == 27) {
            $(".grtvideo-popup").remove();
          }
        });
      });
    };
  }(jQuery));
});
document.addEventListener("DOMContentLoaded", () => {
  // Scroll
  $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50 }, 800); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.menu li a').click(function (event) {
    $('.menu-btn').toggleClass('active');
    $('.menu').toggleClass('active');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  (function ($) {
    var elActive = '';
    $.fn.selectCF = function (options) {

      // option
      var settings = $.extend({
        color: "#888888", // color
        backgroundColor: "#FFFFFF", // background
        change: function () { }, // event change
      }, options);

      return this.each(function () {

        var selectParent = $(this);
        list = [],
          html = '';

        //parameter CSS
        var width = $(selectParent).width();

        $(selectParent).hide();
        if ($(selectParent).children('option').length == 0) { return; }
        $(selectParent).children('option').each(function () {
          if ($(this).is(':selected')) { s = 1; title = $(this).text(); } else { s = 0; }
          list.push({
            value: $(this).attr('value'),
            text: $(this).text(),
            selected: s,
          })
        })

        // style
        var style = " background: " + settings.backgroundColor + "; color: " + settings.color + " ";

        html += "<ul class='selectCF'>";
        html += "<li>";
        html += "<span class='arrowCF ion-chevron-right' style='" + style + "'></span>";
        html += "<span class='titleCF' style='" + style + "; width:" + width + "px'>" + title + "</span>";
        html += "<span class='searchCF' style='" + style + "; width:" + width + "px'><input style='color:" + settings.color + "' /></span>";
        html += "<ul>";
        $.each(list, function (k, v) {
          s = (v.selected == 1) ? "selected" : "";
          html += "<li value=" + v.value + " class='" + s + "'>" + v.text + "</li>";
        })
        html += "</ul>";
        html += "</li>";
        html += "</ul>";
        $(selectParent).after(html);
        var customSelect = $(this).next('ul.selectCF'); // add Html
        var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
        var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
        var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');

        // handle active select
        $(customSelect).unbind('click').bind('click', function (e) {
          e.stopPropagation();
          if ($(this).hasClass('onCF')) {
            elActive = '';
            $(this).removeClass('onCF');
            $(this).removeClass('searchActive'); $(seachElInput).val('');
            $(seachElOption).show();
          } else {
            if (elActive != '') {
              $(elActive).removeClass('onCF');
              $(elActive).removeClass('searchActive'); $(seachElInput).val('');
              $(seachElOption).show();
            }
            elActive = $(this);
            $(this).addClass('onCF');
            $(seachEl).children('input').focus();
          }
        })

        // handle choose option
        var optionSelect = $(customSelect).children('li').children('ul').children('li');
        $(optionSelect).bind('click', function (e) {
          var value = $(this).attr('value');
          if ($(this).hasClass('selected')) {
            //
          } else {
            $(optionSelect).removeClass('selected');
            $(this).addClass('selected');
            $(customSelect).children('li').children('.titleCF').html($(this).html());
            $(selectParent).val(value);
            settings.change.call(selectParent); // call event change
          }
        })

        // handle search 
        $(seachEl).children('input').bind('keyup', function (e) {
          var value = $(this).val();
          if (value) {
            $(customSelect).addClass('searchActive');
            $(seachElOption).each(function () {
              if ($(this).text().search(new RegExp(value, "i")) < 0) {
                // not item
                $(this).fadeOut();
              } else {
                // have item
                $(this).fadeIn();
              }
            })
          } else {
            $(customSelect).removeClass('searchActive');
            $(seachElOption).fadeIn();
          }
        })

      });
    };
    $(document).click(function () {
      if (elActive != '') {
        $(elActive).removeClass('onCF');
        $(elActive).removeClass('searchActive');
      }
    })
  }(jQuery));

  $(function () {
    var event_change = $('#event-change');
    $(".select").selectCF({
      change: function () {
        var value = $(this).val();
        var text = $(this).children('option:selected').html();
        console.log(value + ' : ' + text);
        event_change.html(value + ' : ' + text);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const rangeInputs = document.querySelectorAll('input[type="range"]')
  const numberInput = document.querySelector('input[type="number"]')

  function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }

  rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
  })

  numberInput.addEventListener('input', handleInputChange)

});
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".swiper1", {
    spaceBetween: 0,
    slidesPerView: "1",
    loop: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,

    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      992: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      1200: {
        spaceBetween: 0,
        slidesPerView: 1
      }
    }
  });
  var swiper2 = new Swiper(".swiper2", {
    spaceBetween: 20,
    slidesPerView: "2",
    loop: false,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 2
      }
    }
  });
  var swiper3 = new Swiper(".swiper3", {
    spaceBetween: 20,
    slidesPerView: "3",
    loop: false,
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3
      }
    }
  });
  var swiper5 = new Swiper(".swiper5", {
    spaceBetween: 28,
    slidesPerView: "2",
    loop: false,
    pagination: {
      el: ".swiper-pagination5",
      clickable: true,
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next5",
      prevEl: ".swiper-button-prev5",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination5",
          clickable: true,
          type: "bullets",
        },
      },
      767: {
        spaceBetween: 20,
        slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination5",
          clickable: true,
          type: "bullets",
        },
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination5",
          clickable: true,
          type: "bullets",
        },
      },
      1200: {
        spaceBetween: 28,
        slidesPerView: 2
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn2 = document.querySelector('.menu-btn2');
  let menu2 = document.querySelector('.menu2');
  menuBtn2.addEventListener('click', function () {
    menuBtn2.classList.toggle('active');
    menu2.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // svg
  $(function () {
    jQuery('img.svg').each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, else we gonna set it if we can.
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

    });
  });
});
