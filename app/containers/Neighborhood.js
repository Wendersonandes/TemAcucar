import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  MapView,
  SliderIOS,
  Image,
  ScrollView,
  TabBarIOS,
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"
import Button from "../components/Button"

export default class Neighborhood extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      delta: 0.02,
    }
  }

  handleSlide(value) {
    this.setState({delta: -value})
  }

  renderMap() {
    const { latitude, longitude } = this.props.currentUser
    const { delta } = this.state

    return (
      <MapView
        scrollEnabled={false}
        zoomEnabled={false}
        style={{
          height: 200,
          alignSelf: 'stretch',
        }}
        region={{
          latitude: parseFloat(latitude), 
          longitude: parseFloat(longitude),
          latitudeDelta: parseFloat(delta),
          longitudeDelta: parseFloat(delta),
        }}
        annotations={[{
          latitude: latitude,
          longitude: longitude,
          image: require('../img/icon.png'),
        }]}
      />
    )
  }

  render() {
    const { onSignOut } = this.props
    const { latitude, longitude } = this.props.currentUser
    const { delta } = this.state

    return (
      <View style={[StyleSheets.container, StyleSheets.noPadding]}>
        <Text>ABC</Text>
      </View>
    )
  }
}
              // { latitude && longitude && this.renderMap() }
              // <SliderIOS
              //   disabled={false}
              //   minimumValue={-0.05}
              //   maximumValue={-0.001}
              //   step={0.001}
              //   value={-delta}
              //   style={{

              //   }}
              //   onValueChange={this.handleSlide.bind(this)}
              // />
              // <Button onPress={onSignOut}>
              //   Logout
              // </Button>