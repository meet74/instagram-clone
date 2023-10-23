import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import { AntDesign, Fontisto, Entypo, Feather } from "@expo/vector-icons";
import StoryProfileComponent from "../../../components/StoryProfile";
import PostComponent from "../../../components/Post";

//Assets
const instagramImageText = require("../../../../assets/images/instagram-text.png");

const { width, height } = Dimensions.get("screen");

const HomeScreen = () => {
  const fadeAmin = useRef(new Animated.Value(1)).current;
  return (
    <SafeAreaView>
      <Animated.View style={{ opacity: fadeAmin }}>
        <View style={styles.headerSubContainer}>
          <View style={styles.imageConatainer}>
            <Image
              source={instagramImageText}
              style={styles.instagramImageTextStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.headerIconStyle}>
            <AntDesign name="hearto" size={24} color="black" />
            <Fontisto name="messenger" size={24} color="black" />
          </View>
        </View>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y > 0) {
            Animated.timing(fadeAmin, {
              toValue: 0,
              duration: 5,
              useNativeDriver: true,
            }).start();
          } else {
            Animated.timing(fadeAmin, {
              toValue: 1,
              duration: 10,
              useNativeDriver: true,
            }).start();
          }
        }}
      >
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.storyListContainer}>
                  {index === 0 ? (
                    <View style={styles.storyListSubContainer}>
                      <Image
                        style={styles.profilePhoto}
                        source={{
                          uri: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
                        }}
                      />
                      <View style={styles.plusIconContainer}>
                        <AntDesign
                          name="pluscircle"
                          size={24}
                          color="#2F8FEA"
                          style={styles.plusIcon}
                        />
                      </View>
                    </View>
                  ) : (
                    <StoryProfileComponent />
                  )}
                  <Text style = {styles.userName}>{index === 0 ? "My story" : "Elon"}</Text>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.line} />

        <PostComponent />
        <PostComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  instagramImageTextStyle: {
    height: 70,
    width: 120,
    marginLeft: 10,
  },
  headerIconStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
  headerContainer: {},
  imageConatainer: {
    flex: 2,
  },
  line: {
    width: width,
    borderColor: "lightgray",
    borderWidth: 0.5,
    marginTop: 15,
  },
  headerSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
  plusIcon: {
    alignSelf: "center",
  },
  plusIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  storyListSubContainer: {
    margin: 5,
  },
  storyListContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  userName:{
    fontFamily:"SegoiUI"
  }
});
