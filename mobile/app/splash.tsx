import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'
import { StatusBar } from 'expo-status-bar'

const Splash = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Splash