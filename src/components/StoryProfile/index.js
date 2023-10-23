import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'

const StoryProfileComponent = ({linearGradientHeight = 95,linearGradientWidth = 95,height = 90,width = 90}) => {
  return (
 <View style = {styles.storyListSubContainer}>
    <LinearGradient
      colors={["#FF2A46", "#FF9200", "#F20082"]}
      style={{...styles.profileLinearGradient,height:linearGradientHeight,width:linearGradientWidth}}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        }}
        style={{...styles.profilePhoto, height:height,width:width}}
      />
    </LinearGradient>
  </View>
  )
}

export default StoryProfileComponent

const styles = StyleSheet.create({
    profilePhoto: {
        height: 90,
        width: 90,
        borderRadius: 100,
      },
      profileLinearGradient: {
        width: 95,
        height: 95,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
      },
      storyListSubContainer:{
        margin:5,
      },
})