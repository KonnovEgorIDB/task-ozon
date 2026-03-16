export function createProgress(containerSelector) {
  const container =
    typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector

  if (!container) throw new Error('Progress container not found')

  const template = document.querySelector('#progress-template')
  container.append(template.content.cloneNode(true))

  const element = container.querySelector('.progress__ring')

  const state = {
    value: 0,
    animateInterval: undefined
  }

  function setValue(value) {
    state.value = Math.max(0, Math.min(100, Number(value)))
    element.style.setProperty('--p', state.value)
    element.setAttribute('aria-valuenow', state.value)
  }

  function setAnimated(isAnimated) {
    if (isAnimated) {
      state.animateInterval = setInterval(() => {
        state.value = state.value >= 100 ? 0 : state.value + 1
        element.style.setProperty('--p', state.value)
      }, 10)
    } else {
      clearInterval(state.animateInterval)
      state.animateInterval = undefined
    }
  }

  function setHidden(isHidden) {
    container.classList.toggle('progress__view_hidden', Boolean(isHidden))
  }

  function getValue() {
    return state.value
  }

  return { setValue, setAnimated, setHidden, getValue }
}
