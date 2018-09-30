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

import { Router, Scene, Stack, Actions } from "react-native-router-flux";
import * as sections from "../components/sections";

import { TouchableOpacity, Text } from "react-native";

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
            <Scene
              key="characterDetail"
              component={sections.CharacterDetail}
              renderRightButton={NewCharacterNoteButton}
              {...sceneDefaultStyles}
            />
            <Scene
              key="characterNoteForm"
              component={sections.CharacterNoteForm}
              {...sceneDefaultStyles}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

// Scenes Default Styles
const sceneDefaultStyles = {
  navigationBarStyle: { backgroundColor: "rgb(24,24,24)" },
  backButtonTintColor: "white",
  backButtonTextStyle: { color: "white" },
  titleStyle: { color: "white" }
};

// New CharacterNote Button
const NewCharacterNoteButton = props => (
  <TouchableOpacity
    style={{ padding: 10 }}
    onPress={() => Actions.characterNoteForm({ title: "Nuevo Comentario" })}
  >
    <Text style={{ color: "white", fontWeight: "bold" }}>
      {"Añadir Comentario"}
    </Text>
  </TouchableOpacity>
);
