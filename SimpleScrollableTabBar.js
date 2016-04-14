import React, {
  Component,
  View,
  Text,
  ScrollView
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class SimpleScrollableTabBar extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollableTabView tabBarPosition="bottom">
        <ScrollView tabLabel="Tab1">
          <View style={styles.content}>
            <Text>Tab1 Content</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="Tab2">
          <View style={styles.content}>
            <Text>Tab2 Content</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="Tab3">
          <View style={styles.content}>
            <Text>Tab3 Content</Text>
          </View>
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

const styles = {
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    height: 300,
  },
};

export default SimpleScrollableTabBar;
