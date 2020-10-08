import { LitElement, html } from 'lit-element';

class HandlerLit extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            isTrue: { type: Boolean },
            myArray: { type: Array }
        }
    }

    constructor() {
        super();
        this.message = 'This is handsome properties';
        this.isTrue = true;
        this.myArray = ['a', 'word', 'mean', 'anything'];
    }

    render() {
        return html`
            <p>${this.message}</p>
            <ul>${this.myArray.map(item => html`<li>${item}</li>`)}</ul>
            ${this.isTrue ?
            html`<p>the value is true</p>` :
            html`<p>otherwise is false</p>`}
            <button @click=${this.clickHandler}>Click here!</button>
        `;
    }

    clickHandler(event) {
        console.log(event.target);
        this.isTrue = !this.isTrue;
    }
}

customElements.define('x-handler', HandlerLit);