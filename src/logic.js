import { LitElement, html } from 'lit-element';

class LogicLit extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            isTrue: { type: Boolean },
            myArray: { type: Array }
        };
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
        `;
    }
}

customElements.define('x-logic', LogicLit);