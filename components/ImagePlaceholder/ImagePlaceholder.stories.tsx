import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import ImagePlaceholder from './ImagePlaceholder';

export default {
  title: 'components/ImagePlaceholder',
  component: Placeholder,
} as ComponentMeta<typeof Placeholder>;

export const ImagePlaceholderStory: ComponentStory<typeof ImagePlaceholder> = args => (
  <ImagePlaceholder {...args} />
);

ImagePlaceholderStory.args = {
  style: {},
};
