import React, {useCallback, useEffect, useState} from 'react';
import {Alert, BackHandler, StyleSheet} from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import {
  NavigationContainer,
  useFocusEffect,
  useIsFocused,
} from '@react-navigation/native';

import {LoginStackNavigator, MainTabNavigator} from './Route';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const App = () => {
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
