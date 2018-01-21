import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  StyleSheet,
} from 'react-native';


import { StackNavigator } from 'react-navigation';

var SearchPage = require('./SearchPage');
var SearchResults = require('./SearchResults');
var PropertyView = require('./PropertyView');


const SimpleApp = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  Property: { screen: PropertyView },
});


AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);
