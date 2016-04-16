import React, {
  Component,
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';

class SimpleNavigator extends Component{
  constructor(props) {
    super(props);
  }
  renderScene(route, nav) {
    switch(route.id) {
      case 'prev':
        return <View style={styles.container}><Text>Previous Scene</Text></View>;
      case 'next':
        return <View style={styles.container}><Text>Next Scene</Text></View>;
      default:
        return <View style={styles.container}><Text>First Scene</Text></View>;
    }
  }
  render() {
    return (
      <Navigator
        debugOverlay={false}
        initialRoute={{title: 'My First Scene', id: 'first'}}
        renderScene={this.renderScene}
        navigationBar={<SimpleNavBar />}
      />
    );
  }
}

class SimpleNavBar extends Component{
  render() {
    const routeMapper = {
      LeftButton: (route, navigator, index, navState) => {
        return (
          <TouchableOpacity
            onPress={() => navigator.push({id: 'prev'})}
            style={styles.navBarBtn}>
            <Text style={styles.navBarBtnText}>Prev</Text>
          </TouchableOpacity>
        );
      },
      RightButton: (route, navigator, index, navState) => {
        return (
          <TouchableOpacity
            onPress={() => navigator.push({id: 'next'})}
            style={styles.navBarBtn}>
            <Text style={styles.navBarBtnText}>Next</Text>
          </TouchableOpacity>
        );
      },
      Title: (route, navigator, index, navState) => {
        return <Text style={styles.navBarTitle}>Scene 1</Text>
      }
    };
    return (
      <Navigator.NavigationBar
        routeMapper={routeMapper}
        style={styles.navBar}
        {...this.props}
      />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {

  },
  navBar: {
    backgroundColor: '#618CDC',
  },
  navBarBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBarBtnText: {
    color: '#ffffff',
  },
  navBarTitle: {
    paddingTop: 10,
    fontSize: 20,
  },
};

export default SimpleNavigator;
