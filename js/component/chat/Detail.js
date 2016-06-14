import {BackAndroid, ListView, View, TextInput, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import React, {Component} from 'react'
import {DataStore} from '../../store/DataStore.js'
import ImageProvider from '../../util/ImageProvider'
import Icon from 'react-native-vector-icons/FontAwesome';

class UserProfile extends Component {
    render() {
        return (
            <View>
                <View style={styles.userInfoContent}>
                    
                    <Image style={styles.profileImage} source={this.props.imageSource}/> 
                    
                    <View style={styles.userInformation}>
                        <Text>{this.props.userSummary}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default class Detail extends Component {
    constructor(props) {
        super(props)

        var that = this;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            that.props.navigator.pop();
            return true;
        });
    }

    _renderOriginProfile() {
        console.log(this.props.chatData);
        return (
            <UserProfile imageSource={ImageProvider.getOzu()} userSummary={this.props.chatData.originProfile.userSummary} />
        );    
    }

    _renderOrigin() {
        console.log("they said");
        return (
            <View style={styles.origin}>
                {this._renderOriginProfile.bind(this)()}
                <View style={styles.originMessageView}>
                    <Text style={styles.originMessage}>{this.props.chatData.originMessage}</Text>
                </View>
            </View>
        );
    }

    _renderRequesterProfile() {
        return (
            <UserProfile imageSource={ImageProvider.getOzu()} userSummary={this.props.chatData.requesterProfile.userSummary} />
        );
    }

    _renderRequester() {
        return (
            <View style={styles.requester}>
                {this._renderRequesterProfile.bind(this)()}
                <View style={styles.requesterMessageView}>
                    <Text style={styles.requesterMessage}>{this.props.chatData.requesterMessage}</Text>
                </View>
            </View>
        );
    }

    _renderBlockSeparator() {
        return (
            <View style={styles.blockSeparator} />
        );
    }

    _renderOriginRequestSeparator() {
        return (
            <View style={styles.originRequestSeparator} />
        );
    }

    _renderChatDetailMetaData() {
        return (
            <View style={styles.chatDetailMetaView}>
                <View style={styles.topicView}>
                    <Image source={ImageProvider.getOzu()} style={styles.topicIcon} />
                    <Text style={styles.topicName}>{this.props.chatData.topicName}</Text>
                </View>
                
                <View style={styles.chatTypeView}>
                    <Image source={ImageProvider.getOzu()} style={styles.chatTypeIcon} />
                    <Text style={styles.chatTypeName}>{this.props.chatData.type}</Text>
                </View>
            </View>
        );
    }

    _acceptOnPress() {

    }

    _rejectOnPress() {

    }

    _renderActionControls() {
        return (
            <View style={styles.actionControlsView}>
                <TouchableOpacity
                    onPress={this._acceptOnPress}
                    style={styles.acceptView}>
                    
                    <Text style={styles.acceptText}>Accept</Text>
                    <Icon style={styles.acceptIcon} size={40} name="check" color="#009933"/>
                    
                    
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={this._rejectOnPress}
                    style={styles.rejectView}>
                    
                    <Text style={styles.rejectText}>Reject</Text>
                    <Icon style={styles.rejectIcon} size={40} name="close" color="red"/>
                    
                </TouchableOpacity>
            </View>
        );
    }

    
    render() {
        return (
            <View style={styles.chatDetail}>
                {this._renderChatDetailMetaData.bind(this)()}
                {this._renderOrigin.bind(this)()}
                {this._renderRequester.bind(this)()}
                {this._renderActionControls.bind(this)()}
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    chatDetailMetaView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding : 8
    },
    topicView: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1
    },
    chatTypeView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1
    },
    topicIcon: {
        height: 40,
        width: 40
    },
    chatTypeIcon: {
        height: 40,
        width: 40
    },
    topicName : {
        fontWeight: 'bold',
        fontSize : 12,
        alignSelf: 'center',
        marginLeft: 4
    },
    chatDetail : {
        flexDirection: 'column',
        backgroundColor: "#909090",
        flex: 1
    },
    userInfoContent: {
        flexDirection: 'row',
        padding: 10
    },
    userInformation : {
        flex: 1,
        marginLeft: 4,
        alignSelf: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    originMessageView: {
        padding : 8
    },
    originMessage: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    blockSeparator: {
        height: 2
    },
    requesterMessageView: {
        padding : 8
    },
    requesterMessage: {
        fontSize: 13
    },
    origin: {
        backgroundColor: 'white',
        marginTop : 1
    },
    requester: {
        backgroundColor: 'white'
    },
    actionControlsView: {
        backgroundColor: 'white',
        marginTop: 1,
        marginBottom: 2,
        flexDirection: 'row',
        padding: 20
    },
    chatTypeName: {
        alignSelf: 'center',
        marginLeft: 4
    },
    acceptText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    rejectText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    acceptView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: '#BBBBBB'
    },
    rejectView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})