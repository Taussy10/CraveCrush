import { StyleSheet, Text, View, ScrollView , FlatList, Image, Pressable } from 'react-native'
import data from '../Data/Data'
import React from 'react'

const Cards = ({navigation}) => {
  return (
    <View>
      {/* cards className="bg-green-500" */}
      <ScrollView  >
       
            <FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
              //  bg-yellow-400 
             
         <View  className="  mx-2    rounded-3xl   bg-red-400   w-60  h-[260]  my-3      ">
           <Pressable onPress={()=> navigation.navigate("Restaurant")  }> 
          <Image   source={{uri: item.img }} className="    w-54 h-36   object-cover "  />
        <Text  className="font-bold text-2xl p-2">Hello</Text>
        <Text  className="  text-xl "> Fast food</Text>
        <Text  className=" text-xl ">Nearby</Text>
        </Pressable>
        {/* <View className="  bg-orange-400 w-[105] h-[105]  flex justify-center items-center"> */}
        {/* <Feather name="sliders" size={24} color="black" /> */}
        {/* TODO: Network images needs styles because they don't know how much height and width needed to give them  */}
        {/* <Image  source={{uri: item.img }} className="w-[105] h-[105]   object-cover "  /> */}
        {/* </View> */}
        {/* <Text>{item.name}</Text> */}
        </View>

            ) }
            />
     
    </ScrollView>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({})