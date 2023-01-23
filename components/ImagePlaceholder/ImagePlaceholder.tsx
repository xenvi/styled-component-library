import React from "react";
import { Text, ActivityIndicator, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/MaterialIcons";

import emptyStateImage from "../../public/images/emptyState.png";
import emptyStateIcon from "../../public/images/emptyStateIcon.png";

// const styles = StyleSheet.create({
//   body: { position: "relative" },
//   content: {
//     position: "absolute",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100%",
//     width: "100%",
//   },
//   text: {
//     color: "rgba(255,255,255,0.9)",
//     textTransform: "uppercase",
//     marginTop: 12,
//     letterSpacing: 1.5,
//     fontSize: 10,
//   },
//   image: {
//     width: "100%",
//     height: 140,
//   },
// });

const imageStyles = {
    width: "100%",
    height: 140,
};

const Wrapper = styled.View({
    position: "relative"
})

const ContentWrapper = styled.View({
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
})

const StyledImage = styled(FastImage)({
    ...imageStyles,
})

const StyledIcon = styled(FastImage)({
    height: 40,
    width: 40,
})

const StyledText = styled.Text({
    color: "rgba(255,255,255,0.9)",
    textTransform: "uppercase",
    marginTop: 12,
    letterSpacing: 1.5,
    fontSize: 10,
})

export type ImagePlaceholderProps = {
    style: object,
    loading: bool,
    error: bool,
};

const ImagePlaceholder = (props) => {
  return (
    <Wrapper>
      <StyledImage
        style={props.style}
        source={emptyStateImage}
        resizeMode={FastImage.resizeMode.cover}
      />
      <ContentWrapper>
        {props.loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <StyledIcon
              source={emptyStateIcon}
              resizeMode={FastImage.resizeMode.contain}
            />
            <StyledText>Images coming soon</StyledText>
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
}

export default ImagePlaceholder;
