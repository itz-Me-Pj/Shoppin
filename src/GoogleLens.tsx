import { ActivityIndicator, Image, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { use, useEffect, useRef, useState } from 'react'
import { Camera, getCameraDevice, useCameraDevice, useCameraDevices } from 'react-native-vision-camera'
import { autoFlashIcon, classroomIcon, disableFlashIcon, enableFlashIcon, focusIcon, historyIcon, imageSearchIcon, languageIcon, threeDots } from '../myAssets';
import { useNavigation } from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob'

export default function GoogleLens() {
  const [flashtype,setFlashType]=useState('automatic')
  const [imagePath,setImagePath]=useState('')
  const [focusedType,setFocusedType]=useState('search')
  const [cameraPosition, setCameraPosition] = React.useState<'front' | 'back'>(
    'back',
  );
  const navigation=useNavigation<any>()
  const takePicture=async()=>{
    if(myCamera!=null){
    const photo=await myCamera.current.takePhoto()
    console.log(photo)
    setImagePath(photo.path)
    }
  }

const devices = useCameraDevices();
const device = devices[1];
const myCamera=useRef(null);

    useEffect(()=>{
        checkPermission()
        console.log(devices,'devices')
    },[])

    const updateFlash=()=>{
      if(flashtype==='automatic'){
        setFlashType('disable')
      }
      else if(flashtype==='disable'){
        setFlashType('enable')
      }
      else if(flashtype==='enable'){
        setFlashType('automatic')
      }
      else(setFlashType('enable'))
    }

     const saveImageFromPicker = async (imagePath: string) => {
      try {
        if (!imagePath) {
          throw new Error('Invalid image path');
        }
    
        const fileName = imagePath.split('/').pop(); // Get the file name from the path
        const fileExtension = fileName?.split('.').pop(); // Get the file extension (jpg, png, etc.)
        const destPath =
          Platform.OS === 'android'
            ? RNFetchBlob.fs.dirs.DownloadDir + `/image_${new Date().getTime()}.${fileExtension}`
            : RNFetchBlob.fs.dirs.DocumentDir + `/image_${new Date().getTime()}.${fileExtension}`;
    
        await RNFetchBlob.fs.copyFile(imagePath, destPath);
    
        Toast.show({
          type: 'success',
          text1: 'Image saved successfully!',
          visibilityTime: 2000,
        });
    
        FileViewer.open(destPath)
          .then(() => {
            console.log('Image opened successfully');
          })
          .catch((err) => {
            console.error('Error opening image:', err);
          });
      } catch (err) {
        Toast.show({
          type: 'error',
          text1: err.message ? JSON.stringify(err.message) : err,
          visibilityTime: 5000,
        });
        console.error('Error saving image:', err);
      }
    };
    

    const checkPermission=async()=>{
      const newCameraPermission=await Camera.requestCameraPermission()
      const newMicPermission=await Camera.requestMicrophonePermission()
      console.log(newCameraPermission)

    }
    if(device==null) return <ActivityIndicator/>

  return (
    <View style={{flex:1,backgroundColor:'#1f2125'}}>  
      <Camera
      ref={myCamera}
      style={{position:'absolute',width:'100%',height:'90%'}}
      device={device}
      isActive={true}
      photo
    />
    <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'8%',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}}><Image
              source={require('../assets/backIcon.png')}
              style={{height:35,width:35}}
              /></TouchableOpacity>
              <TouchableOpacity onPress={()=>{updateFlash()}}>
    {flashtype==='automatic'?<Image
              source={autoFlashIcon}
              style={{height:40,width:40}}
              />:flashtype==='disable'?<Image
              source={disableFlashIcon}
              style={{height:40,width:40}}
              />:<Image
              source={enableFlashIcon}
              style={{height:40,width:40}}
              />}
              </TouchableOpacity>
    </View>
    <Text style={{color:'white',fontFamily:'ProductSansBold',fontSize:25}}>Google <Text style={{fontFamily:'ProductSans'}}>Lens</Text></Text>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <TouchableOpacity><Image
              source={historyIcon}
              style={{height:25,width:25}}
              /></TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal:'5%'}} onPress={()=>{updateFlash()}}>
              <Image
              source={threeDots}
              style={{height:25,width:25}}
              />
              </TouchableOpacity>
    </View>
    </View>
    <Image 
    source={focusIcon}
    style={{width:'100%',height:'50%', alignSelf:'center',marginTop:'25%'}}/>
    <TouchableOpacity onPress={()=>{takePicture()}} style={{position:'absolute',bottom:'15%',width:60,height:60,borderWidth:1, borderColor:'white',alignItems:'center',alignSelf:'center',justifyContent:'center',borderRadius:30}}>
    <Image 
    source={require('../assets/searchIcon.png')}
    tintColor={'white'}
    style={{width:30,height:30,}}/>
    </TouchableOpacity>
    <View style={{position:'absolute',width:'100%',flexDirection:'row',justifyContent:'space-evenly',bottom:'4%'}}>
        <TouchableOpacity onPress={()=>{setFocusedType('translate')}} style={{width:'30%',borderWidth:1,borderRadius:30,borderColor:'#9bb4dc',flexDirection:'row',height:40,backgroundColor:focusedType==='translate'?'#394357':'transparent',alignItems:'center',justifyContent:'center'}}>
      <Image 
    source={languageIcon}
    tintColor={'#9bb4dc'}
    style={{width:18,height:18,marginRight:8}}/>
        <Text style={{color:'#9bb4dc',fontSize:16,fontFamily:'ProductSans'}}>{'Translate'}</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{setFocusedType('search')}} style={{width:'30%',borderWidth:1,borderRadius:30,borderColor:'#9bb4dc',flexDirection:'row',height:40,backgroundColor:focusedType==='search'?'#394357':'transparent',alignItems:'center',justifyContent:'center'}}>
      <Image 
    source={require('../assets/searchIcon.png')}
    tintColor={'#9bb4dc'}
    style={{width:18,height:18,marginRight:8}}/>
        <Text style={{color:'#9bb4dc',fontSize:16,fontFamily:'ProductSans'}}>{'Search'}</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setFocusedType('homework')}} style={{width:'30%',borderWidth:1,borderRadius:30,borderColor:'#9bb4dc',flexDirection:'row',height:40,backgroundColor:focusedType==='homework'?'#394357':'transparent',alignItems:'center',justifyContent:'center'}}>
      <Image 
    source={classroomIcon}
    tintColor={'#9bb4dc'}
    style={{width:18,height:18,marginRight:8}}/>
        <Text style={{color:'#9bb4dc',fontSize:16,fontFamily:'ProductSans'}}>{'Homework'}</Text></TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({})