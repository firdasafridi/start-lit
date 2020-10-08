import { LitElement, html } from 'lit-element';


class PropertiesLit extends LitElement {
    
    /** 
     * set properties here
     * **/
    static get properties() {
        return { message: { type: String } };
    }

    constructor() {
        super();
        this.message = "We can define initial value here";
    }

    render() {
        return html`
            <p>${this.message}</p>
        `;
    }
}

customElements.define('x-properties', PropertiesLit);