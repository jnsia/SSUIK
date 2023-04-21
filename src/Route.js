import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Image} from 'react-native';
// import logoImage from './Images/ssuik-logo.png';

// function logo() {
//   return (
//     <Image
//       source={logoImage}
//       resizeMode="center"
//       style={{width: '100%'}}></Image>
//   );
// }

//Screens
import Login from './Views/auth/Login';
import Resister from './Views/auth/Resister';
import Permission from './Views/auth/Permission';
import AuthPhoto from './Views/auth/AuthPhoto';

import recruitBrand from './Views/Brand/recruitBrand';
import beforeBrand from './Views/Brand/beforeBrand';
import afterBrand from './Views/Brand/afterBrand';
import BrandInfo from './Views/Brand/BrandInfo';
import BrandApply from './Views/Brand/BrandApply';

import Event from './Views/Event/Event';

import Home from './Views/Home/Home';
import ResisterCarInfo from './Views/Home/ResisterCarInfo';
import AdsSlide from './Views/Home/AdsSlide';

import Point from './Views/Point/Point';
import PointInfo from './Views/Point/PointInfo';
import Refund from './Views/Point/Refund';
import Goods from './Views/Point/Goods';

import Mypage from './Views/Mypage/Mypage';
import UserInfo from './Views/Mypage/UserInfo';
import AdsCollection from './Views/Mypage/AdsCollection';
import PointUseHistory from './Views/Mypage/PointUseHistory';
import ServiceCenter from './Views/Mypage/ServiceCenter';
import Setting from './Views/Mypage/Setting';
import TermsAndPolicy from './Views/Mypage/TermsAndPolicy';
import SearchUserInfo from './Views/auth/SearchUserInfo';

const RouteStack = createStackNavigator();

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

const MainTab = createBottomTabNavigator();

const BrandTopTab = createMaterialTopTabNavigator();

const HomeStack = createStackNavigator();
const BrandStack = createStackNavigator();
const EventStack = createStackNavigator();
const PointStack = createStackNavigator();
const MypageStack = createStackNavigator();

/*
    Stack Navigator
        - Stack Screen (Login)
        - Stack Screen (Resister)

    Stack Navigator
        - Tab Navigator
            - Tab Screen (Brand)
            - Tab Screen (Event)
            - Tab Screen (Home)
            - Tab Screen (Point)
            - Tab Screen (Mypage)

*/

