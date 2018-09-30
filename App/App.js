/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import * as api from "../api";
import { Router, Scene, Stack } from "react-native-router-flux";
import * as sections from "../components/sections";

// Main App
export default class App extends Component {
  componentWillMount() {
    api.setup();
  }

  // Render App
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key="characters"
              component={sections.Characters}
              hideNavBar={true}
              initial={true}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
