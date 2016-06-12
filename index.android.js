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
import ChatScreen from './js/component/chat/ChatScreen.js'
import CreateOrigin from './js/component/action/CreateOrigin.js'

class tab extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition="bottom">
                <Feed navigator={this.props.navigator} tabLabel="Feed" />
                <ChatList navigator={this.props.navigator} tabLabel="Chat" />
                <CreateOrigin navigator={this.props.navigator} tabLabel="Enqueue" />
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
                    return React.createElement(route.component, Object.assign({navigator: navigator}, route.passProps));
                }
            }}
        />  
      
    );
  }
  
  componentDidMount() {
    console.log("main mounted");
    var ws = new WebSocket('ws://10.0.2.2:8080/chat', '', {user_id : "userid1"});
    console.log(ws);
    ws.onopen = () => {
        console.log("connection opened");
        // connection opened
        ws.send('something1');
        ws.send('something2');
        ws.send('something3');
        ws.send('something4');
    };  
  }
  
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('chitchat', () => chitchat);
