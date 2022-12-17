import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK_KEY = "feedback-form-state";

feedbackForm.addEventListener('input', foo1);
feedbackForm.addEventListener('submit', throttle((foo2), 500));

