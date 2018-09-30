import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";

import { CharacterCell } from "../../widgets";

// Characters FlatList View:
// - Displays given 'list' of characters
// - Delegates the 'onPress' Event
export default class extends React.Component {
  render() {
    console.log("<CharactersView> render: props=%o", this.props);
    const { list, onSelect } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={value => this._renderItem(value.item, onSelect)}
          keyExtractor={item => "cell" + item.id}
          extraData={this.props}
          numColumns={2}
          style={{ paddingTop: 40 }}
        />
      </View>
    );
  }
  _renderItem(item, onSelect) {
    return <CharacterCell item={item} onPress={item => onSelect(item)} />;
  }
}
