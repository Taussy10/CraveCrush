import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import { FontAwesome , EvilIcons , AntDesign } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

const Cart = () => {
  return (
    <SafeAreaView className=' flex-1 pt-36'>
      {/* Top navigtion and title  */}

<View className=' flex-row   gap-60'>
  <View className='  bg-primary rounded-full p-2 size-10 flex-row justify-center items-center'>
<Ionicons name="arrow-back-outline" size={24} color="white" />
  </View>

  <View className=' flex-col'>
    <Text>Your Cart</Text>
    <Text>Papa Johns</Text>
  </View>
</View>


{/* <View>
<Image source={require("../assets/images/restaurants/al-baik.jpg")} 
className='  size-12 rounded-full  '  />
<Text> Deliver in 20-30 minutes</Text>
</View> */}

{/* Items container */}
<TouchableOpacity 
activeOpacity={0.8}
style={{elevation: 1}} className=' mx-4  flex-row items-center  justify-between  rounded-2xl bg-white  px-2 py-5 '>


{/* subContainer: 1 for number of items , Image and name  */}
<View className=' flex-row items-center  gap-2'>
  <Text className='  text-primary text-base font-p-medium-500'>2 X</Text>
<Image source={require("../assets/images/restaurants/al-baik.jpg")} 
className='  size-14 rounded-full  '  />
<Text className='  font-p-medium-500  text-base'> Macroni Pasta</Text>
</View>


<View className=' flex-row items-center gap-2'>
  <Text>$3</Text>
<AntDesign name="minuscircle" size={24} color="orange" />
</View>

</TouchableOpacity>


      

{/* Order recipt and button */}
<View style={{position: 'absolute', bottom: 0}} className='  h-auto  w-full bg-orange-200  px-4 pb-2 pt-4  rounded-l-3xl   rounded-r-3xl' >

{/* Delivery fees container */}
<View className=' pb-6 pt-4 gap-2'>
  {/* subtotal  */}
  <View className=' flex-row justify-between'>
  <Text className=' text-base font-p-regular-400 text-gray-700'>Subtotal</Text>
  <Text className=' text-base font-p-regular-400 text-gray-700'>$ 16</Text>
  </View>
  
  {/* Delivery Fee  */}
  <View className=' flex-row justify-between'>
  <Text className=' text-base font-p-regular-400 text-gray-700'>Delivery Fee</Text>
  <Text className=' text-base font-p-regular-400 text-gray-700'>$ 2</Text>
  </View>

  {/* Order Total  */}
  <View className=' flex-row justify-between'>
  <Text className='  font-p-medium-500 text-xl '>Order Total</Text>
  <Text className='font-p-medium-500 text-xl'>$ 16</Text>
  </View>
  </View>

   {/* Button */}
   <TouchableOpacity 
   activeOpacity={0.8}
   className=' bg-primary p-5 rounded-3xl h-16 flex-row  items-center justify-center'>
  <Text className='  text-xl text-white  font-p-bold-700'>Place Order</Text>
  </TouchableOpacity>

</View>


    </SafeAreaView>
  )
}

export default Cart
