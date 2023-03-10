import "./style.css"
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


class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}


function addBookToLibrary() {

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
  
  updateLibraryUI();

  
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}


function isRead() {
  if(document.querySelector('#isRead').checked == true) {
    return 'read';
  } else {
    return 'not read';
  }
}


const addBookBtn = document.querySelector("#addBook");
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
});


function updateLibraryUI() {
  const main = document.querySelector('#main');
  main.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const div = document.createElement('div');
    div.classList.add('Items');
    main.appendChild(div);


    const outTitle = document.createElement('p');
    outTitle.textContent = book.title;
    div.appendChild(outTitle);


    const outAuthor = document.createElement('p');
    outAuthor.textContent = book.author;
    div.appendChild(outAuthor);


    const outPages = document.createElement('p');
    outPages.textContent = book.pages;
    div.appendChild(outPages);


    const readBtn = document.createElement('button');
    readBtn.textContent = book.status;
    div.appendChild(readBtn);


    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    div.appendChild(removeBtn);


    removeBtn.addEventListener('click', () => {
      myLibrary.splice(index, 1);
      updateLibraryUI();

      localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    });


    readBtn.addEventListener('click', () => {
      book.status = (book.status === 'read') ? 'not read' : 'read';
      readBtn.textContent = book.status;

      localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    });
  });
}


if (localStorage.getItem('myLibrary')) {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  updateLibraryUI();
}