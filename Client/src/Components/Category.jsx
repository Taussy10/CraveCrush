import { FlatList, ScrollView, StyleSheet, Text, View , Image, TouchableOpacityComponent, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import data from "../Data/Data"
import { themeColors } from '../Themes/Themes'



const Category = () => {
  const [activeCategory, setActiveCategory] = useState(null)
//   intialStae = null
  return (
    <ScrollView className="bg-green-500" >
       
            <FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => { 
       
              let isActive = item.id === activeCategory;
              let btnClass = isActive? ' bg-green-600': 'bg-orange-200'
              let textClass = isActive? 'font-semibold text-gray-800': 'text-gray-500'


              return (
        
         <View className="  mx-2   bg-yellow-400 w-[105]  items-center my-3 ">
          <TouchableOpacity onPress={ ()=> setActiveCategory(item.id) }> 
        <View  className= {` w-[105] h-[105] rounded-full flex justify-center items-center ${btnClass}`}>
        {/* <Feather name="sliders" size={24} color="black" /> */}
        <Image  source={{uri: item.img }} className= "w-[90] h-[90] rounded-full   object-cover "  />
        
        </View>
        </TouchableOpacity>

{/*  <Text className={`${textClass}`}> */}
        <Text className={ `${textClass} `} >{item.name}</Text>
        </View>
            )} }
            />
    </ScrollView>
            )
}

export default Category

const styles = StyleSheet.create({})