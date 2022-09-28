"use strict";

const modal = document.querySelector('#modal');
const showModal = document.querySelector('#showModal');
const closeModal = document.querySelector('#close');


showModal.addEventListener('click', function() {
  modal.classList.add('modal');
});

closeModal.addEventListener('click', function() {
  modal.classList.remove('modal');
}); 


let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBook() {
  myLibrary.push(new Book(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pages').value,
    isRead()
  ));
  modal.classList.remove('modal');
}

function isRead() {
  if(document.querySelector('#isRead').checked == true) {
    return 'read';
  } else {
    return 'not read';
  }
}

