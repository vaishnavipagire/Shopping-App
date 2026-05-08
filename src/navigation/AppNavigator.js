import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import LoginScreen from '../screens/LoginScreen';

const stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name="LoginScreen" component={LoginScreen}
            options={{headerShown:false,
            headerTitleAlign:'center',
            }}
            />
          </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;