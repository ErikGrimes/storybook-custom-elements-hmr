import { LitElement, html, css } from 'lit-element';

export class FirstElement extends LitElement {
  static get TAG() {
    return 'first-element';
  }

  static get styles() {
    return css`
      button {
        color: white;
      }
    `;
  }

  render() {
    return html`
      <button r1 class="button">first1</button>
    `;
  }
}

customElements.define(FirstElement.TAG, FirstElement);
