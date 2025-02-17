import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {MaterialIcons , Entypo , EvilIcons} from '@expo/vector-icons';
import { useState } from 'react';

const SearchBar = () => {
const [value, SetValue] = useState("")

  return (
    // Firstly we need container then two subContainer
    // 1. for SearchBar 
    // 2.For filter
    <View className=' flex-row items-center  gap-5 pt-7  pb-7 '>


        {/* Container for searchbar */}
        {/* For filter we have 
        1. Icon , 2. Input , 3. icon , 4. location
        */}
        <View className=' flex-row items-center  gap-2 border  w-[272px] p-1
         rounded-2xl
        '>
        <Entypo name="magnifying-glass" size={24} color="black" />
         <TextInput
         placeholder='Restaurants'
        //  whatever the values it will show on input
         value={value}

        onChangeText={(text) => SetValue(text)}
        className='  w-28 '
        numberOfLines={1}
         />
<EvilIcons name="location" size={24} color="black" />
<Text>New York, US</Text>
        </View>


        {/* Container for filter */}
        <View className=' size-12 rounded-full bg-primary justify-center items-center'>
        <MaterialIcons name="filter-list" size={24} color="white" />
        </View>

    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})