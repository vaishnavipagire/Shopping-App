import { View, Text, StyleSheet ,TextInput, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import User from 'react-native-vector-icons/FontAwesome5';
import Pwd from 'react-native-vector-icons/Fontisto';
import Eye from 'react-native-vector-icons/Feather';


const LoginScreen = () => {
   const navigation = useNavigation();
  return (
    <View style ={style.LoginContainer}>
      <Text style={style.weltxt}>Welcome{'\n'}Back!</Text>

    <View style={style.UserContainer}>
      <User name='user-alt' style={style.usericon} size={20}/>
       <TextInput
          style={style.UserText}
          placeholder="Username or Email"
            />
    </View>
    <View style={style.PwdContainer}>
      <Pwd  name='locked' style={style.Pwdicon} size={20}/>
       <TextInput
          style={style.PwdText}
          placeholder="Password"
            />
      <Eye name='eye' style={style.Eyeicon} size={20}/>
    </View>
    <Text style={style.ForgotpwdTxt}> Forgot Password? </Text>

    <View style={style.LoginBtnContainer}>
      <TouchableOpacity style={style.LoginBtnTxt}>
        <Text style={style.LoginText}> Login </Text>
      </TouchableOpacity>
    </View>
    <View style={style.Textcontainer} >
      <Text style={style.text}> - OR Continue with - </Text>
    </View>

      <View style={style.imagecontainer}>
     <Image 
      source={require('../assets/Google.png')}
    />
    <Image 
      source={require('../assets/Apple.png')}
    />
    <Image 
      source={require('../assets/Facebook.png')}
    />
    </View>

    <View style={style.TxtContainer}>
     <Text style={style.createTxt}>Create An Account</Text>
     <Text style={style.SignupTxt}>Sign Up</Text>
    </View>
    </View>
    
  )
}
export default LoginScreen
const style = StyleSheet.create({
  LoginContainer:{
    paddingTop:63,
    paddingHorizontal:32,
  },
  weltxt:{
    fontSize:36,
    fontWeight:'bold'
  },
  UserContainer:{
    paddingTop:36,
},
 usericon:{
    paddingTop:52,
    paddingLeft:11,
    position:'absolute',
    color:'#626262',
 },
  UserText:{
    borderWidth:1,
    paddingTop:21,
    paddingLeft:38,
    paddingBottom:19,
    paddingRight:162,
    borderRadius:10,
    borderColor:'#A8A8A9',
  },
  PwdContainer:{
    paddingTop:31,
  },
  Pwdicon:{
    paddingTop:48,
    paddingLeft:15,
    position:'absolute',
    color: '#626262',
  },
  PwdText:{
    paddingLeft:42,
    paddingTop:21,
    borderWidth:1,
    paddingBottom:19,
    borderRadius:10,
    paddingRight:216,
    borderColor:'#A8A8A9',
   },
   Eyeicon:{
    position:'absolute',
    paddingTop:49,
    paddingLeft:281,
    paddingRight:16,
    color:'#626262',
   },
   ForgotpwdTxt:{
    alignSelf:'flex-end',
    paddingTop:9,
    color:'#F83758',
   },
   LoginBtnContainer:{
     paddingTop:52,
   },
   LoginBtnTxt:{
    borderRadius:4,
     backgroundColor:'#F83758',
   },
   LoginText:{
    fontSize:20,
    color:'#FFFFFF',
    paddingLeft:129,
    paddingVertical:15,
   },
   Textcontainer:{
     paddingTop:75,
   },
   text:{
    paddingLeft:96,
    color:'#575757',
   },
   imagecontainer:{
    flexDirection:'row',
    gap:10,
    paddingTop:35,
    paddingLeft:66,
   },
   TxtContainer:{
     paddingTop:28,
     paddingLeft:63,
     gap:5,
     flexDirection:'row',
   },
   createTxt:{
    color:'#575757',
   },
   SignupTxt:{
    color:'#F83758',
    fontSize:14,
    textDecorationLine:'underline',
   }
  })