import { LitElement, html, css } from 'lit-element';
import { TABLE_THEME, MINI_THEME, BUTTON_THEME } from '../styles/theme';
import { kFormatter } from '../lib/number'

class ProvinceElement extends LitElement {

  static get properties() {
    return{
      listCases: { type: Array },
      isLoad: { type: Boolean }
    };
  }


  static get styles() {
    return [ TABLE_THEME, MINI_THEME, BUTTON_THEME ];
  }

  constructor() {
    super();

    this.listCases = [];
    this.isLoad = false;
  }
  render() {
    return html`
      ${this.listCases.map(item => html`
        <hr>
        <h2>${item.provinsi}</h2>
        <table>
            <tbody>
                <tr>
                <td>
                    <div class="mini-title">Meninggal</div>
                    <div class="mini-desc">
                        <div ><span>${kFormatter(item.kasusMeni)}</span></div>
                    </div>
                </td>
                <td>
                    <div class="mini-title">Sembuh</div>
                    <div class="mini-desc">
                        <div ><span>${kFormatter(item.kasusSemb)}</span></div>
                    </div>
                </td>
                <td>
                    <div class="mini-title">Perawatan</div>
                    <div class="mini-desc">
                        <div><span>-</span></div>
                    </div>
                </td>
                </tr>
            </tbody>
        </table>
        <p>Total Casses: <span class="mini">${kFormatter(item.kasusPosi)}</span></p>
        `)}
      <hr>
      <button class="list-all" @click=${this.clickHandler}>List all province</button>
    `;
  }

  clickHandler(event) {
    if (this.isLoad) {
        return;
    }
    this.loadProvince();
  } 
  async loadProvince() {
    await fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
      .then(r => r.json())
      .then(async data => {
        this.listCases = data.data;
      });
  } 
}

customElements.define('x-province', ProvinceElement);