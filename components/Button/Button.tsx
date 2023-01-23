import React from 'react';
import styled from 'styled-components/native';

export type ButtonProps = {
  tag: any;
  style: object;
  // and any other button props
};

const CustomButton = ({ tag, style, ...props }: ButtonProps) => {
  console.log('style', style)
  const StyledButton = styled(tag)({
    padding: 8,
    borderRadius: 4,
    ...style
  });

  return <StyledButton {...props} />;
};


// const Button = ({text, onPress, color, textColor}: ButtonProps) => (
//   <View style={styles.buttonContainer}>
//     <TouchableOpacity
//       style={[styles.button, !!color && {backgroundColor: color}]}
//       onPress={onPress}
//       activeOpacity={0.8}>
//       <Text style={[styles.buttonText, !!textColor && {color: textColor}]}>
//         {text}
//       </Text>
//     </TouchableOpacity>
//   </View>
// );

export default CustomButton
