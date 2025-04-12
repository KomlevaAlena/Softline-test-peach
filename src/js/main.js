import '../scss/style.scss';
import {slider} from './components/slider';
import './components/icons.js';
import { setupCounter } from './counter.js';


window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', () => {
      slider.init();
    });
  });

setupCounter(document.querySelector('#counter'));


