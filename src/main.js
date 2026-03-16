import './style.css'
import { createProgress } from './api.js'
const progress = createProgress('.progress__view')
progress.setValue(75)

const input = document.querySelector('#input-value')
const switchHide = document.querySelector('#switch-hide')
const switchAnimate = document.querySelector('#switch-animate')

input.addEventListener('input', event => {
  const value = Number(event.target.value)
  if (!Number.isNaN(value) && value >= 0 && value <= 100) {
    progress.setValue(value)
  } else {
    event.target.value = progress.getValue()
  }
})

switchHide.addEventListener('change', event => {
  if (event.target.checked) {
    progress.setHidden(true)
  } else {
    progress.setHidden(false)
  }
})

switchAnimate.addEventListener('change', event => {
  if (event.target.checked) {
    input.setAttribute('disabled', true)
    input.value = undefined
    progress.setAnimated(true)
  } else {
    progress.setAnimated(false)
    input.removeAttribute('disabled')
    input.value = progress.getValue()
  }
})
