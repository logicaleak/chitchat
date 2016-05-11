import React, {TouchableNativeFeedback, Text, View, StyleSheet, Image, BackAndroid} from 'react-native'
import ImageProvider from '../../util/ImageProvider'

export default class FeedElement extends React.Component {
    constructor(props) {
        super(props)
        
        this._renderActionBar = this._renderActionBar.bind(this);
        
        this.state = {
            actionBarVisible : false
        };
    }
    
    _onPressButton() {
        console.log("pressed");
        if (this.state.actionBarVisible) {
            this.setState({
                actionBarVisible : false 
            });    
        } else {
            this.setState({
                actionBarVisible : true 
            });
        }
        
    }
    
    _renderActionBar() {
        console.log("in");
        if (this.state.actionBarVisible) {
            console.log("true");
            return (
                
                <View style={styles.actionBar}>
                    <TouchableNativeFeedback
                            background={TouchableNativeFeedback.SelectableBackground()} >
                        <View style={styles.engageButton}>
                            <Text>Engage</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                            background={TouchableNativeFeedback.SelectableBackground()} >
                        <View style={styles.dismissButton}>
                            <Text>Dismiss</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                
            );        
        } 
    }
    
    render() {
        var ozu = ImageProvider.getOzu();
        var feedElementData = this.props.feedElementData;
        return (
            <View>
                <TouchableNativeFeedback
                        onPress={this._onPressButton.bind(this)}
                        background={TouchableNativeFeedback.SelectableBackground()} >
                    <View style={styles.container}>
                        <View style={styles.metaData}>
                            <View style={styles.name}>
                                <Text style={styles.boldText}>{feedElementData.owner.userNameSurname}</Text>
                            </View>
                            <View style={styles.topic}>
                                <Text style={styles.boldText}>  {feedElementData.topicName}</Text>
                            </View>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.bottomContent}>
                            <View style={styles.mainContent}>
                                <Text key={feedElementData.feedId} >
                                    {feedElementData.userMessage}
                                </Text>
                            </View>
                        </View>
                        
                    </View>
                </TouchableNativeFeedback>
                {this._renderActionBar()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        padding: 3
    },
    metaData : {
        height:20,
        backgroundColor: 'white',
        flexDirection : 'row'
    },
    name : {
        backgroundColor: 'white'
    },
    topic : {
        backgroundColor: 'white'
    },
    bottomContent : {
        flex: 1,
        height: 55,
        flexDirection: 'row'
    },
    mainContent: {
        height: 55,
        flex: 1
    },
    boldText : {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 11
    },
    separator: {
        height: 0.3,
        backgroundColor : '#808080'
    },
    actionBar : {
        flexDirection : 'row',
        height : 15
    },
    engageButton : {
        flex: 1,
        backgroundColor: 'green'
    },
    dismissButton: {
        flex: 1,
        backgroundColor : 'red'
    } 
    
});