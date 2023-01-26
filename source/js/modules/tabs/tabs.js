const tab1 = document.querySelector('[data-tab-1]');
const tab6 = document.querySelector('[data-tab-6]');
const tab12 = document.querySelector('[data-tab-12]');
const cardsList1 = document.querySelector('[data-cards-1]');
const cardsList6 = document.querySelector('[data-cards-6]');
const cardsList12 = document.querySelector('[data-cards-12]');

const openTab1 = () => {
  if (!tab1.classList.contains('is-active')) {
    tab1.classList.add('is-active');
    tab6.classList.remove('is-active');
    tab12.classList.remove('is-active');
    cardsList1.classList.remove('is-closed');
    cardsList6.classList.add('is-closed');
    cardsList12.classList.add('is-closed');
  }
};

const openTab6 = () => {
  if (!tab6.classList.contains('is-active')) {
    tab1.classList.remove('is-active');
    tab6.classList.add('is-active');
    tab12.classList.remove('is-active');
    cardsList1.classList.add('is-closed');
    cardsList6.classList.remove('is-closed');
    cardsList12.classList.add('is-closed');
  }
};

const openTab12 = () => {
  if (!tab12.classList.contains('is-active')) {
    tab1.classList.remove('is-active');
    tab6.classList.remove('is-active');
    tab12.classList.add('is-active');
    cardsList1.classList.add('is-closed');
    cardsList6.classList.add('is-closed');
    cardsList12.classList.remove('is-closed');
  }
};

const enableTabs = () => {
  tab1.classList.add('is-active');
  cardsList6.classList.add('is-closed');
  cardsList12.classList.add('is-closed');
  tab1.addEventListener('click', openTab1);
  tab6.addEventListener('click', openTab6);
  tab12.addEventListener('click', openTab12);
};

export {enableTabs};
