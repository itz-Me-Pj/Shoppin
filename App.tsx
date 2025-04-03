import { FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { musicIcon,languageIcon,classroomIcon,imageSearchIcon, ratanTataNews, gta6News, silentHillNews, moonIcon, moderateIcon, settingsIcon, incognitoIcon, profileIcon, historyIcon, passwordIcon, helpIcon, safeSearchIcon, interestsIcon } from './myAssets'
import Navigator from './src/Navigator'

export default function App() {
  const [accountModal,setAccountModal]=useState(false)
  return (
    <View style={{flex:1}}>
   <Navigator/>
   </View>
  )
}

const styles = StyleSheet.create({})