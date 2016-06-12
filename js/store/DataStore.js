var _ = require('underscore');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var FeedMocks = require('./mocks/FeedMocks.js');
var ChatMocks = require('./mocks/ChatMocks.js');

var DataStore = _.extend({}, EventEmitter.prototype, {
    getFeed : function() {
        return FeedMocks.default;
    },
	
	getChatList: function() {
		return ChatMocks.chatList;
	},

	getTopicList: function() {
		// return TopicMocks.topicList;
	},
    
    // Emit Change event
	emitChange: function() {
		this.emit('change');
	},

	// Add change listener
	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	// Remove change listener
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});


AppDispatcher.register(function(action) {
    
});

export {DataStore};