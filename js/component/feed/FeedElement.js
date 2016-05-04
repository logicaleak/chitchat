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
        backgroundColor: 'white',
        padding: 3
    },
    metaData : {
        height:20,
        backgroundColor: 'white',
        flexDirection : 'row'
    },
    name : {
        flex: 1,
        backgroundColor: 'white'
    },
    topic : {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-end'
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
        backgroundColor: 'white'
    }
});