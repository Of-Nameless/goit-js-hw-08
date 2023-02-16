import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// console.log(form);

const LOCALESTORAGE_KEY = 'feedback-form-state';
let persistedString = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

reloadForm();

function onFormInput(e) {
    persistedString[e.target.name] = e.target.value;

    localStorage.setItem(LOCALESTORAGE_KEY, JSON.stringify(persistedString));
}

function onFormSubmit(e) {
  e.preventDefault();

  const {email, message} = e.target;
    if (email.value === '' || message.value === '') {
      return;
  }

    form.reset();
    console.log(persistedString);

    localStorage.removeItem(LOCALESTORAGE_KEY);
    persistedString = {};
}

function reloadForm() {
    const getStorage = localStorage.getItem(LOCALESTORAGE_KEY);

    if (getStorage) {
        persistedString = JSON.parse(getStorage);
        // console.log(JSON.parse(getStorage));
    }
    for (const key in persistedString) {
        form.elements[key].value = persistedString[key];
    }
}