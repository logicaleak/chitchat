import React, {Text, ListView, View, TouchableNativeFeedback, StyleSheet} from 'react-native'
import {DataStore} from '../../store/DataStore.js'
import FeedElement from './FeedElement.js'

export default class Feed extends React.Component {
    constructor(props) {
        super(props)
        this._renderFeed = this._renderFeed.bind(this)
        
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                return true
            }
        });
        this.state = {
            feedListDataStore : ds 
        }
    }
    
    _onPressButton() {
        
    }
    
    componentWillMount() {
        var feeds = DataStore.getFeed();
        // console.log(feeds);
        this.setState({feedListDataStore : this.state.feedListDataStore.cloneWithRows(feeds)});
    }
    
    _renderFeed(feedData) {
        return (
            <FeedElement feedElementData={feedData} />
        );
    }
    
    _renderSeparator() {
        return (
            <View style={styles.separator}/>
        )   
    }
    
    render() {
        return (
            <ListView
                    dataSource={this.state.feedListDataStore}
                    renderRow={this._renderFeed} 
                    renderSeparator={this._renderSeparator}
                    style={styles.feed} />
        );
    }
}

const styles = StyleSheet.create({
    feed: {
        backgroundColor: "#909090"
    },
    separator: {
        height: 10,
        backgroundColor: 'transparent'
    }
})