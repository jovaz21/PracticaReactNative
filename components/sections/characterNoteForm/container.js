import React, { Component } from "react";
import { connect } from "react-redux";
import { doPostCharacterNoteAction } from "../../../store";

import { Actions } from "react-native-router-flux";

import { TouchableOpacity, View, Text, ActivityIndicator } from "react-native";
import FormView from "./view";
import styles from "./styles";

// Character Note Form Container:
// 1. Handles REDUX stuff
// 2. Renders the Note's FormView Component
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = Container.getDerivedStateFromProps(this.props, null);
  }
  static getDerivedStateFromProps({ isFetching }) {
    return {
      isFetching
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
    this.props.onSubmitCharacterNote(this.props);
  }

  // Render View:
  render() {
    return (
      <View style={styles.container}>
        <FormView />
        {this._renderActivityIndicator()}
      </View>
    );
  }
  _renderActivityIndicator() {
    const { isFetching } = this.state;
    console.log(
      "<CharacterNoteFormContainer> _renderActivityIndicator: isFetching=%o",
      isFetching
    );
    if (!isFetching) {
      return null;
    }
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
      >
        <ActivityIndicator size={"large"} color={"white"} animating={true} />
      </View>
    );
  }
}

// Map REDUX State to Component Properties:
const mapStateToProps = state => {
  return {
    isFetching: state.characters.isFetching
  };
};

// Map REDUX Actions to Component Properties:
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmitCharacterNote: props => {
      //dispatch(doPostCharacterNoteAction(data));
      console.log(
        "<CharacterNoteFormContainer> onSubmitCharacterNote: props=%o",
        props
      );
      Actions.pop();
    }
  };
};

// Connect Container to REDUX:
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
