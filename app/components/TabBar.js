import React, {
  Component,
  View,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from "../Colors"

export default class TabBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.selectedTabIcons = []
    this.unselectedTabIcons = []
  }

  renderTabOption(name, page) {
    const isActive = (this.props.activeTab === page)
    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: (isActive ? Colors.pink : Colors.beige),
      }}>
        <Icon name={name} size={36} color={isActive ? Colors.beige : Colors.ice} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <View style={{
          backgroundColor: Colors.beige,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,0.05)',
        }}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
      </View>
    )
  }
}

TabBar.propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array,
}
