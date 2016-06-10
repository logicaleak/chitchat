import React, {TouchableOpacity, Text, View, StyleSheet, Image, BackAndroid} from 'react-native'
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
    
    /**
     * This method creates the style of textContent view according to the visibility of the actionBar
     * Hence changes style with touch
     */
    _getTextContentStyle() {
        if (this.state.actionBarVisible) {
            return {
                padding: 3
            };
        } else {
            return {
                height : 40
            }
        }
    }
    
    /**
     * This method changes actionBar visibility with touch
     */
    _renderActionBar() {
        console.log("in");
        if (this.state.actionBarVisible) {
            console.log("true");
            return (
                
                <View style={styles.actionBar}>
                    <TouchableOpacity style={styles.engageButton}>
                        <View>
                            <Text>Engage</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dismissButton}>
                        <View>
                            <Text>Dismiss</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            );        
        } 
    }
    
    _renderUserInfoContent() {
        if (this.state.actionBarVisible) {
            return (
                <View>
                    <View style={styles.userInfoContent}>
                        <View style={styles.imageInformation}>
                            <Image style={styles.profileImage} source={ImageProvider.getOzu()}/> 
                        </View>
                        <View style={styles.userInformation}>
                            <Text>Mohendis 27 yasinda</Text>
                        </View>
                    </View>
                </View>
                
            );    
        }
    }
    
    render() {
        var ozu = ImageProvider.getOzu();
        var feedElementData = this.props.feedElementData;
        return (
            <View>
                <TouchableOpacity
                        onPress={this._onPressButton.bind(this)}>
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
                            {this._renderUserInfoContent()}
                            <View style={this._getTextContentStyle.bind(this)()}>
                                <Text key={feedElementData.feedId} >
                                    {feedElementData.userMessage}
                                </Text>
                            </View>
                        </View>
                        
                    </View>
                </TouchableOpacity>
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
        flexDirection: 'column',
        overflow : 'hidden',
        padding: 3
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
        height : 23,
        backgroundColor: 'blue'
    },
    engageButton : {
        flex: 1,
        backgroundColor: 'green',
        alignItems : 'center'
    },
    dismissButton: {
        flex: 1,
        backgroundColor : 'red',
        alignItems : 'center'
    },
    userInfoContent: {
        flexDirection: 'row',
        padding: 2
    },
    userInformation : {
        flex: 1,
        marginLeft: 4
    },
    imageInformation: {
        width: 20
    },
    profileImage: {
        width: 20,
        height: 27
    }, 
    
});