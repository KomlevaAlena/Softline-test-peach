import '../scss/style.scss';
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import './components/icons.js'
import { setupCounter } from './counter.js'
// import BirthdayIcon from '../icons/birthday.svg';

// document.querySelector('#app').innerHTML = `
//   <div>
//     <h1>Hello Vite!</h1>
//     <div>
//         <svg>
//             <use href="#${BirthdayIcon}" />
//         </svg>
//     </div>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// window.addEventListener('DOMContentLoaded', () => {

//     window.addEventListener('load', () => {
      
//     });
//   });

setupCounter(document.querySelector('#counter'))


