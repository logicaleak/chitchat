import React, {Component} from 'react'
import {TouchableOpacity, Text, View, TextInput, StyleSheet} from 'react-native'
import TopicChooser from '../util/TopicChooser.js'
import LanguageChooser from '../util/LanguageChooser.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import {DoCreateOrigin} from '../../actions/Actions.js';

export default class CreateOrigin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: null
        }
    }

    _onTopicChosen(topic) {
        this.chosenTopic = topic;
    }
    
    _onLanguageChosen(language) {
        this.chosenLanguage = language;
    }

    //Used to grow the textInput when new lines are introduced
    _messageTextInputOnChange(event) {
        this.setState({
            text: event.nativeEvent.text,
            height: event.nativeEvent.contentSize.height
        });
    }
    
    _doOnPress() {
        var result = DoCreateOrigin({});
        if (result) {
            //alert success and clean the page
        } else {
            //alert failure and keep the page
        }
    }
    
    _cancelOnPress() {
        
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
                <LanguageChooser onLanguageChosen={this._onLanguageChosen.bind(this)} languageChooserStyle={styles.languageChooserStyle}/>
                <View style={styles.originMessage}>
                    <TextInput style={textInputStyle} onChange={this._messageTextInputOnChange.bind(this)}
                                 multiline={true} value={this.state.text}
                                placeholder={'Do you have anything to say ?'}/>
                </View>
                <View style={styles.actionControlsView}>
                    <TouchableOpacity
                            onPress={this._doOnPress}
                            style={styles.doView}>
                        <Text style={styles.doText}>Go</Text>
                        <Icon style={styles.doIcon} size={40} name="check" color="#009933"/>
                    </TouchableOpacity>
                
                    <TouchableOpacity
                            onPress={this._cancelOnPress}
                            style={styles.cancelView}>
                        <Text style={styles.cancelText}>Cancel</Text>
                        <Icon style={styles.cancelIcon} size={40} name="close" color="red"/>
                    </TouchableOpacity>
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
    originMessage: {
        marginTop: 1,
        backgroundColor: 'white'
    },
    messageTextInput: {
    },
    actionControlsView: {
        backgroundColor: 'white',
        marginTop: 1,
        marginBottom: 2,
        flexDirection: 'row',
        padding: 20
    },
    doText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    cancelText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    doView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: '#BBBBBB'
    },
    cancelView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    languageChooserStyle: {
        backgroundColor: 'white',
        marginTop: 1
    }
});