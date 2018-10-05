import React from 'react'
import ReactDOM from 'react-dom'
import noop from 'lodash/noop'
import App from './App';

it('renders without crashing', () => {
  window.alert = noop
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
