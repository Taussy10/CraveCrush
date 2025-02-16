import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const onBoarding = () => {
  if (true) return  <Redirect href={"/details"}/>


  return (
    <SafeAreaView>
  <Button title='Move' onPress={()=>router.push('/home')} />
<Text className='  '>Clas</Text>
      <Text style={{ fontFamily: 'Poppins_700Bold' }}>Inter Black</Text>

    </SafeAreaView>
  )
}

export default onBoarding
