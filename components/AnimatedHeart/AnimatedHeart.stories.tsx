import React, { useState } from 'react';
import { View } from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import styled from 'styled-components/native';
import AnimatedHeart from './AnimatedHeart';

const StyledContainer = styled.View`
  display: flex;
  height: 90%;
  align-items: center;
  justify-content: center;
`

export default {
  title: 'components/AnimatedHeart',
  component: AnimatedHeart,
} as ComponentMeta<typeof AnimatedHeart>;

export const Heart: ComponentStory<typeof AnimatedHeart> = args => {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <StyledContainer>
      <AnimatedHeart {...args} handlePress={() => setIsFavorite(!isFavorite)} isFavorite={isFavorite} />
    </StyledContainer>
  )
}

Heart.args = {
  promptReview: () => {},
  theme: {
    colors: {
      secondaryText: '#848484',
    }
  }
};
