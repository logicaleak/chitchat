import React, {ListView, View} from 'react-native'
import {DataStore} from '../../store/DataStore.js'
import ChatListElement from './ChatListElement.js'

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
    
    _renderChat() {
        return (
            <ChatListElement />    
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
             <ListView
                    dataSource={this.state.chatListDatasource}
                    renderRow={this._renderChat} 
                    renderSeparator={this._renderSeparator}
                    style={styles.chat} />
        );
    }
}


const styles = React.StyleSheet.create({
    chat: {
        backgroundColor: "#909090"
    }
});