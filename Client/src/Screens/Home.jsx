import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Search from '../Components/Search'
import Category from '../Components/Category'
import Cards from '../Components/Cards'
import CardsTitle from '../Components/CardsTitle'
// import { getCategory } from '../../Api'
// import { getCategory } from '../../Sanity'
// import { SanityClient } from '../../Sanity'
import { client } from '../../Sanity'
// import { SanityClient } from  '../../Sanity'


const Home = ({navigation}) => {
const [category, setCategory] = useState([])
  // useEffect(() => {
  //   console.log(getCategory()); 
      // ()
  // }, [])


  useEffect(() => {
    client.fetch(`
    *[_type=='Category']
    `).then(data =>{
      setCategory(data)
    })
  }, [])
  // console.log(data);




  return (
    <SafeAreaView className=" m-2  p-2">
        <Search/>
       <Category/>        
       <CardsTitle />
       {/* If you are using component also pass navigation otherwise it won't work */}
       <Cards navigation={navigation}/>
      {/* <Text>Home</Text> */}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})