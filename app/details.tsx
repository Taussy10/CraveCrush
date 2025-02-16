import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  { FontAwesome , EvilIcons , AntDesign} from "@expo/vector-icons"

const Details = () => {
  return (
    <SafeAreaView className=' flex-1'>
        {/* For Background Image and header */}
        <View className='   bg-red-500 '>
            <ImageBackground source={require("../assets/images/restaurants/al-baik.jpg")}
            className=' w-full  h-72'
            >
        
        </ImageBackground>
        </View>

        {/* For Food items and details */}
        <View style={{elevation: 1}} className='   p-4 rounded-tl-3xl rounded-tr-3xl '>


            {/* Restaurants Detail */}
          <View className=' pb-10'>
            <Text className=' font-p-bold-700 text-2xl mb-2'>Papa Johns</Text>

            {/* Features all in row */}
            <View className=' mb-2 flex-row '>

                {/* Stars and review */}
                <View className='flex-row gap-2  mr-2'>
        <FontAwesome name="star" size={20} color="#ffd700" />
        <Text className='  font-p-medium-500 text-g ray-500 text-base'>4 (4.6k review)</Text>
        </View>

        {/* Type */}
        <Text className='  font-p-regular-400'>Fast Food</Text>

 {/* location icon and addres */}
 <View className='flex-row gap-2'>
 <EvilIcons name="location" size={24} color="black" />
         <Text  className='  font-p-medium-500 text-g ray-500 text-base'>123 Main street</Text>
        </View>
            </View>

            <Text className=' text-gray-600 font-p-regular-400 text-base'> All Kind of Fast Food Available</Text>
          </View>

      <Text className=' pb-3 font-p-bold-700 text-2xl'> Menu</Text>

      {/* Items container */}
      <TouchableOpacity 
      activeOpacity={0.8}
      style={{elevation: 1}} className='   rounded-2xl bg-white pb-4  pl-1 pt-2 flex-row items-center  gap-2'>
        {/* Image */}
        <View>
      <Image source={require("../assets/images/restaurants/al-baik.jpg")} 
      className=' h-24 w-20 rounded-2xl '  />
        </View>

{/* Details */}
<View className=' gap-4    w-[270px]  '>
{/* Names */}
<View className=''>
<Text className='  font-p-bold-700 text-xl'> Macroni Pasta</Text>
<Text className='  text-xs text-gray-700'> Spicy Itailian Pasta</Text>
</View>

{/* Price and increasea & decrease */}
<View className=' flex-row items-center     justify-between w-72'>
    <Text className=' font-p-medium-500 text-xl'>$6</Text>
    {/* increase and decrease */}
    <View className=' flex-row p-1   gap-2 items-center'>
    <AntDesign name="pluscircle" size={24} color="orange" />
     <Text>0</Text>
    <AntDesign name="minuscircle" size={24} color="orange" />
    </View>
</View>

</View>

      </TouchableOpacity>
    
        </View>

{/*  */}
<TouchableOpacity  
style={{ position: 'sticky', top: 0,}}
className='   rounded-2xl flex-row items-center justify-between p-4   w-44 bg-orange-500'>
{/* For total items  */}
<View className=' bg-green-500 rounded-full'>
    <Text>2</Text>

</View>
<Text className=' text-white font-p-regular-400 '>View Cart</Text>
<Text>$32</Text>
</TouchableOpacity>

    </SafeAreaView>
  )
}

export default Details
