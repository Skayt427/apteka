document.addEventListener("DOMContentLoaded", function () {
  // Табы
  let tabsBtns = document.querySelectorAll('.js-tab-btn');

  if (tabsBtns.length > 1) {
    tabsBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        let id = this.getAttribute('data-tab');
        let content = document.querySelector('.js-tab-item[data-tab="' + id + '"]');

        this.closest('.js-tab-btns').querySelector('.js-tab-btn.active').classList.remove('active');
        this.classList.add('active');

        document.querySelector('.js-tab-item.active').classList.remove('active');
        content.classList.add('active');
      });
    });
  };

  // Чекбоксы в фальтре аптек
  if (document.querySelector('.js-bk-checkbox')) {
    let basketCheckbox = document.querySelectorAll('.js-bk-checkbox');

    basketCheckbox.forEach(basCheck => {
      basCheck.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
          if (document.querySelector('.js-bk-checkbox.active')) {
            this.closest('.js-bk-checkbox-wrap').querySelector('.js-bk-checkbox.active').classList.remove('active');
          };

          this.classList.add('active');
        };
      });
    });
  };

  // Кнопка Выбрать аптеку
  if (document.querySelector('.js-pharm-btn')) {
    let selectPharmBtn = document.querySelectorAll('.js-pharm-btn');

    selectPharmBtn.forEach(pharmBtn => {
      pharmBtn.addEventListener('click', function () {
        if (!this.closest('.js-pharm-item').classList.contains('chosen')) {
          // Кнопка
          this.innerHTML = 'аптека выбрана';

          // Старая активная кнопка
          let chosenPharm = document.querySelector('.js-pharm-item.chosen');
          if (chosenPharm) {
            chosenPharm.querySelector('.js-pharm-btn').innerHTML = 'выбрать аптеку';
            chosenPharm.classList.remove('chosen');
          };

          // Карточка аптеки
          let currentItem = this.closest('.js-pharm-item');
          currentItem.classList.add('chosen');

          // Смена имени выбранной аптеки
          // Верх
          let currentItemName = currentItem.querySelector('.pharm__name').textContent;
          this.closest('.bk').querySelector('.bk-total__address').innerHTML = currentItemName;
          // Низ
          this.closest('.bk').querySelector('.bk-total__place .bk-total__right').innerHTML = currentItemName;

          // Выбранные товары
          let chosenProductsWrap = document.querySelector('.bk-middle__right');
          chosenProductsWrap.classList.add('pharm-selected');

          // Вывод даты когда будет собран заказ
          let bkAvailableDate = document.querySelector('.js-bk-available-date span').textContent;
          let bkTotalDate = document.querySelector('.bk-total__date .bk-total__right');
          bkTotalDate.innerHTML = bkAvailableDate;

          // Появление кнопки оформить заказ
          document.querySelector('.js-bk-submit').removeAttribute('style');
        };
      });
    });
  };

  // Перенос сообщения об уцененных товарах
  let bkMes = document.querySelector('.js-bk-mes');
  let bkRightTitle = document.querySelector('.js-bk-right-title');
  let bkProdList = document.querySelector('.js-bk-prod-list');

  if (bkMes) {
    function resizeBkMes() {
      if (window.innerWidth <= 991) {
        bkRightTitle.before(bkMes);
      } else {
        bkProdList.prepend(bkMes);
      };
    };

    resizeBkMes();
    window.addEventListener('resize', resizeBkMes);
  };

  // Перенос кнопки отправить
  let bkSubmit = document.querySelector('.js-bk-submit');
  let bkBottomRight = document.querySelector('.js-bk-bottom-right');

  if (bkSubmit) {
    function resizeBkSubmit() {
      if (window.innerWidth <= 769) {
        bkBottomRight.after(bkSubmit);
      } else {
        bkBottomRight.append(bkSubmit);
      };
    };

    resizeBkSubmit();
    window.addEventListener('resize', resizeBkSubmit);
  };
});