import React, {TouchableNativeFeedback, Text, View, StyleSheet, Image} from 'react-native'
import ImageProvider from '../../util/ImageProvider'

export default class FeedElement extends React.Component {
    constructor(props) {
        super(props)
    }
    
    _onPressButton() {
        
    }
    
    render() {
        var ozu = ImageProvider.getOzu();
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
                    <View style={styles.bottomContent}>
                        <Image source={ozu} style={styles.profileImage}/>
                        <View style={styles.mainContent}>
                            <Text key={feedElementData.feedId} >
                                {feedElementData.userMessage}
                            </Text>
                        </View>
                    </View>
                    
                </View>
            </TouchableNativeFeedback>
             
        );
    }
}

const styles = StyleSheet.create({
    container : {
        height: 75,
        backgroundColor: 'red',
        borderWidth: 1
    },
    metaData : {
        height:20,
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
    bottomContent : {
        flex: 1,
        height: 55,
        flexDirection: 'row'
    },
    mainContent: {
        height: 55,
        flex: 4
    },
    profileImage : {
        height: 55,
        flex: 1,
        backgroundColor: 'pink'
    }
});