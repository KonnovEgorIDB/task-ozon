// api.js
export default class Progress {
  #progressElement;
  #progressContainer;
  #value;
  #animateInterval;

  constructor(containerSelector) {
    this.#progressContainer = typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector;

    if (!this.#progressContainer) throw new Error("Progress container not found");

    this.#progressElement = this.#progressContainer.querySelector(".progress__ring");
    if (!this.#progressElement) throw new Error("Progress element not found");
  }

  setValue(value) {
    const v = Math.max(0, Math.min(100, Number(value)));
    this.#value = v;
    this.#progressElement.style.setProperty("--p", v);
    this.#progressElement.setAttribute("aria-valuenow", v);
  }

  setAnimated(isAnimated) {
    if(isAnimated){
      this.#animateInterval = setInterval(() => {
        if(this.#value >= 100){
          this.#value = 0;
        }
        else{
          this.#value += 1;
        }
        this.#progressElement.style.cssText = `--p:${Number(this.#value) + 1}`;
      }, 10);
    }
    else {
      clearInterval(this.#animateInterval);
    }
  }

  setHidden(isHidden) {
    this.#progressContainer.classList.toggle("progress__view_hidden", Boolean(isHidden));
  }

  getValue(){
    return this.#value;
  }
}