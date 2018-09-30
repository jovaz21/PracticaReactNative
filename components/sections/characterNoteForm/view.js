import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

// Character New Note Form:
// - Handles New Note Data Entry
export default class extends React.Component {
  render() {
    console.log("<CharacterNoteForm> render: props=%o", this.props);
    const { onSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{"Nuevo Comentario!!!"}</Text>
      </View>
    );
  }
}
