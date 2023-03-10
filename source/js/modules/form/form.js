import IMask from 'imask';

const checkForm = () => {
  let element = document.querySelector('[data-phone-pattern]');
  let maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  let mask = IMask(element, maskOptions);
};

export {checkForm};
