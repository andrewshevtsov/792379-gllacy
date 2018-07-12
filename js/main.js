var modalWindow = (function () {

  var _init = function () {
    _eventsListener();
  }

  var modal = document.querySelector(".modal");
  var modalOverlay = document.querySelector(".fixed-wrap");
  var feedbackBtnClose = document.querySelector(".feedback-btn-close");

  var _eventsListener = function () {
    modalButton.addEventListener("click", _showModal, false);
    modalOverlay.addEventListener("click", _closeModal, false);
    feedbackBtnClose.addEventListener("click", _closeModal, false);
    modal.addEventListener("click", _stopProp, false);
  }

  var _stopProp = function (evt) {
    evt.stopPropagation();
  }

  var _showModal = function (evt) {
    evt.preventDefault();
    modalOverlay.classList.add("_show");
  }

  var _closeModal = function (evt) {
    evt.preventDefault();
    modalOverlay.classList.remove("_show");
  }

  return {
    init: _init,
    show: _showModal,
    close: _closeModal
  }

})();

var modalButton = document.querySelector(".callback-btn");

if (!modalButton) {
  console.error("кнопки нет на странице");
} else {
  modalWindow.init();
}
