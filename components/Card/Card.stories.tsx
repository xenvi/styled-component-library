// stories/MyButton.stories.tsx
import React from 'react';
import { Button } from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Card from './Card';

export default {
  title: 'components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const RiverCard: ComponentStory<typeof Card> = args => (
  <Card {...args} />
);

RiverCard.args = {
  tag: Button,
};
