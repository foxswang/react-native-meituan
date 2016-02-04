/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var ListViewSample = require('./ListViewSample.js')
var MT = require('./Meituan.js')
var Featured = require('./booksearch/Featured');
var Search = require('./booksearch/Search');
var BookSearch = require('./booksearch/BookSearch');

var {
    AppRegistry,
    } = React;

AppRegistry.registerComponent('meituan', () => BookSearch);

//AppRegistry.registerComponent('meituan', () => ListViewSample);
//AppRegistry.registerComponent('meituan', () => BookSearch);
//AppRegistry.registerComponent('meituan', () => MT);

