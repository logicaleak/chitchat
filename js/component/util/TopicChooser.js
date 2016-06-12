import React from 'react-native'
import AutoComplete from './AutoComplete.js'

export default class TopicChooser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            topics : [],
            chosenTopic : null
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
        console.log("pressed")
        console.log(rowData)
        this.setState({
            chosenTopic: rowData.text
        });
    }

    _onAddNewClick() {

    }

    componentWillUpdate() {
        if (this.state.chosenTopic) {
            this.props.onTopicChosen(this.state.chosenTopic);
        }
    }

    _renderSelf() {
        if (this.state.chosenTopic) {
            return (
                <React.View style={{backgroundColor:'white'}}>
                    <React.Text>{this.state.chosenTopic}</React.Text>
                </React.View>    
            )
        } else {
            return (
                
                <React.View style={{backgroundColor:'white'}}>
                    <React.Text>Choose Topic:</React.Text>
                    <AutoComplete
                        items={this.state.topics}
                        onChangeText={this._onChangeText.bind(this)}
                        onAddNewClick={this._onAddNewClick.bind(this)}
                        onRowPress={this._onRowPress.bind(this)}
                    />
                </React.View>
            )
        }
    }

    render() {
        return this._renderSelf.bind(this)();
    }
}