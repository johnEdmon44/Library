"use strict";

const modal = document.querySelector('#modal');
const showModal = document.querySelector('#showModal');
const closeModal = document.querySelector('#close');
const main = document.querySelector('#main');


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

  //close modal and reset input field
  modal.classList.remove('modal');
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#isRead').checked = false;
  
  displayLibrary();
}

function isRead() {
  if(document.querySelector('#isRead').checked == true) {
    return 'read';
  } else {
    return 'not read';
  }
}

function displayLibrary() {
  main.innerHTML = '';
  myLibrary.forEach(books => {
    const outTitle = document.createElement('p');
    const outAuthor = document.createElement('p');
    const outPages = document.createElement('p');
    const div = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    main.appendChild(div);
    div.appendChild(outTitle);
    div.appendChild(outAuthor);
    div.appendChild(outPages);
    div.classList.add('Items');
    div.appendChild(readBtn);
    div.appendChild(removeBtn);
    
    outTitle.textContent = books.title;
    outAuthor.textContent = books.author;
    outPages.textContent = books.pages;
    readBtn.textContent = books.status;
    removeBtn.textContent = 'Remove';

    removeBtn.classList.add('removeBtn');
    document.querySelectorAll('.removeBtn').forEach((removeButtons, i) => {
      removeButtons.setAttribute('data-index', i);
    });

    removeBtn.addEventListener('click', (e) => {
      myLibrary.splice('data-index', 1);
      e.currentTarget.parentNode.remove();
    });
  });
}
