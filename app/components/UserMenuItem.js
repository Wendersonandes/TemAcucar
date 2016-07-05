import React, { View, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import Icon from "./Icon"

export default UserMenuItem = ({ onPress, style, icon, iconSet, iconStyle, children, type }) => (
  <TouchableOpacity onPress={onPress} style={[{
    alignSelf: 'stretch',
    padding: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center'
  }, style]}>
    <Icon name={icon} set={iconSet} style={[{ 
      fontSize: 24,
      color: (type == "light" ? Colors.white : Colors.white),
      marginRight: 10,
    }, iconStyle]} />
    <Sentence style={{
      fontSize: 16,
      color: (type == "light" ? Colors.white : Colors.white),
    }}>
      {children}
    </Sentence>
  </TouchableOpacity>
)
