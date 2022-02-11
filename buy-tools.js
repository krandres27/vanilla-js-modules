import store from "./store.js";

export default (element) => {
  element.innerHTML = `
    <div>
      <img id="buy-tools-image" alt="selected dog"/>
      <hr>
      <button id="addcart">Add Dog</button>
    </div>
  `;

  document.getElementById('addcart').addEventListener('click', () => {
    store.incrementCount();
  });

  const update = () => {
    document.getElementById('buy-tools-image').src = store.getImage();
  }

  store.subscribe(update);
  update();
}
