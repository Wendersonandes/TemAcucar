import React from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import SimpleScreen from "../components/SimpleScreen"

export default Loading = () => (
  <SimpleScreen>
    <GiftedSpinner style={{ marginVertical: 36 }} />
  </SimpleScreen>
)