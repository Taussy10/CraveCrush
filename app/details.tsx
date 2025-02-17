import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  { FontAwesome , EvilIcons , AntDesign} from "@expo/vector-icons"
import { router } from 'expo-router'

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
        <View className='   p-4 rounded-tl-3xl rounded-tr-3xl '>


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
activeOpacity={0.8}
onPress={()=>router.push("/cart")}
style={{ position: 'absolute', bottom: 20, left: 30,}}
className='   rounded-3xl flex-row items-center justify-between px-4 py-2  w-[300px] bg-orange-500'>

{/* For total items  */}
<View className=' p-2 bg-orange-300  rounded-3xl  size-10 items-center justify-center'>
    <Text className=' text-white font-p-medium-500 text-xl'>2</Text>
</View>

<Text className=' text-white  font-p-medium-500 text-base '>View Cart</Text>
<Text className='text-white font-p-medium-500 text-xl'>$32</Text>
</TouchableOpacity>

    </SafeAreaView>
  )
}

export default Details
