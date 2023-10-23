import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import StoryProfileComponent from '../StoryProfile';

const { width, height } = Dimensions.get("screen");

const PostComponent = () => {
  return (
    <View>
          <View style={styles.postHeaderContainer}>
            <View style={styles.postHeaderSubContainer}>
              <StoryProfileComponent
                linearGradientHeight={45}
                linearGradientWidth={45}
                height={40}
                width={40}
              />
              <Text style = {styles.userName}>Elon Musk</Text>
            </View>
            <Entypo name="dots-three-vertical" size={18} color="black" />
          </View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
            }}
            style={styles.postImage}
            resizeMode="contain"
          />

          <View style={styles.postIconContainer}>
            <View style={styles.postIconSubContainer}>
              <AntDesign name="hearto" size={28} color="black" />
              <Feather
                name="message-circle"
                size={28}
                color="black"
                style={styles.messageIcon}
              />
              <Feather name="send" size={28} color="black" />
            </View>
            <Feather name="bookmark" size={28} color="black" />
          </View>

          <View>
                <Text style = {styles.likesText}>1,02,304 Likes</Text>
                <View style = {styles.captionContainer}>
                    <Text style = {styles.userName}>Elon Musk</Text>
                    <Text style = {styles.captionText}>Sunny Day....</Text>
                </View>

               
                    <Text style = {styles.viewCommentsText}>View all 21 comments</Text>
                    <Text style = {styles.timeText}>12 hours ago</Text>
                
          </View>
        </View>
  )
}

export default PostComponent

const styles = StyleSheet.create({
    postHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        margin: 5,
      },
      postHeaderSubContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      postImage: {
        width: width,
        height: 400,
        backgroundColor: "black",
      },
      postIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
      },
      postIconSubContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      messageIcon: {
        marginHorizontal: 10,
      },
      captionContainer:{
        flexDirection:"row",
        margin:10
      },
      captionText:{
        marginLeft:3,
        fontFamily:"SegoiUI"
      },
      userName:{
        fontFamily:"SegoiUIBold"
      },
      likesText:{
        fontFamily:"SegoiUIBold",
        margin:10
      },
      viewCommentsText:{
        color:"gray",
        marginLeft:10,
        fontSize:14,
        fontFamily:"SegoiUI"
      },
      timeText:{
        color:"gray",
        margin:10,
        fontFamily:"SegoiUI"
      }
})