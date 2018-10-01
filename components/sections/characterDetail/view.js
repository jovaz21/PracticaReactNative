import React from "react";
import { View, Text, Image, Animated } from "react-native";
import styles from "./styles";

// Character Detail View:
// - Displays given 'item'
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }
  // Did Mount
  componentDidMount() {
    Animated.timing(
      // Animate value over time
      this.state.fadeAnim, // The value to drive
      {
        toValue: 1, // Animate to final value of 1
        duration: 2000
      }
    ).start(); // Start the animation
  }

  // Render
  render() {
    console.log("<CharacterDetailView> render: props=%o", this.props);
    const { item } = this.props;
    const image = item.image
      ? { uri: item.image }
      : require("../../../resources/image_placeholder.png");
    return (
      <View style={styles.container}>
        <Animated.Image
          source={image}
          resizeMode={"cover"}
          style={[styles.image, { opacity: this.state.fadeAnim }]}
        />
        <View style={styles.dataContainer}>
          <Text style={styles.text}>{item.description}</Text>
        </View>
      </View>
    );
  }
}
