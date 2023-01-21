import React, { useContext, useEffect } from 'react'
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated'
import { Pressable, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styled, { css } from 'styled-components/native'

const flexStyles = css`
  display: flex;
  align-items: flex-end;
  width: 40px;
`
const absoluteStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const AnimatedOutline = styled(Animated.View)`
  ${absoluteStyles}
  ${flexStyles}
`
const AnimatedFill = styled(Animated.View)`
  ${flexStyles}
`

export type AnimatedHeartProps = {
  handlePress: func,
  isFavorite: bool,
  promptReview: func,
  theme: object,
};

const AnimatedHeart = (props: AnimatedHeartProps) => {
  const {
    promptReview,
    handlePress,
    isFavorite,
    theme,
  } = props;

  const liked = useSharedValue(isFavorite ? 1 : 0);

  useEffect(() => {
    liked.value = isFavorite ? 1 : 0
  }, [isFavorite])

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    }
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
      opacity: liked.value,
    }
  });

  const onPress = () => {
    liked.value = withSpring(liked.value ? 0 : 1)
    handlePress()
    if (!liked.value) {
      promptReview('favorite')
    }
  };

  return (
    <Pressable onPress={onPress}>
      <AnimatedOutline style={outlineStyle}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={28}
          color={theme.colors.secondaryText}
        />
      </AnimatedOutline>

      <AnimatedFill style={fillStyle}>
        <MaterialCommunityIcons name="heart" size={28} color="#E55D14" />
      </AnimatedFill>
    </Pressable>
  )
}

export default AnimatedHeart
