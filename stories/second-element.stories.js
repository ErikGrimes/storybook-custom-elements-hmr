import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import { SecondElement } from '../src/second-element';

export default {
  title: 'Second Element'
};

export const basic = () => {
  const root = document.createElement('div');
  const template = html`
    <second-element></second-element>
  `;
  render(template, root);
  return root;
};

// function basicFixture() {
//   const root = document.createElement('div');
//   const template = html`
//     <second-element></second-element>
//   `;
//   render(template, root);
//   return root;
// }

// storiesOf('SecondElement', module).add('Basic', basicFixture);
