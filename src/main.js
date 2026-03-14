import './style.css';

const progressBar = document.querySelector('.progress__ring');
const progressBarDisplay = document.querySelector('.progress__view');

const input = document.querySelector('#input-value');
const switchInput = document.querySelector('#switch-input');
const switchHide = document.querySelector('#switch-hide');
const switchAnimate = document.querySelector('#switch-animate');

input.addEventListener('input' ,(e) => {
  const validInput = e.target.validity.valid;
  if(validInput){
    const value = e.target.value;
    progressBar.style.cssText=`--p:${value}`;
    progressBar.setAttribute('aria-valuenow', value);
  }
  else{
    e.target.value='100';
    progressBar.style.cssText=`--p:100`;
    progressBar.setAttribute('aria-valuenow', 0);
    console.log('err');
  }
  console.log(progressBar );
});


switchHide.addEventListener('change', (e) => {
  if(e.target.checked){
    progressBarDisplay.classList.add(['progress__view_hidden']);
  }
  else {
    progressBarDisplay.classList.remove(['progress__view_hidden']);
  }
})

let animateInterval;

switchAnimate.addEventListener('change', (e) => {
  if(e.target.checked){
    console.log(progressBar.style.cssText.split(' ')[1].split(';')[0]);

    input.setAttribute('disabled', true);
    input.value = null;

    animateInterval = setInterval(() => {
      const number = progressBar.style.cssText.split(' ')[1].split(';')[0];
      if(number >= 100){
        progressBar.style.cssText=`--p:0`;
        
      }
      else{
        progressBar.style.cssText=`--p:${Number(number)+1}`;
      }
    },10);
  }
  else {
    input.removeAttribute('disabled');
    clearInterval(animateInterval);
  }
})