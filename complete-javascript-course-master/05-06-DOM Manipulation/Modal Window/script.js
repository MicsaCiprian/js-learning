'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');

// const btnsOpenModal = document.querySelector('.show-modal'); // If there are multiple classes with the name, only first will be selected.
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
console.log(btnsOpenModal);

/* This function will close the modal. */
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* This function will open the modal. */
const openModal = function () {
  modal.classList.remove('hidden'); // Make the modal appear by removing the hidden class.
  overlay.classList.remove('hidden'); // Same could be achieved using: modal.style.display = 'block'
};

/* Add a event for all 3 buttons that shows the modal. */
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

/* Add event listener for the close modal. */
btnCloseModal.addEventListener('click', closeModal);
/* Close the modal when the overlay is clicked. */
overlay.addEventListener('click', closeModal);
