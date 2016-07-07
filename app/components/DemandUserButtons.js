import React, { Component, Alert, View } from 'react-native'
import Colors from "../Colors"
import DemandButton from "./DemandButton"

export default class DemandUserButtons extends Component {
  handleComplete() {
    Alert.alert(
      'Concluir pedido?',
      'Você tem certeza que quer concluir este pedido?',
      [{ text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: () => {
        const { demand, onComplete } = this.props
        onComplete(demand)
      }}]
    )
  }

  handleCancel() {
    Alert.alert(
      'Cancelar pedido?',
      'Você tem certeza que quer cancelar este pedido?',
      [{ text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: () => {
        const { demand, onCancel } = this.props
        onCancel(demand)
      }}]
    )
  }

  handleReactivate() {
    Alert.alert(
      'Reativar pedido?',
      'Você tem certeza que quer reativar este pedido?',
      [{ text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: () => {
        const { demand, onReactivate } = this.props
        onReactivate(demand)
      }}]
    )
  }

  render() {
    const { demand, admin, onComplete, onCancel, onReactivate } = this.props
    const { state, completing, canceling, reactivating } = demand
    const canComplete = (onComplete && (state === 'notifying' || state === 'active'))
    const canCancel = (onCancel && (state === 'notifying' || state === 'active'  || (state === 'flagged' && admin)))
    const canReactivate = (onReactivate && (state === 'completed' || ((state === 'flagged' || state === 'canceled') && admin)))
    return (
      <View style={{
        alignSelf: 'stretch',
        padding: 10,
        paddingTop: 0,
      }}>
        <DemandState state={state} />
        <View style={{
          flexDirection: 'row',
        }}>
          { canComplete && <DemandButton
            onPress={this.handleComplete.bind(this)}
            isLoading={completing}
            style={{ marginTop: 10, backgroundColor: Colors.green }}
          >
            { admin ? 'Concluir pedido' : 'Já consegui' }
          </DemandButton> }
          { canCancel && <DemandButton
            onPress={this.handleCancel.bind(this)}
            isLoading={canceling}
            style={{ marginTop: 10, backgroundColor: Colors.beige, marginLeft: (canComplete ? 4 : 0), marginRight: (canReactivate ? 4 : 0) }}
          >
            Cancelar pedido
          </DemandButton> }
          { canReactivate && <DemandButton
            onPress={this.handleReactivate.bind(this)}
            isLoading={reactivating}
            style={{ marginTop: 10, backgroundColor: Colors.beige }}
          >
            Reativar pedido
          </DemandButton> }
        </View>
      </View>
    )
  }
}
