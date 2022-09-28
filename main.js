"use strict";

const modal = document.querySelector('#modal');
const showModal = document.querySelector('#showModal');
const closeModal = document.querySelector('#close')

showModal.addEventListener('click', function() {
  modal.classList.add('modal');
});

closeModal.addEventListener('click', function() {
  closeModal.required = false;
  modal.classList.remove('modal');
})