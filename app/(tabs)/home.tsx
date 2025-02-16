import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Entypo ,Ionicons} from '@expo/vector-icons/';
import { categories } from '~/constants/data';



const Home = () => {
  return (
    <SafeAreaView className=' flex-1 px-4'>
      <Text>Home</Text>
      <FlatList 
      data={[1]}
      // may be it happens due to first one  should always be vertical
      ListHeaderComponent={
      <View>
     <FlatList 
     data={categories}
     horizontal
     renderItem={({item})=> {
      console.log(item);
      return(
        <View>
          <Image source={item.icon} className=' size-20' />
          <Text>{item.title}</Text>
        </View>

      )
    }}
     />
      </View>}
      renderItem={({item})=> {
        console.log("Item from main render",item);
        return(
          <View>
            <Text>Hello</Text>
          </View>

        )
      }}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})