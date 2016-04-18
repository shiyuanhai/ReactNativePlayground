import React, {
  AppRegistry
} from 'react-native';
import SimpleList from './SimpleList';
import SimpleScrollableTabBar from './SimpleScrollableTabBar';
import SimpleNavigator from './SimpleNavigator';
import SimpleReactNativeRouterFlux from './SimpleReactNativeRouterFlux/SimpleReactNativeRouterFlux';

//Simple list example. <ListView>
//AppRegistry.registerComponent('ReactNativePlayground', () => SimpleList);

//Simple tab bar example with scrollable animation effect. <TabBarIOS>
//https://github.com/brentvatne/react-native-scrollable-tab-view
//AppRegistry.registerComponent('ReactNativePlayground', () => SimpleScrollableTabBar);

//Simple Navigator example
//AppRegistry.registerComponent('ReactNativePlayground', () => SimpleNavigator);

//React Native Router Flux example.
AppRegistry.registerComponent('ReactNativePlayground', () => SimpleReactNativeRouterFlux);
