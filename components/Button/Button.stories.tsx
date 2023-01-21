// stories/MyButton.stories.tsx
import React from 'react';
import { Button } from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { StyledButton } from './Button';

export default {
  title: 'components/Button',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

export const RNButton: ComponentStory<typeof StyledButton> = args => (
  <StyledButton {...args}>
    I'm a react-native Button!
  </StyledButton>
);

RNButton.args = {
  tag: Button,
};
