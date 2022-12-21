import {View, Text} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import Login from './Views/auth/Login';
import Resister from './Views/auth/Resister';

import Brand from './Views/Brand/Brand';

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
import SupportHistory from './Views/Mypage/SupportHistory';
import PointUseHistory from './Views/Mypage/PointUseHistory';
import ServiceCenter from './Views/Mypage/ServiceCenter';
import Setting from './Views/Mypage/Setting';
import TermsAndPolicy from './Views/Mypage/TermsAndPolicy';

const RouteStack = createStackNavigator();

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const BrandStack = createStackNavigator();
const EventStack = createStackNavigator();
const HomeStack = createStackNavigator();
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

const isLoggedIn = true;

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Resister" component={Resister} />
    </AuthStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <MainTab.Screen name="BrandScreen" component={Brand} />
      <MainTab.Screen name="PointScreen" component={PointStackNavigator} />
      <MainTab.Screen name="HomeScreen" component={HomeStackNavigator} />
      <MainTab.Screen name="EventScreen" component={Event} />
      <MainTab.Screen name="MypageScreen" component={MypageStackNavigator} />
    </MainTab.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ResisterCarInfo" component={ResisterCarInfo} />
      <HomeStack.Screen name="AdsSlide" component={AdsSlide} />
    </HomeStack.Navigator>
  );
};

const PointStackNavigator = () => {
  return (
    <PointStack.Navigator initialRouteName="Point">
      <PointStack.Screen name="Point" component={Point} />
      <PointStack.Screen name="PointInfo" component={PointInfo} />
      <PointStack.Screen name="Refund" component={Refund} />
      <PointStack.Screen name="Goods" component={Goods} />
    </PointStack.Navigator>
  );
};

const MypageStackNavigator = () => {
  return (
    <MypageStack.Navigator initialRouteName="Mypage">
      <MypageStack.Screen name="Mypage" component={Mypage} />
      <MypageStack.Screen name="UserInfo" component={UserInfo} />
      <MypageStack.Screen name="SupportHistory" component={SupportHistory} />
      <MypageStack.Screen name="PointUseHistory" component={PointUseHistory} />
      <MypageStack.Screen name="ServiceCenter" component={ServiceCenter} />
      <MypageStack.Screen name="Setting" component={Setting} />
      <MypageStack.Screen name="TermsAndPolicy" component={TermsAndPolicy} />
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
