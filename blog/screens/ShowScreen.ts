import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

export default function ShowScreen({navigation,route}) {
const itemId=route.params.id
const {state}=useContext(Context)
const blogPost=state.find((blogPost)=>blogPost.id===itemId)
  
React.useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:itemId})}>
      <EvilIcons size={30} name="pencil" />
      </TouchableOpacity>
    ),
  });
}, [navigation]);

return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}



const styles = StyleSheet.create({})