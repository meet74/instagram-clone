import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/home/Home";
import ExploreScreen from "../pages/home/Explore";
import ReelsScreen from "../pages/home/Reels";
import ProfileScreen from "../pages/home/Profile";
import {FontAwesome,Ionicons, Feather} from '@expo/vector-icons'

const Navigation = () => {
  const HomeNav = createNativeStackNavigator();
  const MainNav = createNativeStackNavigator();
  const BottomTabNav = createBottomTabNavigator();

  const HomeNavigation = () => {
    return (
      <BottomTabNav.Navigator screenOptions={{ headerShown: false, tabBarShowLabel:false }}>
        <BottomTabNav.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <Ionicons name="home" size={24} color="black" />
              } else {
                return <Ionicons name="home-outline" size={24} color="black" />
              }
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <BottomTabNav.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <Ionicons name="compass" size={24} color="black" />
              } else {
                return <Ionicons name="compass-outline" size={24} color="black" />
              }
            },
          }}
          name="Explore"
          component={ExploreScreen}
        />
        <BottomTabNav.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <FontAwesome name="video-camera" size={24} color="black" />
              } else {
                return <Feather name="video" size={24} color="black" />
              }
            },
          }}
          name="Reels"
          component={ReelsScreen}
        />
        <BottomTabNav.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <FontAwesome name="user-circle" size={24} color="black" />
              } else {
                return <FontAwesome name="user-circle-o" size={24} color="black" />
              }
            },
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </BottomTabNav.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <MainNav.Navigator screenOptions={{ headerShown: false }}>
        <MainNav.Screen name="Main" component={HomeNavigation} />
      </MainNav.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
