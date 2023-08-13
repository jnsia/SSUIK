import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, SafeAreaView, StyleSheet} from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import {NavigationContainer} from '@react-navigation/native';

import {LoginStackNavigator, MainTabNavigator} from './Route';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const App = () => {
  // iOS 위치 정보 접근 권한
  // Geolocation.requestAuthorization('whenInUse');

  // Android 위치 정보 접근 권한
  // useEffect(() => {
  //   PermissionsAndroid.requestMultiple([
  //     PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //   ]);
  // }, []);

  // 사용자 현재 위치 정보 수집
  // Geolocation.getCurrentPosition(
  //   position => {
  //     console.log(position);
  //     alert(
  //       'Lastitude: ' +
  //         position.coords.latitude +
  //         '\n' +
  //         'Longitude: ' +
  //         position.coords.longitude,
  //     );
  //   },
  //   error => {
  //     // See error code charts below.
  //     console.log(error.code, error.message);
  //   },
  //   {
  //     enableHighAccuracy: true,
  //     timeout: 15000,
  //     maximumAge: 10000,
  //     accuracy: 'high',
  //   },
  // );

  const [isLogin, setIsLogin] = useState(false);

  const getIsLogin = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@isLogin');
      console.log(jsonValue);

      if (jsonValue === null) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    } catch (e) {
      console.log('get error');
    }
  };

  useEffect(() => {
    getIsLogin();
  }, [isLogin]);

  return (
    <NavigationContainer style={styles.container}>
      {isLogin ? (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name="MainTab" component={MainTabNavigator} />
        </AuthStack.Navigator>
      ) : (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name="LoginStack" component={LoginStackNavigator} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'BlackHanSans-Regular',
  },
});

export default App;
