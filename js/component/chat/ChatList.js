import React, {ListView, View, TextInput} from 'react-native'
import {DataStore} from '../../store/DataStore.js'
import ChatListElement from './ChatListElement.js'

/**
 * Responsible of the filtering the chats
 */
class FilterBar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View style={filterStyles.filterContainer}>
                <TextInput 
                        style={filterStyles.search}
                        placeholder="Search"
                        placeholderTextColor="#222222"
                        >
                
                </TextInput>
                <View style={filterStyles.filter}>
                
                </View>
            </View>
        );
    }
}

const filterStyles = React.StyleSheet.create({
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


export default class ChatList extends React.Component {
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
    }
    
    _renderChat(chatData) {
        return (
            <ChatListElement chatData={chatData}/>    
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
                        renderRow={this._renderChat} 
                        renderSeparator={this._renderSeparator}
                        style={styles.chat} />
            </View>
        );
    }
}


const styles = React.StyleSheet.create({
    chatListContainer: {
        flex: 1,
        backgroundColor: "#909090"
    },
    chat: {
        backgroundColor: "#909090"
    },
    separator: {
        height: 10,
        backgroundColor: 'transparent'
    }
});