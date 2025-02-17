import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Entypo ,Ionicons} from '@expo/vector-icons/';
import { categories, restaurants } from '~/constants/data';
import Card from '~/components/home/card';
import SearchBar from '~/components/home/search-bar';



const Home = () => {
  return (
    <SafeAreaView className=' flex-1 px-4'>
      <StatusBar barStyle={"light-content"} />
      <FlatList 
      data={[1]}
      // may be it happens due to first one  should always be vertical
      ListHeaderComponent={
      <View>
      <SearchBar />
     <FlatList 
     data={categories}
     horizontal
    showsHorizontalScrollIndicator={false}
     renderItem={({item})=> {
      console.log(item);
      return(
        <View className=' flex-col gap-1 mb-6 '>
        <View className=' border  mr-3 p-1 rounded-full  '>
          <Image source={item.icon} className='   size-14' />
        </View>
          <Text className=' ml-2'>{item.title}</Text>
        </View>

      )
    }}
     />
      </View>}
      renderItem={({item})=> {
        console.log("Item from main render",item);
        return(
          // Container for card
          <View >
            {/* Header */}
            <View className=' mb-5 flex-row  items-center justify-between'>

{/* For left */}
<View className=' '>
<Text className='  font-p-extra-bold-800 text-xl'>Hot and Spicy</Text>
<Text className='  text-gray-500'>Local Fast food corner</Text>
</View>


{/* For right  */}
<View>
<Text className='  font-p-bold-700 text-primary text-base'>See All</Text>
</View>


            </View>

       <Card />

          </View>

        )
      }}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})