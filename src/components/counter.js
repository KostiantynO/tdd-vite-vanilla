/**
 * @param {Element} element
 */
export const setupCounter = element => {
  let counter = 0;
  const setCounter = count => {
    counter = count;
    element.innerHTML = '';
    element.insertAdjacentHTML('beforeend', `count is ${counter}`);
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
};
