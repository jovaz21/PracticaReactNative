import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./styles";

// CharacterCell Component
export default class extends Component {
  static defaultProps = {
    item: null,
    onPress: () => {}
  };

  // Render
  render() {
    const { item, onPress } = this.props;
    const image = item.image
      ? { uri: item.image }
      : require("../../../resources/image_placeholder.png");
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={styles.cellContainer}
      >
        <Image
          source={image}
          style={{ width: "100%", height: "100%" }}
          resizeMode={"cover"}
        />
      </TouchableOpacity>
    );
  }
}
