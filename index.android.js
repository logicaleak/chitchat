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
import Feed from './js/component/feed/Feed.js'

class chitchat extends Component {
  render() {
    return (
      
        <ScrollableTabView tabBarPosition="bottom">
            <Feed tabLabel="Flow" />
            <View tabLabel="React" />
            <View tabLabel="Jest" />
        </ScrollableTabView>
      
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('chitchat', () => chitchat);
