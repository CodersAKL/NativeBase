import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../../basic/Button';
import { ActionSheetContainerComponent } from '../../basic/Actionsheet';
import { Text } from '../../basic/Text';
var REGULAR_BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var ICON_BUTTONS = [
  { text: 'Option 0', icon: 'american-football', iconColor: '#2c8ef4' },
  { text: 'Option 1', icon: 'analytics', iconColor: '#f42ced' },
  { text: 'Option 2', icon: 'aperture', iconColor: '#ea943b' },
  { text: 'Delete', icon: 'trash', iconColor: '#fa213b' },
  { text: 'Cancel', icon: 'close', iconColor: '#25de5b' },
];

it('renders Regular ActionSheet', () => {
  const tree = renderer
    .create(
      <Button
        onPress={() =>
          ActionSheetContainerComponent.show(
            {
              options: REGULAR_BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: 'Select an option',
            },
            buttonIndex => {
              this.setState({ clicked: REGULAR_BUTTONS[buttonIndex] });
            }
          )
        }
      >
        <Text>Actionsheet</Text>
      </Button>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it('renders Icon ActionSheet', () => {
  const tree = renderer
    .create(
      <Button
        onPress={() =>
          ActionSheetContainerComponent.show(
            {
              options: ICON_BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: 'Select an option',
            },
            buttonIndex => {
              this.setState({ clicked: ICON_BUTTONS[buttonIndex] });
            }
          )
        }
      >
        <Text>Actionsheet</Text>
      </Button>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
