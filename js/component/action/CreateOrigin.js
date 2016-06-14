import React, {Component} from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'
import TopicChooser from '../util/TopicChooser.js'

export default class CreateOrigin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: null
        }
    }

    _onTopicChosen() {

    }

    _messageTextInputOnChange(event) {
        this.setState({
            text: event.nativeEvent.text,
            height: event.nativeEvent.contentSize.height
        });
    }

    render() {
        if (this.state.height) {
            var textInputStyle = Object.assign({}, {height: this.state.height});
        } else {
            var textInputStyle = {};
        }
        return (
            <View style={styles.createOriginView}>
                <TopicChooser onTopicChosen={this._onTopicChosen.bind(this)}/>
                <View style={styles.originMessage}>
                    <TextInput style={textInputStyle} onChange={this._messageTextInputOnChange.bind(this)}
                                 multiline={true} value={this.state.text}
                                placeholder={'Do you have anything to say ?'}/>
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