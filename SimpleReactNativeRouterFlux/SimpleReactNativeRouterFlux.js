import React, {
  Component,
  View,
  Text
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Modal
} from 'react-native-router-flux';
import RFMain from './RFMain';
import RFNext from './RFNext';

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
        );
    }
}

class SimpleReactNativeRouterFlux extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
            <Scene key="tabs" tabs={true} >
              <Scene key="tab1" initial={true} title="Tab 1" icon={TabIcon} >
                <Scene title="Launch" key="main" component={RFMain} />
                <Scene title="Next 1" key="next1" component={RFNext} />
              </Scene>
              <Scene key="tab2" title="Tab 2" icon={TabIcon} >
                <Scene title="Next 2" key="next2" component={RFNext} />
              </Scene>
            </Scene>
      </Router>
    );
  }
}

export default SimpleReactNativeRouterFlux;
