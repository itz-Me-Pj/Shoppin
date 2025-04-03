import * as React from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, useSafeArea} from 'react-native-safe-area-context';
import HomeScreen from './HomeScreen';
import GoogleLens from './GoogleLens';
import SearchScreen from './SearchScreen';



const Tab = createBottomTabNavigator();

function CustomHeader(props: {children: string}) {
  const [logoutModal, setLogoutModal] = React.useState(false);
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        height: 70,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#1A9EE0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'flex-start',
        width: '110%',
        marginLeft: '-5%',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#1A9EE0'} />
      {/* <Image style={styles.image} source={require('./assets/truck.png')} /> */}
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
            color: '#FFFFFF',
          }}>
          {props.children === 'ConsignerBidding'
            ? 'Consignment Master'
            : props.children === 'ConsignerTracking'
            ? 'Consignment Master'
            : props.children === 'Profile'
            ? 'User Profile'
            : 'Transport Master'}
        </Text>
      </TouchableOpacity>
      {/* <SvgXml onPress={() => setLogoutModal(true)} xml={logOutIcon} /> */}
      <Modal visible={logoutModal} transparent>
        <SafeAreaView style={{flex: 1}}>
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
                height: '22%',
                backgroundColor: 'white',
                borderRadius: 5,
              }}>
              <View
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  borderColor: '#211F1F1A',
                }}>
                <View
                  style={{
                    width: '68%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                    marginHorizontal: '5%',
                    marginVertical: '2%',
                  }}>
                  {/* <SvgXml
                    onPress={() => setLogoutModal(false)}
                    xml={modalCloseIcon}
                  /> */}
                </View>
              </View>
              <ScrollView style={{width: '100%'}}>
                <View style={{width: '100%', alignSelf: 'center'}}>
                  <Text
                    style={[
                      {
                        fontFamily: 'Poppins-Medium',
                        color: '#211F1F',
                        fontSize: 16,
                        alignSelf: 'flex-start',
                        marginTop: '2%',
                      },
                      {marginTop: '5%', marginHorizontal: '5%'},
                    ]}>
                    {'Are you sure you want to logout?'}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignSelf: 'center',
                      width: '100%',
                    }}>
                      <TouchableOpacity
                      onPress={() => {setLogoutModal(false);navigation.navigate('Login')}}
                      style={[
                        {
                          width: '45%',
                          borderRadius: 5,
                          height: 60,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginVertical: 20,
                          backgroundColor: '#22C3A1',
                        }
                      ]}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16,
                          fontFamily: 'Poppins-SemiBold',
                          justifyContent: 'center',
                        }}>
                        {'Yes'}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setLogoutModal(false);
                      }}
                      style={[
                        {
                          width: '90%',
                          borderRadius: 5,
                          height: 60,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginVertical: 20,
                          backgroundColor: '#22C3A1',
                        },
                        {width: '45%', backgroundColor: '#F24054'},
                      ]}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16,
                          fontFamily: 'Poppins-SemiBold',
                          justifyContent: 'center',
                        }}>
                        {'No'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
      <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="GoogleLens"
          component={GoogleLens}
          options={{headerShown: false}}
        />
        
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Consigner"
          component={Consigner}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transporter"
          component={Transporter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeadEnd"
          component={DeadEnd}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    //ios
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8.3,
    //android
    elevation: 12,
  },
  image: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    tintColor: 'white',
  },
});
