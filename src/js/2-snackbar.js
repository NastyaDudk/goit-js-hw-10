import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const delayInput = document.querySelector('input[name="delay"]');
const stateRadioButtons = document.querySelectorAll('input[name="state"]');

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(delayInput.value, 10);

    const selectedState = Array.from(stateRadioButtons).find(
      input => input.checked
    ).value;

    const promise = new Promise((resolve, reject) => {
      if (selectedState === 'fulfilled') {
        setTimeout(() => resolve(delay), delay);
      } else {
        setTimeout(() => reject(delay), delay);
      }
    });

    promise
      .then(result => {
        iziToast.success({
          title: 'Fulfilled Promise',
          message: `✅ Fulfilled promise in ${result}ms`,
          position: 'topCenter',
        });
      })
      .catch(error => {
        iziToast.error({
          title: 'Rejected Promise',
          message: `❌ Rejected promise in ${error}ms`,
          position: 'topCenter',
        });
      });
  });
});
