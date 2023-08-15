import React, {useEffect, useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Alert, BackHandler, Image, TouchableOpacity} from 'react-native';
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
import AuthPhoto from './Views/auth/AuthPhoto';

import recruitBrand from './Views/Brand/recruitBrand';
import BrandInfo from './Views/Brand/BrandInfo';
import BrandApply from './Views/Brand/BrandApply';
import AddAdress from './Views/Brand/AddAdress';

import Event from './Views/Event/Event';

import Home from './Views/Home/Home';
import ResisterCarInfo from './Views/Home/ResisterCarInfo';
import Notice from './Views/Home/Notice';

import Point from './Views/Point/Point';

import Mypage from './Views/Mypage/Mypage';
import UserInfo from './Views/Mypage/UserInfo';
import AdsCollection from './Views/Mypage/AdsCollection';
import ServiceCenter from './Views/Mypage/ServiceCenter';
import Inquire from './Views/Mypage/Inquire';
import Setting from './Views/Mypage/Setting';
import TermsAndPolicy from './Views/Mypage/TermsAndPolicy';
import SearchUserInfo from './Views/auth/SearchUserInfo';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

const MainTab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const BrandStack = createStackNavigator();
const EventStack = createStackNavigator();
const PointStack = createStackNavigator();
const MypageStack = createStackNavigator();

export const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen
        name="Resister"
        component={Resister}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTitle: '회원가입',
          headerTitleStyle: {fontSize: 16, color: 'white'},
          headerTintColor: 'white',
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <LoginStack.Screen
        name="SearchUserInfo"
        component={SearchUserInfo}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTitle: '이메일/비밀번호 찾기',
          headerTitleStyle: {fontSize: 16, color: 'white'},
          headerTintColor: 'white',
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <MainTab.Screen
        name="Home"
        component={MainTabNavigator}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color, size}) => (
            <EntypoIcon name="home" color={color} size={25} />
          ),
        }}
      />
    </LoginStack.Navigator>
  );
};

export const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
          borderWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarActiveTintColor: '#FFC500',
      }}>
      <MainTab.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color, size}) => (
            <EntypoIcon name="home" color={color} size={25} />
          ),
        }}
      />
      <MainTab.Screen
        name="PointScreen"
        component={PointStackNavigator}
        options={{
          tabBarLabel: '포인트',
          tabBarIcon: ({color, size}) => (
            <EntypoIcon name="credit" color={color} size={25} />
          ),
        }}
      />
      <MainTab.Screen
        name="EventScreen"
        component={EventStackNavigator}
        options={{
          tabBarLabel: '이벤트',
          tabBarIcon: ({color, size}) => (
            <EntypoIcon name="calendar" color={color} size={25} />
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
            <EntypoIcon name="user" color={color} size={25} />
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
        component={recruitBrand}
        options={{
          title: '브랜드',
          headerTitleStyle: {color: 'white'},
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />
      <BrandStack.Screen
        name="BrandInfo"
        component={BrandInfo}
        options={{
          headerShown: true,
          title: '브랜드 정보',
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'BlackHanSans-Regular',
          },
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />
      <BrandStack.Screen
        name="BrandApply"
        component={BrandApply}
        options={{
          headerShown: true,
          title: '브랜드 캠페인 신청',
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'BlackHanSans-Regular',
          },
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <BrandStack.Screen
        name="AddAdress"
        component={AddAdress}
        options={{
          headerShown: true,
          title: '배송지 추가',
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'BlackHanSans-Regular',
          },
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
    </BrandStack.Navigator>
  );
};

const EventStackNavigator = ({navigation}) => {
  return (
    <EventStack.Navigator initialRouteName="Event">
      <EventStack.Screen
        name="Event"
        component={Event}
        options={{
          title: 'EVENT',
          headerBackTitleVisible: false,
          headerLeft: false,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
        }}
      />
    </EventStack.Navigator>
  );
};

const HomeStackNavigator = ({navigation}) => {
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
            height: 75,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.push('Notice');
              }}>
              <EntypoIcon
                name="bell"
                color={'white'}
                size={25}
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="ResisterCarInfo"
        component={ResisterCarInfo}
        options={{
          headerShown: true,
          title: '차량 정보 등록',
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'BlackHanSans-Regular',
          },
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <HomeStack.Screen
        name="BrandStackNavigator"
        component={BrandStackNavigator}
        options={{
          headerShown: false,
          headerLeft: false,
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <HomeStack.Screen
        name="AuthPhoto"
        component={AuthPhoto}
        options={{
          title: '인증하기',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <HomeStack.Screen
        name="Notice"
        component={Notice}
        options={{
          headerShown: true,
          title: '알림',
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'BlackHanSans-Regular',
          },
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
    </HomeStack.Navigator>
  );
};

const PointStackNavigator = () => {
  return (
    <PointStack.Navigator
      initialRouteName="Point"
      screenOptions={{headerLeft: false, title: '포인트'}}>
      <PointStack.Screen
        name="Point"
        component={Point}
        options={{
          title: 'POINT',
          headerBackTitleVisible: false,
          // headerTitle: logo,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: false,
        }}
      />
    </PointStack.Navigator>
  );
};

const MypageStackNavigator = ({navigation}) => {
  return (
    <MypageStack.Navigator
      initialRouteName="Mypage"
      screenOptions={{title: '마이페이지'}}>
      <MypageStack.Screen
        name="Mypage"
        component={Mypage}
        options={{
          title: 'MY PAGE',
          headerBackTitleVisible: false,
          // headerTitle: logo,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: false,
        }}
      />
      <MypageStack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: '나의 정보 수정',
          headerBackTitleVisible: false,
          // headerTitle: logo,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <MypageStack.Screen
        name="AdsCollection"
        component={AdsCollection}
        options={{
          title: '나의 광고 컬렉션',
          headerBackTitleVisible: false,
          // headerTitle: logo,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <MypageStack.Screen
        name="ServiceCenter"
        component={ServiceCenter}
        options={{
          title: 'FAQ / 1:1 문의',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <MypageStack.Screen
        name="Inquire"
        component={Inquire}
        options={{
          title: '1:1 문의',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <MypageStack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '알림설정',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
      <MypageStack.Screen
        name="TermsAndPolicy"
        component={TermsAndPolicy}
        options={{
          title: '약관 및 정책',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: 'black',
            height: 75,
          },
          headerTintColor: 'white',
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}
      />
    </MypageStack.Navigator>
  );
};
