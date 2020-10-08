import { LitElement, html, css } from 'lit-element';
import { TABLE_THEME, MINI_THEME } from '../styles/theme';
import { kFormatter } from '../lib/number'

class CovidElement extends LitElement {

  static get properties() {
    return{
      meninggal: { type: Number },
      sembuh: { type: Number },
      perawatan: { type: Number },
      jumlahKasus: { type: Number },
      loading: { type: Boolean },
    };
  }


  static get styles() {
    return [ TABLE_THEME, MINI_THEME ];
  }

  constructor() {
    super();

    this.meninggal = 0;
    this.sembuh = 0;
    this.perawatan = 0;
    this.jumlahKasus = 0;
  }
  render() {
    return html`
      <h1>Indonesia</h1>
      <table>
        <tbody>
            <tr>
              <td>
                  <div class="mini-title">Meninggal</div>
                  <div class="mini-desc">
                    <div ><span>${kFormatter(this.meninggal)}</span></div>
                  </div>
              </td>
              <td>
                  <div class="mini-title">Sembuh</div>
                  <div class="mini-desc">
                    <div ><span>${kFormatter(this.sembuh)}</span></div>
                  </div>
              </td>
              <td>
                  <div class="mini-title">Perawatan</div>
                  <div class="mini-desc">
                    <div><span>${kFormatter(this.perawatan)}</span></div>
                  </div>
              </td>
            </tr>
        </tbody>
      </table>
      <p>Total Casses: <span class="mini">${kFormatter(this.jumlahKasus)}</span></p>
    `;
  }

  firstUpdated() {
    this.loadCase()
  }

  async loadCase() {
    await fetch(`https://indonesia-covid-19.mathdro.id/api`)
      .then(r => r.json())
      .then(async data => {
        this.meninggal = data.meninggal;
        this.sembuh = data.sembuh;
        this.perawatan = data.perawatan;
        this.jumlahKasus = data.jumlahKasus;
      });
  } 
}

customElements.define('x-covid', CovidElement);