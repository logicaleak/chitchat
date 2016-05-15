import React, {View, Image, Text} from 'react-native'
import ImageProvider from '../../util/ImageProvider'
import Icon from 'react-native-vector-icons/FontAwesome';

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
    _getGlobalElementStyle(chatData) {
        var globalElementStyle = {
            flexDirection: 'column',
            padding: 6,
            marginTop: 3
        }
        
        if (chatData.pairState === "WAITING") {
            globalElementStyle.backgroundColor = '#ffffb3';    
        }
        
        if (chatData.pairState === "PAIRED") {
            globalElementStyle.backgroundColor = '#ccffcc';
        }
        
        return globalElementStyle;
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
                <Text style={styles.boldText}>{chatData.pair.userNameSurname} . {chatData.topicName}</Text>
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
    
    _renderMisc(chatData) {
        if (chatData.pairState === "WAITING") {
            return (
                <View style={styles.misc}>
                    <Icon style={styles.statusIcon} size={30} name="clock-o" />
                    <Text style={styles.waitingTimer}
                            ref={component => this._waitingTimerRef = component}>
                        {chatData.waitTime}
                    </Text>
                </View>
            )
        }
        
        if (chatData.pairState === "PAIRED") {
            return (
                <View style={styles.misc}>
                    <Icon style={styles.statusIcon} size={30} name="check" />
                </View>
            )
        }
    }
    
    render() {
        var chatData = this.props.chatData;
        return (
            <View style={this._getGlobalElementStyle.bind(this)(chatData)}>
                {this._renderChatInfo(chatData)}
            
                <View style={styles.separator} />
            
                {this._renderProfileInfoContent(chatData)}
                
                
                <View style={styles.meta}>
                    {this._renderLastPairMessageView(chatData)}
                    {this._renderMisc(chatData)}
                </View>
                
            </View>
        );
    }
}


const styles = React.StyleSheet.create({
    profileInfoContent: {
        flexDirection: 'row',
        marginTop: 4
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    userInfo: {
        flex: 1,
        padding: 3,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    meta : {
        flexDirection: 'column'
    },
    lastPairMessageView: {
        height: 30,
        overflow: 'hidden'
    },
    misc: {
        flexDirection: 'row',
        marginTop: 4
    },
    separator: {
        height: 0.3,
        backgroundColor : '#808080'
    },
    boldText : {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 11
    },
    statusIcon: {
        
    },
    waitingTimer: {
        alignSelf: 'center',
        marginLeft: 6
    }
    
});