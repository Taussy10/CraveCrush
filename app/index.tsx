import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const onBoarding = () => {
  if (true) return  <Redirect href={"/home"}/>


  return (
    <View>

<Text className='  '>Clas</Text>
      <Text style={{ fontFamily: 'Poppins_700Bold' }}>Inter Black</Text>

    </View>
  )
}

export default onBoarding
