import {View, TextInput, TouchableOpacity, StyleSheet, ListView, Text} from 'react-native'
import React, {Component} from 'react'
export default class AutoComplete extends Component {

    constructor(props) {
        super(props)

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                return true
            }
        });

        this._getContainerViewStyle = this._getContainerViewStyle.bind(this);

        this.state = {
            dataSource : ds,
            containerViewStyle : this._getContainerViewStyle()
        }

        this.defaultProps = {
            onChangeText : function(text) {},
            onAddNewClick : function(newVar) {},
            items: []
        }

        
    }

    //New input in topic search
    _onChangeText(text) {
        this.props.onChangeText(text);
    }

    componentWillMount() {
        this.setState({
            enableAddButton: false
        });
    }

    componentWillReceiveProps(props) {
        var items = props.items;
        
        var itemsSize = items.length;
        var newContainerViewStyle = Object.assign(this._getContainerViewStyle(), {
            height: 60 + 45 * itemsSize
        });
        
        this.setState({
            containerViewStyle: newContainerViewStyle,
            dataSource: this.state.dataSource.cloneWithRows(items)
        });

        if (items.length == 0) {
            this.setState({enableAddButton: true});
        } else {
            this.setState({enableAddButton: false});
        }
    }

    _getContainerViewStyle() {
        if (this.props.containerViewStyle) {
            return this.props.containerViewStyle;
        } else {
            return {
                flexDirection: 'column'
            };
        }
    }

    _getTextInputStyle() {
        if (this.props.textInputStyle) {
            return this.props.textInputStyle;
        } else {
            return {

            };
        }
    }

    _getListViewStyle() {
        if (this.props.listViewStyle) {
            return this.props.listViewStyle;
        } else {
            return {
                flex: 1
            };
        }
    }

    _getRowViewStyle() {
        if (this.props.rowViewStyle) {
            return this.props.rowViewStyle;
        } else {
            return {
                height: 30,
                padding: 20,
                justifyContent: 'center'
            }
        }
    }

    _getRowTextStyle() {
        if (this.props.rowTextStyle) {
            return this.props.rowTextStyle;
        } else {
            return {
                fontWeight: 'bold',
                fontSize : 15
            }
        }
    }

    _getSeparatorStyle() {
        if (this.props.separatorStyle) {
            return this.props.separatorStyle;
        } else {
            return {
                height: 1,
                backgroundColor: '#DDDDDD'
            }
        }
    }

    _onRowPressGenerator(rowData) {
        var that = this;
        console.log("returning");
        return function() {
            console.log("PRESSEDMADAFAKA");
            console.log(rowData);
            that.props.onRowPress(rowData);
        }
    
    }

    _renderRow(rowData) {
        //If user passed a renderRow method, use it to generate the view
        //But we still should use our own touchableOpacity to guarantee onPress to work
        if (this.props.renderRow) {
            return (
                <TouchableOpacity
                        onPress={this._onRowPressGenerator.bind(this)(rowData)}
                        style={this._getRowViewStyle.bind(this)()}>
                    {this.props.renderRow(rowData)}
                </TouchableOpacity>
            )
        } 

        return (
            <TouchableOpacity
                    onPress={this._onRowPressGenerator.bind(this)(rowData)}
                    style={this._getRowViewStyle.bind(this)()}>
                
                <Text style={this._getRowTextStyle.bind(this)()}>{rowData.text}</Text>
                
            </TouchableOpacity>
        );
    }

    _renderSeparator() {
        return (
            <View style={this._getSeparatorStyle.bind(this)()}/>
        )   
    }

    render() {
        return (
            <View style={this.state.containerViewStyle}>
                <TextInput
                    style={this._getTextInputStyle.bind(this)()}
                    onChangeText={this._onChangeText.bind(this)}
                    multiline={true}/>

                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    style={this._getListViewStyle.bind(this)()}
                    enableEmptySections={true}
                    renderSeparator={this._renderSeparator.bind(this)}
                />
            </View>
        );
    }
}

AutoComplete.propTypes = {

};

var styles = StyleSheet.create({
    topicChooserView: {

    }
});