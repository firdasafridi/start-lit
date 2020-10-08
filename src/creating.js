import { LitElement, html } from 'lit-element';

class CreatingLit extends LitElement {
  render() {
    return html`
      <p>Hallo cuy</p>
    `;
  }
}


customElements.define('x-creating', CreatingLit);