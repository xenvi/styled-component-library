import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Card from './Card';
import CardImage from './CardImage';

export default {
  title: 'components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// export const RiverCard: ComponentStory<typeof Card> = args => (
//   <Card {...args} />
// );
export const CardImageStory: ComponentStory<typeof Card> = args => (
  <CardImage {...args} />
);
export const CardImageLoading: ComponentStory<typeof Card> = args => (
  <CardImage {...args} />
);
export const CardImageError: ComponentStory<typeof Card> = args => (
  <CardImage {...args} />
);

// RiverCard.args = {
//   tag: Button,
// };

CardImageStory.args = {
  renderImage: true,
  image: "https://d6vcjqhhxncch.cloudfront.net/fit-in/500x500/images/426/dreamstime_xs_61133501.jpg",
  data: null,
  loading: false,
  error: null,
}

CardImageLoading.args = {
  renderImage: true,
  image: null,
  data: null,
  loading: true,
  error: null,
}
CardImageError.args = {
  renderImage: true,
  image: null,
  data: null,
  loading: false,
  error: {
    error: "404"
  },
}