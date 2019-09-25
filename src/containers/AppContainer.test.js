import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
    const tree = renderer
      .create(<AppContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });