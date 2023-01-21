// import React, { Component } from "react";
// import { Button, Text, StyleSheet, View } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { array, bool, func, number, object, oneOfType, shape, string } from "prop-types";

// import util from "../../util/river";
// import CardImage from "./CardImage";
// import AnimatedHeart from "./AnimatedHeart";

// const styles = StyleSheet.create({
//   surface: {
//     marginHorizontal: 24,
//     marginVertical: 8,
//     elevation: 2,
//     borderRadius: 4,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   textContainer: { padding: 16 },
//   title: { fontSize: 18, fontWeight: "700" },
//   subtitle: { marginTop: 8, color: "#848484" },
// });

// const Card = props => {
//   const {
//     river,
//     handlePress,
//     handleFavorite,
//     cardStyle,
//     renderImage,
//     isFavorite,
//   } = props;

//   const { name, states, length, id, image, waterType } = river.properties;

//   const items = []
//   if (states) items.push(...states)
//   if (length && waterType !== 'STILL_WATER') items.push(`${length} miles`)

//   // const fishRange = util.extractFishRange(this.props.river.properties);

//   return (
//     <Surface style={[styles.surface, this.props.cardStyle]}>
//       <TouchableOpacity
//         onPress={() => {
//           if (this.props?.handlePress) {
//             this.props.handlePress(this.props.river)
//           }
//         }}
//         style={styles.touchable}
//       >
//         <CardImage bodyOfWaterId={`${id}`} renderImage={this.props.renderImage} image={image} />
//       </TouchableOpacity>
//       <View style={styles.textContainer}>
//         <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text
//             onPress={() => {
//               if (this.props?.handlePress) {
//                 this.props.handlePress(this.props.river)
//               }
//             }}
//             style={{...styles.title, width: '90%'}}
//           >
//             {name}
//           </Text>
//           {this.props.handleFavorite && (
//             <AnimatedHeart
//               handlePress={() => {
//                 if (this.props.handleFavorite) {
//                   this.props.handleFavorite(!this.props.isFavorite)
//                 }
//               }}
//               isFavorite={this.props.isFavorite}
//             />
//           )}
//         </View>
//         <Text style={styles.subtitle}>
//           {items.reduce(
//             (acc, item) =>
//               acc === null ? (
//                 item
//               ) : (
//                 <>
//                   {acc}&nbsp;&bull;&nbsp;{item}
//                 </>
//               ),
//             null,
//           )}
//           {/* removed fish size stat from showing */}
//           {/* {`${state ? `${state} •` : ""} ${length} miles 
//           ${fishRange ? `• ${fishRange}` : ""}
//             `.trim()} */}
//         </Text>

//       </View>
//     </Surface>
//   );
// }

// Card.defaultProps = {
//   cardStyle: {},
//   renderImage: true,
//   isFavorite: false,
// }

// Card.propTypes = {
//   river: shape({
//     properties: shape({
//       id: oneOfType([string, number]).isRequired,
//       states: array.isRequired,
//       name: string.isRequired,
//       description: string,
//       length: string.isRequired,
//       fishRangeMin: oneOfType([string, number]),
//       fishRangeMax: oneOfType([string, number]),
//     }),
//   }).isRequired,
//   handlePress: func,
//   handleFavorite: func,
//   cardStyle: object,
//   renderImage: bool,
//   isFavorite: bool,
// }

const Card = () => {
  return null
}

export default Card;
