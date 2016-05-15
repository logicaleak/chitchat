import React, {View, Image, Text} from 'react-native'
import ImageProvider from '../../util/ImageProvider'


export default class ChatListElement extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            actionBarVisible : false
        };
    }
    
    componentWillMount() {
        
    }
    
    /**
     * Renders icons/text for the status of the pairing process
     */
    _renderStatus() {
        
    }
    
    /**
     * Renders the icon for the type of the pairing
     */
    _renderType() {
        
    }
    
    /**
     * Returns the styling of the total element according to the 
     * state of the pairing
     */
    _getGlobalElementStyle() {
        var globalElementStyle = {
            
        }
        
        if (this.state.pairState === "WAITING") {
            globalElementStyle.backgroundColor = 'yellow';    
        }
        
        if (this.state.pairStyle === "PAIRED") {
            globalElementStyle.backgroundColor = 'green';
        }
        
    }
    
    /**
     * Renders the profile info of the paired user
     */
    _renderProfileInfoContent(chatData) {
        
        return (
            <View style={styles.profileInfoContent}>
                
                <Image style={styles.profileImage} source={ImageProvider.getOzu()} />
                
                <View style={styles.userInfo}>
                    <Text>{chatData.pair.userSummary}</Text>
                </View>
            </View>
        )
    }
    
    /**
     * Renders the reminder and the data about the chatData
     * Name of the user and the topic etc.
     * 
     * In the future might be used for groups and shit
     */
    _renderChatInfo(chatData) {
        return (
            <View style={styles.chatData}>
                <Text>{chatData.pair.userNameSurname} . {chatData.topicName}</Text>
            </View>
        )
    }
    
    /**
     * Renders the last message sent by the pair
     */
    _renderLastPairMessageView(chatData) {
        return (
            <View style={styles.lastPairMessageView}>
                <Text>{chatData.lastPairMessage}</Text>
            </View>
        );
    }
    
    render() {
        var chatData = this.props.chatData;
        return (
            <View style={styles.element}>
                {this._renderChatInfo(chatData)}
            
                {this._renderProfileInfoContent(chatData)}
                
                <View style={styles.meta}>
                    {this._renderLastPairMessageView(chatData)}
                    <View style={styles.misc}>
                        <View style={styles.status}>
                    
                        </View>    
                    </View>
                </View>
                
            </View>
        );
    }
}


const styles = React.StyleSheet.create({
    element: {
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    profileInfoContent: {
        flexDirection: 'row'
    },
    profileImage: {
        height: 40,
        width: 30
    },
    userInfo: {
        flex: 1
    },
    meta : {
        flexDirection: 'column'
    },
    lastPairMessageView: {
        height: 30,
        overflow: 'hidden'
    },
    misc: {
        flexDirection: 'row'  
    },
    status : {
        height: 30,
        width: 30,
        backgroundColor: 'red'
    }
    
});