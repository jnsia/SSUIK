import React, {useEffect} from 'react';
import {PermissionsAndroid, SafeAreaView, StyleSheet} from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import {NavigationContainer} from '@react-navigation/native';

import Route from './Route';

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

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </SafeAreaView>
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
