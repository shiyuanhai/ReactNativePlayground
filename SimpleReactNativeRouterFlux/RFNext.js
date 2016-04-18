import React, {
  Component,
  View,
  Text
} from 'react-native';
import Button from "react-native-button";
import {Actions} from 'react-native-router-flux';

class RFNext extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View {...this.props} style={styles.container}>
        <Text>{this.props.title}</Text>
        <Button onPress={Actions.pop}>Back</Button>
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

export default RFNext;
