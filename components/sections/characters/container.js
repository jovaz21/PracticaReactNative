import React, { Component } from "react";
import { connect } from "react-redux";
import { doFetchCharactersAction } from "../../../store";

import { View, ActivityIndicator } from "react-native";
import ListView from "./view";
import styles from "./styles";

// Characters List Container:
// 1. Fetches characters when mounted
// 2. Handles the 'isFetching' stuff
// 3. Renders the 'list' (through the ListView Component)
// 4. Handles the 'data' pagination stuff
// 5. Manages the 'onSelect' Event
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = Container.getDerivedStateFromProps(this.props, null);
  }
  static getDerivedStateFromProps({ list, data, isFetching }) {
    return {
      list,
      data,
      isFetching
    };
  }

  // Did Mount => Fetch Characters...
  componentDidMount() {
    this.props.fetchCharacters();
  }

  // On Select
  onSelect(item) {
    console.log("<CharactersViewContainer> onSelect: item=%o", item);
  }

  // Render View:
  render() {
    const { list, data } = this.state;
    console.log("<CharactersViewContainer> render: data=%o", data);
    return (
      <View style={styles.container}>
        <ListView list={list} onSelect={item => this.onSelect(item)} />
        {this._renderActivityIndicator()}
      </View>
    );
  }
  _renderActivityIndicator() {
    const { isFetching } = this.state;
    console.log(
      "<CharactersViewContainer> _renderActivityIndicator: isFetching=%o",
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
    list: state.characters.list,
    data: state.characters.data,
    isFetching: state.characters.isFetching
  };
};

// Map REDUX Actions to Component Properties:
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCharacters: () => {
      dispatch(doFetchCharactersAction());
    }
  };
};

// Connect Container to REDUX:
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
