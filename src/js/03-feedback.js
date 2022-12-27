import { throttle } from "lodash";
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name = "email"]'),
    message: document.querySelector('textarea[name = "message"]'),
    localStorage_key: 'feedback-form-state',
}

populateTextarea();

refs.form.addEventListener(
    'input', 
    throttle(evt => {
        const toSaved = { email: refs.email.value, message: refs.message.value };
        localStorage.setItem(refs.localStorage_key, JSON.stringify(toSaved));
    }, 500)
);

refs.form.addEventListener('submit', evt => {
    evt.preventDefault();
    console.log({ email: refs.email.value, message: refs.message.value });
    refs.form.reset();
    localStorage.removeItem('feedback-form-state');
});

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(refs.localStorage_key))
    if (savedMessage) {
        console.log(savedMessage);
        refs.email.value;
        refs.message.value;

    }
}

const loadingForm = key => {
  try {
    const loadingFormItem = localStorage.getItem(key);
    return loadingFormItem === null ? undefined : JSON.parse(loadingFormItem);
  } catch (error) {
    console.error(error.message);
  }
};

const storageData = loadingForm(refs.localStorage_key);
if (storageData) {
  refs.email.value = storageData.email;
  refs.message.value = storageData.message;
}



// const refs = {
//     form: document.querySelector('.feedback-form'),
//     email: document.querySelector('.feedback-form input'),
//     textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input', onEmail);
// refs.textarea.addEventListener('input', onTextarea);

// populateMassageOutput();


// function onFormSubmit(evt) { 
//     evt.preventDefault();
//     evt.currentTarget.reset()
// }

// function onEmail(evt) { }

// function onTextarea(evt) {
//     const message = evt.currentTarget.value;

//     localStorage.setItem('feedback-msg', message);
//  }

// function populateMassageOutput() {
//     const savedMessage = localStorage.getItem('feedback-msg');

//     if (savedMessage) {
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//     }
// }
 




