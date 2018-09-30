import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

// Character Detail View:
// - Displays given 'item'
export default class extends React.Component {
  render() {
    console.log("<CharacterDetailView> render: props=%o", this.props);
    const { item } = this.props;
    const image = item.image
      ? { uri: item.image }
      : require("../../../resources/image_placeholder.png");
    return (
      <View style={styles.container}>
        <Image source={image} resizeMode={"cover"} style={styles.image} />
        <View style={styles.dataContainer}>
          <Text style={styles.text}>{item.description}</Text>
        </View>
      </View>
    );
  }
}
