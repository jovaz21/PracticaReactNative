import React, { Component } from "react";
import { connect } from "react-redux";

import { View } from "react-native";
import DetailView from "./view";
import styles from "./styles";

// Character Detail Container:
// 1. Handles REDUX stuff
// 2. Renders 'item' (through the DetailView Component)
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = Container.getDerivedStateFromProps(this.props, null);
  }
  static getDerivedStateFromProps({ item }) {
    return {
      item
    };
  }

  // Render View:
  render() {
    const { item } = this.state;
    return (
      <View style={styles.container}>
        <DetailView item={item} />
      </View>
    );
  }
}

// Map REDUX State to Component Properties:
const mapStateToProps = state => {
  return {
    item: state.characters.item
  };
};

// Map REDUX Actions to Component Properties:
const mapDispatchToProps = (dispatch, props) => {
  return {};
};

// Connect Container to REDUX:
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
