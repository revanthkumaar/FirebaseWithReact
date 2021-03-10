import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'


export default function App(){

  const [user,setUser] = useState(null)



  return(

    <NavigationContainer>

    <Stack.Navigator>



    </Stack.Navigator>

    </NavigationContainer>

  )
}