const AuthStackNavigator = () => {
  const [isLogin, setIsLogin] = useState(false);

  const getIsLogin = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@isLogin');

      if (jsonValue === null) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    } catch (e) {
      console.log('get error');
    }
  };

  useFocusEffect(() => {
    getIsLogin();
  });

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {isLogin ? (
        <AuthStack.Screen name="MainTab" component={MainTabNavigator} />
      ) : (
        <AuthStack.Screen name="LoginStack" component={LoginStackNavigator} />
      )}
    </AuthStack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator
      initialRouteName="Permission"
      screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Permission" component={Permission} />
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Resister" component={Resister} />
    </LoginStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'white',
      }}>
      <MainTab.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <MainTab.Screen
        name="PointScreen"
        component={PointStackNavigator}
        options={{
          tabBarLabel: '포인트',
          tabBarIcon: ({color, size}) => (
            <Icon name="credit" color={color} size={size} />
          ),
        }}
      />
      <MainTab.Screen
        name="Event"
        component={Event}
        options={{
          tabBarLabel: '이벤트',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      {/* <MainTab.Screen name="EventScreen" component={Event} /> */}
      <MainTab.Screen
        name="MypageScreen"
        component={MypageStackNavigator}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

const BrandStackNavigator = () => {
  return (
    <BrandStack.Navigator initialRouteName="Brand">
      <BrandStack.Screen
        name="Brand"
        component={BrandTopTabNavigator}
        options={{
          title: 'SSUIK',
          headerTitleStyle: {color: 'white', fontWeight: 'bold'},
          headerStyle: {
            backgroundColor: 'black',
            height: 65,
          },
          headerRight: () => (
            <Icon
              name="magnifying-glass"
              color={'white'}
              size={25}
              style={{marginRight: 20}}
            />
          ),
        }}
      />
      <BrandStack.Screen name="BrandInfo" component={BrandInfo} />
      <BrandStack.Screen name="BrandApply" component={BrandApply} />
    </BrandStack.Navigator>
  );
};

const BrandTopTabNavigator = () => {
  return (
    <BrandTopTab.Navigator
      initialRouteName="recruitBrand"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: '#FFD500',
        tabBarInactiveTintColor: 'grey',
        tabBarPressColor: '#FFD500',
        tabBarLabelStyle: {fontSize: 16, fontWeight: '700'},
        swipeEnabled: false,
        tabBarIndicatorStyle: {
          backgroundColor: '#FFD500',
          height: 3,
          borderRadius: 20,
        },
      }}>
      <BrandTopTab.Screen
        name="recruitBrand"
        component={recruitBrand}
        options={{
          title: '모집중',
        }}
      />
      <BrandTopTab.Screen
        name="beforeBrand"
        component={beforeBrand}
        options={{title: '모집 예정'}}
      />
      <BrandTopTab.Screen
        name="afterBrand"
        component={afterBrand}
        options={{title: '모집 마감'}}
      />
    </BrandTopTab.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'SSUIK',
          headerBackTitleVisible: false,
          // headerTitle: logo,
          headerStyle: {
            backgroundColor: 'black',
            height: 65,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: false,
          headerRight: () => (
            <Icon
              name="menu"
              color={'white'}
              size={25}
              style={{marginRight: 20}}
            />
          ),
        }}
      />
      <HomeStack.Screen name="ResisterCarInfo" component={ResisterCarInfo} />
      <HomeStack.Screen name="AdsSlide" component={AdsSlide} />
      <HomeStack.Screen
        options={{headerShown: false, headerLeft: false}}
        name="BrandStackNavigator"
        component={BrandStackNavigator}
      />
      <HomeStack.Screen
        options={{headerShown: true, title: '인증사진 등록'}}
        name="AuthPhoto"
        component={AuthPhoto}
      />
    </HomeStack.Navigator>
  );
};

const PointStackNavigator = () => {
  return (
    <PointStack.Navigator
      initialRouteName="Point"
      screenOptions={{headerLeft: false, title: '포인트'}}>
      <PointStack.Screen name="Point" component={Point} />
      <PointStack.Screen name="PointInfo" component={PointInfo} />
      <PointStack.Screen name="Refund" component={Refund} />
      <PointStack.Screen name="Goods" component={Goods} />
    </PointStack.Navigator>
  );
};

const MypageStackNavigator = () => {
  return (
    <MypageStack.Navigator
      initialRouteName="Mypage"
      screenOptions={{headerLeft: false, title: '마이페이지'}}>
      <MypageStack.Screen name="Mypage" component={Mypage} />
      <MypageStack.Screen name="UserInfo" component={UserInfo} />
      <MypageStack.Screen name="AdsCollection" component={AdsCollection} />
      <MypageStack.Screen name="PointUseHistory" component={PointUseHistory} />
      <MypageStack.Screen name="ServiceCenter" component={ServiceCenter} />
      <MypageStack.Screen name="Setting" component={Setting} />
      <MypageStack.Screen name="TermsAndPolicy" component={TermsAndPolicy} />
      <MypageStack.Screen
        name="Logout"
        component={AuthStackNavigator}
        options={{headerShown: false, headerLeft: false}}
      />
    </MypageStack.Navigator>
  );
};

const Route = () => {
  return (
    <RouteStack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <RouteStack.Screen name="Main" component={MainTabNavigator} />
      ) : (
        <RouteStack.Screen name="Auth" component={AuthStackNavigator} />
      )}
    </RouteStack.Navigator>
  );
};

export default Route;
