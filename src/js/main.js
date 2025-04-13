import '../scss/style.scss';
import {slider} from './components/slider';
import './components/icons.js';
import {initTabs} from './components/tabs/init-tabs';
import {initAccordions} from './components/accordion/init-accordion';
import { setupCounter } from './counter.js';


window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', () => {
      slider.init();
      initTabs();
      initAccordions();
    });
  });

setupCounter(document.querySelector('#counter'));


