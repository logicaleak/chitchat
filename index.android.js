/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Feed from './js/component/feed/Feed.js'
import ChatList from './js/component/chat/ChatList.js'

class tab extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition="bottom">
                <Feed navigator={this.props.navigator} tabLabel="Feed" />
                <ChatList navigator={this.props.navigator} tabLabel="Chat" />
                <View tabLabel="Jest" />
            </ScrollableTabView>
        );
    }
} 

class chitchat extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name: 'main', component: tab}}
            configureScene={() => {
                return Navigator.SceneConfigs.FloatFromRight;
            }}
            renderScene={(route, navigator) => {
                // count the number of func calls
                console.log("Hey man !");

                if (route.component) {
                    return React.createElement(route.component, { navigator });
                }
            }}
        />  
      
    );
  }
  
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('chitchat', () => chitchat);
