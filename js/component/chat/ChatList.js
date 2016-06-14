import {BackAndroid, ListView, View, TextInput, StyleSheet} from 'react-native'
import React, {Component} from 'react'
import {DataStore} from '../../store/DataStore.js'
import ChatListElement from './ChatListElement.js'
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Responsible of the filtering the chats
 */
class FilterBar extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View style={filterStyles.filterContainer}>
                <TextInput 
                        style={filterStyles.search}
                        placeholder="Search"
                        placeholderTextColor="#222222">
                
                </TextInput>
                <View style={filterStyles.filter}>
                    <Icon name="filter" size={30} color="#900" />
                </View>
            </View>
        );
    }
}

const filterStyles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'blue'
    },
    search: {
        backgroundColor: 'white',
        flex: 1
    },
    filter: {
        backgroundColor: 'orange',
        width: 40
    }
});


export default class ChatList extends Component {
    constructor(props) {
        super(props)
        
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                return true
            }
        });
        this.state = {
            chatListDatasource : ds 
        }

        var that = this;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            that.props.navigator.pop();
            return true;
        });
    }
    
    _renderChat(chatData) {
        return (
            <ChatListElement navigator={this.props.navigator} chatData={chatData}/>    
        );
    }
    
    _renderSeparator() {
        return (
            <View style={styles.separator}/>
        )   
    }
    
    componentWillMount() {
        var chats = DataStore.getChatList();
        this.setState({chatListDatasource : this.state.chatListDatasource.cloneWithRows(chats)});
    }
    
    render() {
        return (
            <View style={styles.chatListContainer}>
                <FilterBar />
                <ListView
                        dataSource={this.state.chatListDatasource}
                        renderRow={this._renderChat.bind(this)} 
                        renderSeparator={this._renderSeparator}
                        style={styles.chat} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    chatListContainer: {
        flex: 1,
        backgroundColor: "#909090"
    },
    chat: {
        backgroundColor: "#909090"
    },
    separator: {
        height: 5,
        backgroundColor: 'transparent'
    }
});