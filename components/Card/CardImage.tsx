import React, { useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/MaterialIcons";
import styled, { css, useTheme } from 'styled-components/native'

import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import Placeholder from "../Placeholder/Placeholder";

const imageStyles = {
  width: "100%",
  height: 140,
  resizeMode: "cover",
  borderTopRightRadius: 4,
  borderTopLeftRadius: 4,
}
const placeholderStyles = { position: "absolute", justifyContent: "center" }
const errorStyles = `
  text-align: center;
  margin-bottom: 8px;
`

// const styles = StyleSheet.create({
//   image: {
//     width: "100%",
//     height: 140,
//     resizeMode: "cover",
//     borderTopRightRadius: 4,
//     borderTopLeftRadius: 4,
//   },
//   error: { textAlign: "center", marginBottom: 8 },
//   errorText: { color: "white" },
//   placeholder: { position: "absolute", justifyContent: "center" },
//   spinner: { justifyContent: "center" },
// });

const StyledImagePlaceholder = styled(ImagePlaceholder)({
  ...imageStyles
})
const StyledPlaceholder = styled(Placeholder)`
  position: absolute;
  justify-content: center;
`
const ErrorIcon = styled(Icon)`
  ${errorStyles}
`
const ErrorText = styled.Text`
  ${errorStyles}
  color: white;
`
const PlaceholderWrapper = styled.View`
  ${imageStyles}
  ${placeholderStyles}
  ${({ theme }) => `backgroundColor: ${theme.colors.cardBackground}`}
`
const StyledFastImage = styled(FastImage)`
  ${imageStyles}
`

export type CardImageProps = {
  renderImage: bool,
  image: string,
  data: object,
  loading: bool,
  error: object, // check
};

const CardImage = (props: CardImageProps) => {
  const {
    renderImage,
    image,
    data,
    loading,
    error,
  } = props;
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!renderImage && !image) {
    return (
      <StyledPlaceholder>
        <ActivityIndicator />
      </StyledPlaceholder>
    );
  }

  if ((loading || error || !data?.getResizedImage) && !image) {
    return (
      <StyledImagePlaceholder loading={loading} error={Boolean(error)} />
    );
  }

  return (
    <>
      <StyledFastImage
        source={{
          uri: image || data.getResizedImage,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.web,
        }}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
      {Boolean(isLoading || hasError) && (
        <PlaceholderWrapper>
          {hasError ? (
            <>
              <ErrorIcon
                name="warning"
                color={theme.colors.error}
                size={45}
                style={styles.error}
              />
              <ErrorText>
                Unable to load image
              </ErrorText>
            </>
          ) : (
            <ActivityIndicator color="white" />
          )}
        </PlaceholderWrapper>
      )}
    </>
  );
}

export default CardImage;
