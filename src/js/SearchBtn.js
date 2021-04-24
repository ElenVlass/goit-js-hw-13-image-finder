export default class SearchBtn {
    constructor(selector) {
        this.btn = document.querySelector(selector);
        this.label = this.btn.querySelector('.btn-label');
    }
    enable(btnContent) {
        this.btn.disabled = false;
        this.label.textContent = btnContent;
    }
    
    disable() {
        this.btn.disabled = true;
        this.label.textContent = 'Loading';
    }
    hide() {
        this.btn.classList.add('is-hidden')
    }
    show() {
        this.btn.classList.remove('is-hidden')
    }
}