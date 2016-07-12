import React from 'react-native'
import Colors from "../Colors"
import Tip from "./Tip"
import Sentence from "./Sentence"
import Button from "./Button"

export default ShareTip = ({ title, callToAction, onPress }) => (
  <Tip>
    <Sentence style={{
      color: Colors.black,
      fontSize: 10,
      marginBottom: 10,
      textAlign: 'center',
      marginHorizontal: 40,
    }}>
      { title || 'Tá muito feliz e quer espalhar o amor? Conte pra todo mundo que o Tem Açúcar existe!' }
    </Sentence>
    <Button
      onPress={onPress}
      style={{
        paddingVertical: 0,
        height: 30,
        width: 220,
        backgroundColor: Colors.facebook,
        borderColor: Colors.facebook,
      }}
      textStyle={{
        color: Colors.white,
      }}
    >
      { callToAction || 'Compartilhe no Facebook' }
    </Button>
  </Tip>
)
