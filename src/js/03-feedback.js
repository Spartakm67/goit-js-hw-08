import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const FEEDBACK_KEY = "feedback-form-state";
form.addEventListener('input', throttle(saveFeedbackMessage, 500));
form.addEventListener('submit', resetFormAndStorage);
let email;
let message;
  
const formData = {
  email,
  message,
};

loadPage();

function saveFeedbackMessage(event) {
    // event.preventDefault();

    //   const {
    //     elements: { email, message }
    // } = event.currentTarget;
    
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
  
  console.log(formData);
  
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
    
    
    console.log(localStorage);
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
  let emailSubmit;
  let messageSubmit;
  emailSubmit = event.currentTarget.elements.email.value;
  messageSubmit = event.currentTarget.elements.message.value;
    if (emailSubmit || messageSubmit) {
        
      console.log({emailSubmit, messageSubmit});  

        form.reset();
        localStorage.removeItem(FEEDBACK_KEY);
    }
   };