import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Entypo ,Ionicons} from '@expo/vector-icons/';
import { categories } from '~/constants/data';

const Home = () => {
  return (
    <SafeAreaView className=' flex-1 px-4 pt-6 '>








<FlatList 
data={categories}
horizontal

renderItem={({item}) => {
    console.log(item);
    
    return(
        <View className=' mt-5 ml-4  h-20 bg-orange-500'>
        <View className='  bg-green-500  size-14 p-2 border rounded-full  items-center justify-center flex-row'>
   <Image source={item.icon} 
     className=' size-12'
     />
</View>
<Text>{item.title}</Text>
</View>
    )
}} />

      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})