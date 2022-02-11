const createStore = () => {
  let count = 0;
  let image = '/breds/bred1.jpeg';
  const subscribers = [];

  return {
    getCount: () => count,
    getImage: () => image,
    incrementCount: () => {
      count += 1;
      subscribers.forEach(update => update());
    },
    setImage: img => {
      image = img
      subscribers.forEach(update => update());
    },
    subscribe: (cb) => {
      subscribers.push(cb)
    }
  }
} 

const store = createStore();

export default store;
