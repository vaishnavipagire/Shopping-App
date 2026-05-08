import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
   const navigation = useNavigation();
  return (
    <View style ={style.LoginContainer}>
      <Text styles={style.weltxt}>Welcome{'\n'} Back!</Text>
    </View>
  )
}

export default LoginScreen
const style = StyleSheet.create({
  LoginContainer:{
    // backgroundColor:'red',
    paddingTop:63,
    paddingLeft:32,
  },
  weltxt:{
      fontSize:36,
  },
})