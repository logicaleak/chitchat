import React, {Text, ListView, TouchableNativeFeedback} from 'react-native'
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
            feedList : ds 
        }
    }
    
    _onPressButton() {
        console.log("yo")
    }
    
    componentDidMount() {
        var feeds = DataStore.getFeed();
        // console.log(feeds);
        this.setState({feedList : this.state.feedList.cloneWithRows(feeds)});
    }
    
    _renderFeed(feedData) {
        return (
            <FeedElement key={feedData.feedId} feedElementData={feedData} />
        );
    }
    
    componentWillReceiveProps(props) {
        
    }   
    
    render() {
        return (
            <ListView
                    dataSource={this.state.feedList}
                    renderRow={this._renderFeed} />
        );
    }
}