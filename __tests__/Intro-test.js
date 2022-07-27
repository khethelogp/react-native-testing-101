import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {ActivityIndicator, FlatList, Text, TextInput} from 'react-native';
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

// Intergration test

it('renders the ActivityIndicator component', () => {
  const tree = renderer
    .create(<ActivityIndicator animating={true} size="small" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders the TextInput component', () => {
  const tree = renderer
    .create(<TextInput autoCorrect={false} value="apple banana kiwi" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the FlatList component', () => {
  const tree = renderer
    .create(
      <FlatList
        data={['apple', 'banana', 'kiwi']}
        keyExtractor={item => item}
        renderItem={({item}) => <Text>{item}</Text>}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
