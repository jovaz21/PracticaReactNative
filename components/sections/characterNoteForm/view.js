import React from "react";
import { View, Alert } from "react-native";
import styles from "./styles";

import { Actions } from "react-native-router-flux";

import { TextInput } from "../../widgets";

// Character New Note Form:
// - Setup NavBar's Right Button as Submit Button
// - Handles New Note Data Entry
export default class extends React.Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      alias: "",
      email: "",
      notes: ""
    };
  }

  // Did Mount => Setup Right Button as Submit Button...
  componentDidMount() {
    setTimeout(() => {
      Actions.refresh({
        rightTitle: "OK",
        rightButtonTextStyle: { color: "white", fontWeight: "bold" },
        onRight: () => this._onSubmit()
      });
    }, 0);
  }

  // On Submit
  _onSubmit() {
    if (!this._validateForm()) {
      Alert.alert("Advertencia", "Completar todos los campos obligatorios");
      return;
    }

    /* submit */
    this.props.onSubmit(this.state);
  }
  _validateForm() {
    const { email, notes } = this.state;
    if (email && notes) {
      return true;
    } else {
      return false;
    }
  }

  // Render
  render() {
    console.log("<CharacterNoteForm> render: props=%o", this.props);
    return (
      <View style={styles.container}>
        <View style={{ paddingTop: 40, padding: 20 }}>
          {this._renderTextInput("Alias:", "alias", false, "Nickname")}
        </View>
        <View style={{ paddingTop: 20, padding: 20 }}>
          {this._renderTextInput("Email: (*)", "email", false, "foo@bar.com")}
        </View>
        <View style={{ paddingTop: 20, padding: 20 }}>
          {this._renderTextInput("Comentario: (*)", "notes", true, "...")}
        </View>
      </View>
    );
  }
  _renderTextInput(label, key, multiline, placeholder = "") {
    return (
      <TextInput
        label={label}
        value={this.state[key]}
        multiline={multiline}
        onChangeText={v => this.setState({ [key]: v })}
        placeholder={placeholder}
      />
    );
  }
}
