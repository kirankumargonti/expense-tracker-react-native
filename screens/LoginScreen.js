import React, {useEffect, useLayoutEffect, useState} from 'react'
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native'
import {Input, Button, Image, Text} from 'react-native-elements'
import {StatusBar} from 'expo-status-bar'
import {auth} from '../firebase'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitLoading, setSubmitLoading] = useState(false)

  const signIn = () => {
    if (email && setEmail) {
      setSubmitLoading(true)
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => clearInputFields())
        .catch((error) => alert(error.message) & setSubmitLoading(false))
    } else {
      alert('All fields are mandatory')
      setSubmitLoading(false)
    }
  }
  const clearInputFields = () => {
    alert('Successfully Logged in')
    navigation.replace('Home')
    setSubmitLoading(false)
    setEmail('')
    setPassword('')
  }

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Home')
        setLoading(false)
      } else {
        setLoading(false)
      }
    })
    return unsubscribe
  }, [])
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Loading...',
    })
    if (!loading) {
      navigation.setOptions({
        title: 'Login',
      })
    }
  }, [navigation, loading])

  return (
    <>
      {!loading ? (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <StatusBar style='light' />
          <Image
            source={{
              uri:
                'https://static-s.aa-cdn.net/img/gp/20600011886807/to-aGJ31KLwqc9AWaBUyL6NLbpFwN9VEliX7nQ_AU48aO4jH6M1MltWKmThWJPndJg=s300?v=1',
            }}
            style={{width: 100, height: 100, marginBottom: 50}}
          />
          <View style={styles.inputContainer}>
            <Input
              type='email'
              placeholder='Email'
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              type='password'
              secureTextEntry
              placeholder='Password'
              value={password}
              onChangeText={(text) => setPassword(text)}
              onSubmitEditing={signIn}
            />
          </View>
          <Button
            loading={submitLoading}
            containerStyle={styles.button}
            title='Login'
            onPress={signIn}
          />
          <Button
            onPress={() => navigation.navigate('Register')}
            containerStyle={styles.button}
            title='Register'
            type='outline'
          />
          <View style={{height: 50}}></View>
        </KeyboardAvoidingView>
      ) : (
        <View style={styles.container}>
          <StatusBar style='light' />
          <Image
            source={{
              uri:
                'https://static-s.aa-cdn.net/img/gp/20600011886807/to-aGJ31KLwqc9AWaBUyL6NLbpFwN9VEliX7nQ_AU48aO4jH6M1MltWKmThWJPndJg=s300?v=1',
            }}
            style={{width: 100, height: 100, marginBottom: 50}}
          />
          <Text h4>Loading...</Text>
        </View>
      )}
    </>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 10,
  },
})
