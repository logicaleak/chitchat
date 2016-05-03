import React, {TouchableNativeFeedback, Text, View, StyleSheet} from 'react-native'

export default class FeedElement extends React.Component {
    constructor(props) {
        super(props)
    }
    
    _onPressButton() {
        
    }
    
    render() {
        var feedElementData = this.props.feedElementData
        return (
            <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={TouchableNativeFeedback.SelectableBackground()} >
                <View style={styles.container}>
                    <View style={styles.metaData}>
                        <View style={styles.name}>
                            <Text style={{fontSize : 11}}>{feedElementData.owner.userNameSurname}</Text>
                        </View>
                        <View style={styles.topic}>
                            <Text style={{fontSize : 11}}>{feedElementData.topicName}</Text>
                        </View>
                    </View>
                    <Text key={feedElementData.feedId} >
                        {feedElementData.userMessage}
                    </Text>
                </View>
            </TouchableNativeFeedback>
            
        );
    }
}

const styles = StyleSheet.create({
    container : {
        height: 50,
        backgroundColor: 'red',
        borderWidth: 1
    },
    metaData : {
        height:10,
        backgroundColor: 'blue',
        borderWidth: 1,
        flexDirection : 'row'
    },
    name : {
        flex: 1,
        backgroundColor: 'green'
    },
    topic : {
        flex: 1,
        backgroundColor: 'yellow'
    },
    profileImage : {
        
    },
    mainContent : {
        
    }
});