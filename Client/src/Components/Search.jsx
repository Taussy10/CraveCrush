import { StyleSheet, Text, TextInput, View , StatusBar} from 'react-native'
import React from 'react'
// import { responsiveWidth } from 'react-native-responsive-dimensions'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { themeColors } from '../Themes/Themes';
const Search = () => {
  return (
    //TODO: space-x-2 what is it
    <View className="   items-center flex-row justify-center gap-2 space-x-2   ">
        {/*TODO: Learn it what is it */}
        <StatusBar barstyle="dark-content" />
        <View className=" text-white rounded-lg  bg-yellow-300  p-4  w-[300] h-14  flex-row space-x-2   items-center ">
        <FontAwesome name="search" size={24} color="black" />
       <TextInput 
        placeholder='Restaurants'
        
        />
        <View className="h-8  w-[4]  bg-gray-200">
            {/* <Text>Hello</Text> */}
        </View>
        <Entypo name="location-pin" size={24} color="black" />
        <Text>New York, NYC</Text>

        </View>
        
        <View className="w-10 h-10 rounded-full flex justify-center items-center" style={{ backgroundColor: themeColors.text}}>
        <Feather name="sliders" size={24} color="black" />
        </View>
      {/* <Text style={{backgroundColor:themeColors.text}}>Search</Text> */}
    </View>
  )
}

export default Search

