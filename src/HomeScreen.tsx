import { FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { musicIcon, languageIcon, classroomIcon, imageSearchIcon, ratanTataNews, gta6News, silentHillNews, moonIcon, moderateIcon, settingsIcon, incognitoIcon, profileIcon, historyIcon, passwordIcon, helpIcon, safeSearchIcon, interestsIcon } from '../myAssets'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const [accountModal, setAccountModal] = useState(false)
  const navigation = useNavigation<any>()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1f2125' }}>
      <View style={{ width: '100%', height: '40%', borderBottomWidth: 1, borderColor: '#474747' }}>
        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: '10%', width: '90%', alignSelf: 'center' }}>
          <Image
            source={require('../assets/labsIcon.png')}
            style={{ height: 24, width: 24, marginHorizontal: '3%' }}
          />
          <View style={{ width: '45%', backgroundColor: '#303434', borderRadius: 8, height: 50, flexDirection: 'row', padding: 6 }}>
            <View style={{ backgroundColor: '#1f2125', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '65%', borderRadius: 8 }}>
              <Image
                source={require('../assets/googleIcon.png')}
                style={{ height: 22, width: 22, marginRight: '5%' }}
              />
              <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'ProductSans' }}>Search</Text>
            </View>
            <Image
              source={require('../assets/geminiIcon.png')}
              style={{ height: 22, width: 22, alignSelf: 'center', marginHorizontal: 'auto' }}
            />
          </View>
          <TouchableOpacity onPress={() => { setAccountModal(true) }} style={{ backgroundColor: '#77919d', alignItems: 'center', justifyContent: 'center', height: 38, width: 38, borderRadius: 50, marginRight: 10 }}><Text style={{ color: '#fbfbfc', fontSize: 18 }}>{'P'}</Text></TouchableOpacity>
        </View>
        <Text style={{ fontSize: 40, fontFamily: 'ProductSans', color: '#fff', alignSelf: 'center', marginVertical: '8%', height: 60 }}>Google</Text>
        <View style={{ backgroundColor: '#303434', width: '90%', height: 60, borderRadius: 50, alignSelf: 'center', alignItems: 'center', paddingHorizontal: '4%', flexDirection: 'row' }}>
          <Image
            source={require('../assets/searchIcon.png')}
            style={{ height: 20, width: 20 }}
          />
          <TouchableOpacity style={{marginLeft: '4%', width: '64%'}} onPress={()=>{navigation.navigate('SearchScreen')}}>
          <Text style={{ fontSize: 20, color: '#9ba1a4', fontFamily: 'ProductSansRegular', }}>Search</Text></TouchableOpacity>
          <Image
            source={require('../assets/micIcon.png')}
            style={{ height: 24, width: 24, marginHorizontal: '4%' }}
          />
          <TouchableOpacity onPress={() => { navigation.navigate('GoogleLens') }}>
            <Image
              source={require('../assets/lensIcon.png')}
              style={{ height: 18, width: 18, marginHorizontal: '4%' }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: '4%' }}>
          {[{ image: imageSearchIcon, bg: '#4d4531' }, { image: languageIcon, bg: '#363f4e' }, { image: classroomIcon, bg: '#33423a' }, { image: musicIcon, bg: '#493034' }].map((item) => {
            return (
              <View style={{ width: '22%', height: 60, backgroundColor: item.bg, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={item.image}
                  style={[{ height: 20, width: 20, marginHorizontal: '4%' }, item.bg === '#493034' && { tintColor: '#f28c86' }]}
                />
              </View>)
          })}
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={[{ heading: 'Gurugram', description: '30°', icon: moonIcon, textSize: 18 }, { heading: 'Air Quality · 170', description: 'Moderate', icon: moderateIcon, textSize: 14 }, { heading: 'Setting', description: 'Security', icon: settingsIcon, textSize: 14 }]}
        horizontal
        style={{ padding: 12 }}
        contentContainerStyle={{ paddingRight: 12 }}  // Adjust to give extra space for the last item
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 75,
                width: 140,
                backgroundColor: 'transparent',
                justifyContent: 'space-between',
                padding: 8,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#474747',
                marginHorizontal: 4,
                marginBottom: '50%'  // Reduced margin for better spacing
              }}>
              <Text style={{ fontFamily: 'ProductSansRegular', color: '#fff', fontSize: 16 }}>
                {item.heading}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '50%' }}>
                <Text style={{ fontFamily: 'ProductSansRegular', color: '#fff', fontSize: item.textSize }}>
                  {item.description}
                </Text>
                <Image
                  source={item.icon}
                  style={{ height: 20, width: 20, marginHorizontal: 8 }}  // Adjust the icon margin for proper alignment
                />
              </View>
            </View>
          );
        }}
      />
      <FlatList
        data={[
          { image: ratanTataNews, description: "This superstar was Ratan Tata's closest friend, shared same room, went for picnics, listened songs together, and what not" },
          { image: gta6News, description: "Revolutionizing the gaming industry:Gta 6's bold marketing move could reshape the future of promotions" },
          { image: silentHillNews, description: "Silent Hill f's Story description indicates that the game might feature a choice based system" }
        ]}
        style={{ width: '90%', alignSelf: 'center', marginBottom: '5%' }}
        renderItem={({ item }) => {
          return (
            <View style={{ minHeight: 230, maxHeight: 300, marginTop: '2%' }}>
              <Image
                source={item.image}
                style={{ height: 200, width: '100%', borderRadius: 15 }}  // Adjust the icon margin for proper alignment
              />
              <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 20, color: 'white', marginTop: '2%' }}
                numberOfLines={3}>{item.description}</Text>
            </View>)
        }}
      />
      <Modal visible={accountModal} transparent>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#00000080' }}>
          <View
            style={{
              backgroundColor: '#00000080',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '90%',
                height: '85%',
                marginTop: '25%',
                backgroundColor: '#2e3034',
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: '60%',
                  height: '8%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginHorizontal: '2%',
                }}>
                <TouchableOpacity onPress={() => { setAccountModal(false) }}>
                  <Image
                    source={require('../assets/closeIcon.png')}
                    style={{ height: 25, width: 25, marginHorizontal: 8 }}  // Adjust the icon margin for proper alignment
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'ProductSansRegular',
                    fontSize: 25,
                    height: 30,
                    color: 'white',
                  }}>
                  {'Google'}
                </Text>
              </View>
              <View style={{ width: '100%', height: 100, alignSelf: 'center', paddingHorizontal: '5%', borderBottomWidth: 1, borderBottomColor: '#5d5f63' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ backgroundColor: '#77919d', alignItems: 'center', justifyContent: 'center', height: 38, width: 38, borderRadius: 50, marginRight: 10 }}><Text style={{ color: '#fbfbfc', fontSize: 18 }}>{'P'}</Text></View>
                  <View>
                    <Text style={{ fontFamily: 'ProductSans', fontSize: 20, color: 'white' }}>{'Pratyush'}</Text>
                    <Text style={{ fontFamily: 'ProductSans', fontSize: 18, color: 'white' }}>{'itzmepj60@gmail.com'}</Text>
                  </View>
                </View>
                <View style={{ height: 30, alignSelf: 'center', marginTop: '4%', justifyContent: 'center', borderRadius: 30, borderWidth: 1, borderColor: '#5d5f63' }}>
                  <Text style={{ fontFamily: 'ProductSans', fontSize: 14, color: 'white', paddingHorizontal: 20 }}>{'Manage Your Google Account'}</Text>
                </View>
              </View>
              <FlatList
                data={[
                  { icon: incognitoIcon, option: 'Turn on Incognito' },
                  { icon: historyIcon, option: 'Search History' },
                  { icon: safeSearchIcon, option: 'SafeSearch' },
                  { icon: interestsIcon, option: 'Interests' },
                  { icon: profileIcon, option: 'Your Profile' },
                  { icon: settingsIcon, option: 'Settings' },
                  { icon: passwordIcon, option: 'Passwords' },
                  { icon: helpIcon, option: 'Help And Feedback' },
                ]}
                style={{ width: '100%' }}
                renderItem={({ item }) => {
                  return (
                    <View style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center', paddingHorizontal: '8%', borderBottomWidth: 1, borderColor: '#5d5f63' }}>
                      <Image
                        source={item.icon}
                        style={{ height: 25, width: 25, marginRight: '10%' }}  // Adjust the icon margin for proper alignment
                      />
                      <Text style={{ fontFamily: 'ProductSans', color: 'white', fontSize: 16 }}>{item.option}</Text>
                    </View>)
                }}
              />
              <View style={{ height: 50, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderColor: '#5d5f63' }}>
                <Text style={{ fontFamily: 'ProductSansBold', color: 'white', fontSize: 14 }}>{'Privacy Policy · Terms of Service'}</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})