import React, {Component} from 'react'
import {View, Text} from 'react-native'
import AutoComplete from './AutoComplete.js'

export default class TopicChooser extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            languages : [],
            onLanguageChosen: function(language) {}
        }
    }

    _onChangeText(text) {
        console.log("txt")
        console.log(text);
        if (text === "") {
            console.log("in")
            this.setState({
                topics: []
            });    
            return;
        }
        console.log("working");
        this.setState({
            languages: [
                {
                    text: "English"
                },
                {
                    text: "Turkish"
                }
            ]
        })
    }

    _onRowPress(rowData) {
        //Run the onTopicChosen callback
        if (rowData.text !== "" && rowData.text !== null && 
            rowData.text !== undefined) {
            this.props.onLanguageChosen(rowData.text);        
        }
        
        
        this.setState({
            chosenLanguage: rowData.text
        });
    }

    _onAddNewClick() {

    }

    componentWillUpdate() {
        
    }

    _renderSelf() {
        if (this.state.chosenLanguage) {
            return (
                <View style={{backgroundColor:'white'}}>
                    <Text>{this.state.chosenLanguage}</Text>
                </View>    
            )
        } else {
            return (
                
                <View style={this.props.languageChooserStyle}>
                    <Text style={styles.chooseTopicTitleText}>Choose Language:</Text>
                    <AutoComplete
                        items={this.state.languages}
                        onChangeText={this._onChangeText.bind(this)}
                        onAddNewClick={this._onAddNewClick.bind(this)}
                        onRowPress={this._onRowPress.bind(this)}
                        placeholder={'Enter Language'}
                    />
                </View>
            )
        }
    }

    render() {
        return this._renderSelf.bind(this)();
    }
}

var styles = {
    chooseTopicTitleText: {
        fontWeight: 'bold',
        fontSize: 17
    }
}