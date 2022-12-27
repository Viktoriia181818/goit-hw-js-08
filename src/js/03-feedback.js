import { throttle } from "lodash";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name = email]');
const message = document.querySelector('textarea[name = message]');
const LOCALSTORAGE_KEY = 'feedback-form-state';



