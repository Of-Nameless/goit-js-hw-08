import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALESTORAGE_KEY = "feedback-form-state"

form.addEventListener('input', throttle((e) => {
    let persistedString = localStorage.getItem(LOCALESTORAGE_KEY);
    persistedString = persistedString ? JSON.parse(persistedString) : {};
    persistedString[e.target.name] = e.target.value;
    localStorage.setItem(LOCALESTORAGE_KEY, JSON.stringify(persistedString));
}, 500));

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    formData.forEach((email, message) => console.log(email, message));
    localStorage.removeItem(LOCALESTORAGE_KEY);
});
