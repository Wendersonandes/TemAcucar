import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'
import {reduxForm} from 'redux-form'

import StyleSheets from "../styles/StyleSheets"
import Label from "./Label"
import Button from "./Button"
import Link from "./Link"
import RequestPassword from "./RequestPassword"
import SignUp from "./SignUp"

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Preencha sua senha'
  } else if (values.password.length < 8) {
    errors.password = 'Senha muito curta'
  }
  if (!values.email) {
    errors.email = 'Preencha seu email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Preencha um email válido'
  }
  return errors
}

class SignInForm extends Component {
  handleRequestPassword() {
    this.props.navigator.push({
      title: 'Esqueceu sua senha?',
      component: RequestPassword,
      passProps: {
        onRequestPassword: this.props.onRequestPassword,
      },
    })
  }

  handleSignUp() {
    this.props.navigator.push({
      title: 'Crie sua conta',
      component: SignUp,
      passProps: {
        onSignIn: this.props.onSignIn,
        onSignUp: this.props.onSignUp,
        onSignOut: this.props.onSignOut,
        onRequestPassword: this.props.onRequestPassword,
      },
    })
  }

  render() {
    const { fields: { email, password }, dirty, valid, submitting, handleSubmit, onSignIn } = this.props
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>Faça seu login</Text>
        <View style={StyleSheets.stretch}>
          <Label field={email}>Email</Label>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholder={'Digite seu e-mail'}
            {...email}
          />
          <Label field={password}>Senha</Label>
          <TextInput
            style={StyleSheets.input}
            autoCapitalize={'none'}
            keyboardType={'default'}
            secureTextEntry={true}
            placeholder={'Digite sua senha'}
            {...password}
          />
        </View>
        <Button disabled={!dirty || !valid || submitting} viewStyle={[StyleSheets.flexEnd, StyleSheets.marginBottom]} onPress={handleSubmit(onSignIn)}>
          Fazer login
        </Button>
        <Link onPress={this.handleRequestPassword.bind(this)}>
          Esqueceu sua senha?
        </Link>
        <Link onPress={this.handleSignUp.bind(this)}>
          Não possui cadastro?
        </Link>
      </View>
    )
  }
}

SignInForm = reduxForm({
  form: 'signIn',
  fields: ['email', 'password'],
  validate,
})(SignInForm)

export default SignInForm