import store from './store.js';

export default (element) => {
  element.innerHTML = `
    <header>
      <div>JS Modules</div>
      <div>Cart count: <span id="cart-count"></span></div>
    </header>
  `;

  const update = () => {
    document.getElementById('cart-count').innerText = store.getCount();
  }

  store.subscribe(update);
  update();
}
