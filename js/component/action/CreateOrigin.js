import React from 'react-native'

import TopicChooser from '../util/TopicChooser.js'

export default class CreateOrigin extends React.Component {
    constructor(props) {
        super(props)
    }

    _onTopicChosen() {

    }


    render() {
        return (
            <React.View style={styles.createOriginView}>
                <TopicChooser onTopicChosen={this._onTopicChosen.bind(this)}/>
                <React.View style={styles.originMessage}>
                    <React.Text>Lagalugalagaluga</React.Text>
                </React.View>
            </React.View>
        );
    }
}

var styles = React.StyleSheet.create({
    createOriginView: {
        flex: 1,
        backgroundColor: "#909090"
    }
});