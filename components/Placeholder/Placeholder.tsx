import React from "react";
import { StyleSheet, View } from "react-native";
import styled from 'styled-components/native';

const StyledPlaceholder = styled.View`
    width: 100%;
    height: 150px;
    background-color: ${({theme}) => theme.colors.cardBackground};
`

export type PlaceholderProps = {
    style: object
};

const Placeholder = (props: { style: object; children: any; }) => (
    <StyledPlaceholder style={props.style}>
      {props.children}
    </StyledPlaceholder>
);

export default Placeholder;
