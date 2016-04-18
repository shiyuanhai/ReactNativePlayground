import React, {
  Component,
  View,
  Text,
  Modal
} from 'react-native';
import Button from "react-native-button";
import {Actions} from 'react-native-router-flux';

class RFMain extends Component{
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
    };
    this._setModalVisible = this._setModalVisible.bind(this);
    this._setModalInvisible = this._setModalInvisible.bind(this);
  }
  _setModalVisible() {
    this.setState({modalVisible: true});
  }
  _setModalInvisible() {
    this.setState({modalVisible: false});
  }
  render() {
    return (
      <View {...this.props} style={styles.container}>
        <Modal
          visible={this.state.modalVisible}
          >
          <View style={styles.container}>
            <Text>Modal</Text>
            <Button onPress={this._setModalInvisible}>Hide modal</Button>
          </View>
        </Modal>
        <Text>Main Scene</Text>
        <Button onPress={Actions.next1}>Next Scene</Button>
        <Button onPress={this._setModalVisible}>Show modal</Button>
      </View>
    );
  }
}

const styles = {
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
  },
};

export default RFMain;
