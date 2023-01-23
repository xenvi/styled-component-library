import React from "react";
import { StyleSheet, View } from "react-native";

const StyledPlaceholder = styled.View`
    width: 100%;
    height: 150px;
    background-color: ${({theme}) => theme.colors.cardBackground};
`

export type PlaceholderProps = {
    style: object
};

const Placeholder = (props) => (
    <StyledPlaceholder style={props.style}>
      {props.children}
    </StyledPlaceholder>
);

export default Placeholder;
