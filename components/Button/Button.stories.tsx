import React from 'react';
import { Button } from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import StyledButton from './Button';

export default {
  title: 'components/Button',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

export const RNButton: ComponentStory<typeof StyledButton> = args => (
  <StyledButton {...args} />
);

RNButton.args = {
  tag: Button, // only required prop
  title: "I'm a react-native Button!",
  activeOpacity: "0.8",
  onPress: () => console.log('Button clicked!'),
  disabled: false,
  style: {
    backgroundColor: 'red',
  },
};
