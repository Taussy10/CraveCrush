import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { restaurants } from '~/constants/data'
import  { FontAwesome} from "@expo/vector-icons"
import { router } from 'expo-router'
const Card = () => {
  return (
  
 
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={()=> router.push("/details")}
    style={{elevation: 1}} className='  mr-5    bg-white w-2/3 rounded-2xl '>
        <Image source={restaurants[0].image} className='rounded-tr-2xl rounded-tl-2xl w-full h-48' />
        {/* Restaurants details */}
        <View className='  px-2 pb-6 pt-2' >
        <Text  className=' font-p-bold-700 text-xl pb-2' >Big Bite</Text>

        <View className='flex-row gap-2'>
        <FontAwesome name="star" size={20} color="#ffd700" />
        <Text className='  font-p-medium-500 text-g ray-500 text-base'>4 (4.6k review)</Text>
        </View>
        <Text className='  font-p-medium-500 text-g ray-500 text-base'>Fast Food</Text>
        <Text>123 main street</Text>
        </View>
    </TouchableOpacity>
   


  )
}

export default Card