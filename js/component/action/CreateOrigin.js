import React, {Component} from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'
import TopicChooser from '../util/TopicChooser.js'

export default class CreateOrigin extends Component {
    constructor(props) {
        super(props)
    }

    _onTopicChosen() {

    }


    render() {
        return (
            <View style={styles.createOriginView}>
                <TopicChooser onTopicChosen={this._onTopicChosen.bind(this)}/>
                <View style={styles.originMessage}>
                    <Text>Do you have anything to say ?</Text>
                    <TextInput style={styles.messageTextInput} multiline={true}/>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    createOriginView: {
        flex: 1,
        backgroundColor: "#909090"
    },
    messageTextInput: {
    }
});