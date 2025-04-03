import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { historyIcon } from '../myAssets'

export default function SearchScreen() {
    const [searchText, setSearchText] = useState('')
    const navigation = useNavigation<any>()

    const [history, setHistory] = useState<any>([])

    const addHistory = () => {
        setHistory([...history, { id: (history.length + 1), text: searchText }])
        setSearchText('')
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#1f2125' }}>
            <View style={{ backgroundColor: '#303434', width: '90%', height: 60, borderRadius: 50, alignSelf: 'center', alignItems: 'center', paddingHorizontal: '4%', flexDirection: 'row', marginTop: '8%' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}><Image
                    source={require('../assets/backIcon.png')}
                    style={{ height: 30, width: 30 }}
                /></TouchableOpacity>
                {/* <Text style={{fontSize:20,color:'#9ba1a4',fontFamily:'ProductSansRegular',marginLeft:'4%',width:'64%'}}>Search</Text> */}
                <TextInput
                    onChangeText={setSearchText}
                    placeholder='Search'
                    placeholderTextColor={'#9ba1a4'}
                    onSubmitEditing={() => { addHistory() }}
                    style={{ fontSize: 18, color: '#9ba1a4', marginLeft: '2%', width: '62%' }}
                    value={searchText}
                />
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
                <Text style={{ fontFamily: 'ProductSans', fontSize: 16, color: '#9ba1a4' }}>{"Recent Searches"}</Text>
                <Text style={{ fontFamily: 'ProductSans', fontSize: 16, color: '#9ba1a4' }}>{"Manage History"}</Text>
            </View>
            <FlatList
                data={history}
                style={{ width: '90%', alignSelf: 'center', marginTop: '5%' }}
                keyExtractor={(item) => { return item.id }}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#303434', alignItems: 'center', justifyContent: 'center', height: 38, width: 38, borderRadius: 50, marginRight: 10 }}>
                                <Image
                                    source={historyIcon}
                                    tintColor={'#9ba1a4'}
                                    style={{ height: 18, width: 18, marginHorizontal: '4%' }}
                                />
                            </View>
                            <Text style={{ fontFamily: 'ProductSans', fontSize: 16, color: '#9ba1a4' }}>{item.text}</Text>

                        </View>
                    )
                }}
                ListEmptyComponent={() => {
                    return (<View style={{ alignSelf: 'center', marginTop: '10%' }}>
                        <Text style={{ fontFamily: 'ProductSans', fontSize: 18, color: '#9ba1a4' }}>{'No History Available'}</Text>
                    </View>)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})