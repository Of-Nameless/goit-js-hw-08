import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input')
const LOCALESTORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle((e) => {
    let persistedString = localStorage.getItem(LOCALESTORAGE_KEY);
    // console.log(persistedString);
    persistedString = persistedString ? JSON.parse(persistedString) : {};
    persistedString[e.target.name] = e.target.value;
    // if (persistedString) {
    //     textarea.value = persistedString;
    //     input.value = persistedString;
    // }
    // console.log(e.target.value);
    // console.log(e.target.name);
    localStorage.setItem(LOCALESTORAGE_KEY, JSON.stringify(persistedString));
}, 500));

form.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
    const formData = new FormData(form);
    formData.forEach((email, message) => console.log(email, message));
    localStorage.removeItem(LOCALESTORAGE_KEY);
});
