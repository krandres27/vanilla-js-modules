import store from "./store.js";

export default element => {
  const dogs = [1,2,3].map(item => ({
    breed: `bred ${item}`,
    image: `breds/bred${item}.jpeg`,
  }));

  element.innerHTML = `
  ${dogs.map(dog => `
    <div class="dog">
      <p>${dog.breed}</p>
      <img class="dog-select" src=${dog.image} alt=${dog.breed}
    </div>
  `)}`;
  
  document.querySelectorAll('.dog-select').forEach(dogSelect => {
    dogSelect.addEventListener('click', () => {
      store.setImage(dogSelect.attributes.src.value);
    });
  });
}
