import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'

export default function ShowScreen({navigation,route}) {
const itemId=route.params.id
const {state}=useContext(Context)
const blogPost=state.find((blogPost)=>blogPost.id===itemId)

return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})