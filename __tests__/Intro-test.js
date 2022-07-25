import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {Intro} from '../components';

const tree = renderer.create(<Intro />);

// unit test
test('renders correctly', () => {
  tree.toJSON();
  expect(tree).toMatchSnapshot();
});

/// unit state test
test('button press', () => {
  //press button
  const button = tree.root.findByProps({testID: 'myButton'}).props;
  act(() => button.onPress());

  //expect text to equal 'Hi Mom!'
  const text = tree.root.findByProps({testID: 'myText'}).props;
  expect(text.children).toEqual('Hi Mom!');
});
