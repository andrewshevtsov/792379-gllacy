let modalWindow = (function() {

	let _init = function() {
		_eventsListener();
	}

	let modal = document.querySelector('.modal');
	let modalOverlay = document.querySelector('.fixed-wrap');

	let _eventsListener = function() {
		modalButton.addEventListener('click', _showModal, false);
		modalOverlay.addEventListener('click', _closeModal, false);
		modal.addEventListener('click', _stopProp, false);
	}

	let _stopProp = function(event) {
		event.stopPropagation();
	}

	let _showModal = function() {
		modalOverlay.classList.add('_show'); 
	}

	let _closeModal = function() {
		modalOverlay.classList.remove('_show');
	}

	return	{
		init: _init,
		show: _showModal,
		close: _closeModal
	}

})();

let modalButton = document.querySelector('.callback-btn');

if (!modalButton) {
	console.error("кнопки нет на странице")
} else {
	modalWindow.init();
}