import React, {
  AppRegistry
} from 'react-native';
import SimpleList from './SimpleList';
import SimpleScrollableTabBar from './SimpleScrollableTabBar';

//Simple list example. <ListView>
//AppRegistry.registerComponent('ReactNativePlayground', () => SimpleList);

//Simple tab bar example with scrollable animation effect. <TabBarIOS>
//https://github.com/brentvatne/react-native-scrollable-tab-view
AppRegistry.registerComponent('ReactNativePlayground', () => SimpleScrollableTabBar);
