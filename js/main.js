let modalWindow = ( () => {

	let _init = () => {
		_eventsListener();
	}

	let modal = document.querySelector('.modal');
	let modalOverlay = document.querySelector('.fixed-wrap');
	let feedbackBtnClose = document.querySelector('.feedback-btn-close');


	let _eventsListener = () => {
		modalButton.addEventListener('click', _showModal, false);
		modalOverlay.addEventListener('click', _closeModal, false);
		feedbackBtnClose.addEventListener('click', _closeModal, false);
		modal.addEventListener('click', _stopProp, false);
	}

	let _stopProp = (event) => {
		event.stopPropagation();
	}

	let _showModal = () => {
		modalOverlay.classList.add('_show'); 
	}

	let _closeModal = () => {
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