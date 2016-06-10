import React, {ListView, View, TextInput, StyleSheet, Image, Text} from 'react-native'
import {DataStore} from '../../store/DataStore.js'
import ImageProvider from '../../util/ImageProvider'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Detail extends React.Component {
    constructor(props) {
        super(props)
    }
    
    _renderPairProfile() {
        console.log(this.props.chatData);
        return (
            <View>
                <View style={styles.userInfoContent}>
                    <View style={styles.imageInformation}>
                        <Image style={styles.profileImage} source={ImageProvider.getOzu()}/> 
                    </View>
                    <View style={styles.userInformation}>
                        <Text>{this.props.chatData.pair.userSummary}</Text>
                    </View>
                </View>
            </View>
        );    
    }
    
    render() {
        return (
            <View>
                {this._renderPairProfile.bind(this)()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userInfoContent: {
        flexDirection: 'row',
        padding: 2
    },
    userInformation : {
        flex: 1,
        marginLeft: 4
    },
    imageInformation: {
        width: 20
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
})