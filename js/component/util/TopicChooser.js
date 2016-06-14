import React, {Component} from 'react'
import {View, Text} from 'react-native'
import AutoComplete from './AutoComplete.js'

export default class TopicChooser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topics : [],
            chosenTopic : null,
            onTopicChosen: function(topic) {}
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
            topics: [
                {
                    text: "aTopic"
                },
                {
                    text: "aTopic"
                },
                {
                    text: "aTopic"
                },
                {
                    text: "aTopic"
                },
                {
                    text: "aTopic"
                },
                {
                    text: "aTopic"
                }
            ]
        })
    }

    _onRowPress(rowData) {
        //Run the onTopicChosen callback
        if (rowData.text !== "" && rowData.text !== null && 
            rowData.text !== undefined) {
            this.props.onTopicChosen(rowData.text);        
        }
        
        
        this.setState({
            chosenTopic: rowData.text
        });
    }

    _onAddNewClick() {

    }

    componentWillUpdate() {
    }

    _renderSelf() {
        if (this.state.chosenTopic) {
            return (
                <View style={{backgroundColor:'white'}}>
                    <Text>{this.state.chosenTopic}</Text>
                </View>    
            )
        } else {
            return (
                
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.chooseTopicTitleText}>Choose Topic:</Text>
                    <AutoComplete
                        items={this.state.topics}
                        onChangeText={this._onChangeText.bind(this)}
                        onAddNewClick={this._onAddNewClick.bind(this)}
                        onRowPress={this._onRowPress.bind(this)}
                        placeholder={'Enter topic'}
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