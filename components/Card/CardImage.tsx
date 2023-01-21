import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme, ActivityIndicator } from "react-native-paper";
import { bool, string } from "prop-types";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useQuery } from "@apollo/client";
import styled from 'styled-components/native'

import ImagePlaceholder from "../ImagePlaceholder";
import Placeholder from "../Placeholder";
import { FETCH_RESIZED_IMAGE } from "../../api/rivers";
import useQueryResizedImage from "../../db/hooks/queries/useQueryResizedImage";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  error: { textAlign: "center", marginBottom: 8 },
  errorText: { color: "white" },
  placeholder: { position: "absolute", justifyContent: "center" },
  spinner: { justifyContent: "center" },
});

const StyledPlaceholder = styled(Placeholder)`
  justify-content: center;
`

export type CardImageProps = {
  bodyOfWaterId: string,
  renderImage: bool,
  image: string,
};

const CardImage = (props: CardImageProps) => {
  const {
    bodyOfWaterId,
    renderImage,
    image,
  } = props
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { data, loading, error } = useQueryResizedImage(bodyOfWaterId, renderImage)

  if (!renderImage && !image) {
    return (
      <StyledPlaceholder>
        <ActivityIndicator />
      </StyledPlaceholder>
    );
  }

  if ((loading || error || !data?.getResizedImage) && !image) {
    return (
      <ImagePlaceholder style={styles.image} loading={loading} error={Boolean(error)} />
    );
  }

  return (
    <>
      <FastImage
        style={styles.image}
        source={{
          uri: image || data.getResizedImage,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.web,
        }}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
      {Boolean(isLoading || hasError) && (
        <View
          style={[
            styles.placeholder,
            styles.image,
            { backgroundColor: theme.colors.cardBackground },
          ]}
        >
          {hasError ? (
            <>
              <Icon
                name="warning"
                color={theme.colors.error}
                size={45}
                style={styles.error}
              />
              <Text style={[styles.error, styles.errorText]}>
                Unable to load image
              </Text>
            </>
          ) : (
            <ActivityIndicator color="white" />
          )}
        </View>
      )}
    </>
  );
}

export default CardImage;
