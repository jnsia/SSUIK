import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import Login from './Views/auth/Login';
import Resister from './Views/auth/Resister';
import Permission from './Views/auth/Permission';

import Brand from './Views/Brand/Brand';
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

const RouteStack = createStackNavigator();

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

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

const isPermission = false;
const isLoggedIn = false;

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {isPermission ? (
        <AuthStack.Screen name="LoginStack" component={LoginStackNavigator} />
      ) : (
        <AuthStack.Screen name="Permission" component={Permission} />
      )}
    </AuthStack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Resister" component={Resister} />
      <AuthStack.Screen name="Main" component={MainTabNavigator} />
    </LoginStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <MainTab.Screen name="BrandScreen" component={BrandStackNavigator} />
      <MainTab.Screen name="PointScreen" component={PointStackNavigator} />
      <MainTab.Screen name="HomeScreen" component={HomeStackNavigator} />
      <MainTab.Screen name="EventScreen" component={Event} />
      <MainTab.Screen name="MypageScreen" component={MypageStackNavigator} />
    </MainTab.Navigator>
  );
};

const BrandStackNavigator = () => {
  return (
    <BrandStack.Navigator initialRouteName="Brand">
      <BrandStack.Screen name="Brand" component={Brand} />
      <BrandStack.Screen name="BrandInfo" component={BrandInfo} />
      <BrandStack.Screen name="BrandApply" component={BrandApply} />
    </BrandStack.Navigator>
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
      <MypageStack.Screen name="AdsCollection" component={AdsCollection} />
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
