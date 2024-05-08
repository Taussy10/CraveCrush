import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Themes from '../Themes/Themes'
import Restaurant from '../Screens/Restaurant'
const stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
    <stack.Screen name='Home' component={Home}/>
    <stack.Screen name='Restaurant' component={Restaurant}/>
    {/* <stack.Screen name='Themes' component={Themes}/> */}
    </stack.Navigator>
  )
}

export default Routes

const styles = StyleSheet.create({})