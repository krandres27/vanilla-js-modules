import store from "./store.js";
import createHeader from './header.js';
import createFooter from './footer.js';
import createDogs from './dogs.js';
import createBuyTools from './buy-tools.js';

createHeader(document.getElementById('header'));
createFooter(document.getElementById('footer'));
createDogs(document.getElementById('dogs'));
createBuyTools(document.getElementById('buy-tools'));