/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

class chitchat extends Component {
  render() {
    return (
      
        <ScrollableTabView tabBarPosition="bottom">
            <View tabLabel="Flow" />
            <View tabLabel="React" />
            <View tabLabel="Jest" />
        </ScrollableTabView>
      
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('chitchat', () => chitchat);
