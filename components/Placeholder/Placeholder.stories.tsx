import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Placeholder from './Placeholder';

export default {
  title: 'components/Placeholder',
  component: Placeholder,
} as ComponentMeta<typeof Placeholder>;

export const PlaceholderStory: ComponentStory<typeof Placeholder> = args => (
  <Placeholder {...args} />
);

PlaceholderStory.args = {
  style: {},
};
