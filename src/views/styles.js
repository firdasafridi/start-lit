import { LitElement, html, css } from 'lit-element';

class StylesLit extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            isTrue: { type: Boolean },
            myArray: { type: Array }
        }
    }

    static get styles() {
        return css`
          p {
            font-family: Roboto;
            font-size: 16px;
            font-weight: 500;
          }
          .red {
            color: red;
          }
          .blue {
            color: blue;
          }
        `;
      }

    constructor() {
        super();
        this.message = 'This is handsome properties';
        this.isTrue = true;
        this.myArray = ['a', 'word', 'mean', 'anything'];
    }

    render() {
        return html`
            <p class="${this.isTrue?'red':'blue'}">${this.message}</p>
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

customElements.define('x-styles', StylesLit);