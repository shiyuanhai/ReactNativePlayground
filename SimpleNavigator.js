import React, {
  Component,
  View,
  Text,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  Modal
} from 'react-native';

class SimpleNavigator extends Component{
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      modalVisible: false,
      transparent: false,
    };
    this.renderScene = this.renderScene.bind(this);
  }
  openModal() {
    this.setState({modalVisible: true});
  }
  closeModal() {
    this.setState({modalVisible: false});
  }
  renderScene(route, nav) {
    switch(route.id) {
      case 'prev':
        return <View style={styles.container}><Text>Previous Scene</Text></View>;
      case 'next':
        return <View style={styles.container}><Text>Next Scene</Text></View>;
      default:
        return (
          <View style={styles.container}>
            <Modal
              animated={this.state.animated}
              visible={this.state.modalVisible}
              transparent={this.state.transparent}
              >
              <View style={styles.modalContainer}>
                <View style={styles.modalTopBar}>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor={'white'}
                  onPress={this.closeModal.bind(this)}>
                    <Text style={styles.btnText}>Close</Text>
                </TouchableHighlight>
                </View>
                <View style={styles.modalContentContainer}>
                  <Text>Modal Scene</Text>
                </View>
              </View>
            </Modal>
            <Text style={styles.firstSceneText}>First Scene</Text>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor={'white'}
              onPress={this.openModal.bind(this)}>
                <Text style={styles.btnText}>Open Modal</Text>
            </TouchableHighlight>
          </View>
        );
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
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  modalTopBar: {
    height: 40,
    marginTop: 30,
  },
  modalContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'blue',
  },
  firstSceneText: {
    marginBottom: 30,
  },
};

export default SimpleNavigator;
