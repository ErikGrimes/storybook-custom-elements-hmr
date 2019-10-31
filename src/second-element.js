import { LitElement, html } from 'lit-element';

export class SecondElement extends LitElement {
  static get TAG() {
    return 'second-element';
  }

  render() {
    return html`
      second
    `;
  }
}

customElements.define(SecondElement.TAG, SecondElement);
