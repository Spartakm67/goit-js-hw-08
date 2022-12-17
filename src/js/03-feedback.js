import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const FEEDBACK_KEY = "feedback-form-state";
form.addEventListener('input', throttle(saveFeedbackMessage, 500));
form.addEventListener('submit', resetFormAndStorage);

let formData = {};

loadPage();

formDataAddStorage = () => localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));

function saveFeedbackMessage(event) {
    event.preventDefault();

      const {
        elements: { email, message }
    } = event.currentTarget;
    
    formData.email = email.value;
    formData.message = message.value;
    // console.log(formData);
    
    formDataAddStorage();
    
    // console.log(localStorage);
};

function loadPage() {
  const storageValue = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  if (storageValue) {
    // console.log(storageValue);
    form.elements.email.value = storageValue.email;
    form.elements.message.value = storageValue.message;
  }
};

function resetFormAndStorage(event) { 
    event.preventDefault();
    
    if (form.email.value || form.message.value) {
        console.log(formData);

        form.reset();
        localStorage.removeItem(FEEDBACK_KEY);
    }
   };