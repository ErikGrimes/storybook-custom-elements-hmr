import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import { FirstElement } from '../src/first-element';

export default {
  title: 'First Element'
};

export const basic = () => {
  const root = document.createElement('div');
  const template = html`
    <first-element></first-element>
  `;
  render(template, root);
  return root;
};

// function basicFixture() {
//   const root = document.createElement('div');
//   const template = html`
//     <first-element></first-element>
//   `;
//   render(template, root);
//   return root;
// }

// storiesOf('FirstElement', module).add('Basic', basicFixture);
