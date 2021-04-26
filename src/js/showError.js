import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";

export default function showError () {
  error({
      text: 'Specify your request, please!',
      delay: 2000
})  
};