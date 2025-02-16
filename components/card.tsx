import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { restaurants } from '~/constants/data'
import  { FontAwesome} from "@expo/vector-icons"
const Card = () => {
  return (
  
 
    <View style={{elevation: 1}} className='  mr-5    bg-white w-2/3 rounded-2xl '>
        <Image source={restaurants[0].image} className='rounded-tr-2xl rounded-tl-2xl w-full h-48' />
        {/* Restaurants details */}
        <View className='  px-2 pb-6 pt-2' >
        <Text  className=' font-p-bold-700 text-xl pb-2' >Big Bite</Text>

        <View className='flex-row gap-2'>
        <FontAwesome name="star" size={20} color="#ffd700" />
        <Text className='  font-p-medium-500 text-gray-500 text-base'>Fast Food</Text>
        </View>
        <Text>123 main street</Text>
        </View>
    </View>
   


  )
}

export default Card