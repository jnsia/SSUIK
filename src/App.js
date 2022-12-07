import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Views/Home';
import Brand from './Views/Brand';
import My from './Views/My';
import Event from './Views/Event';

import Point from './Views/Point';
import PointInfo from './Views/PointInfo';
import Refund from './Views/Refund';
import Goods from './Views/Goods';

const PointStack = createStackNavigator();
const MyStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const BrandScreen = () => {
  return (
    <View style={{marginLeft: 20, marginRight: 20}}>
      <Brand />
    </View>
  );
};

const PointScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.pointView}>
        <View style={styles.pointBox}>
          <Text style={{fontSize: 24, marginBottom: 20}}>나의 씤 포인트</Text>
          <Text style={{fontSize: 24, textAlign: 'right'}}>???? 원</Text>
        </View>
        <TouchableOpacity
          style={styles.pointViewList}
          onPress={() => navigation.push('Refund')}>
          <Text>환급 신청하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pointViewList}
          onPress={() => navigation.push('Goods')}>
          <Text>상품 구매 및 교환</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RefundScreen = () => {
  return (
    <View>
      <Refund />
    </View>
  );
};

const GoodsScreen = () => {
  return (
    <View>
      <Goods />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Home />
    </View>
  );
};

const EventScreen = () => {
  return (
    <View>
      <Event />
    </View>
  );
};

const MyScreen = () => {
  return (
    <View>
      <My />
    </View>
  );
};

const PointStackNavigator = () => {
  return (
    <PointStack.Navigator initialRouteName="포인트 메안">
      <PointStack.Screen name="포인트 메인" component={PointScreen} />
      <PointStack.Screen name="포인트 정보" component={PointInfo} />
      <PointStack.Screen name="Refund" component={RefundScreen} />
      <PointStack.Screen name="상품 구매 및 교환" component={GoodsScreen} />
    </PointStack.Navigator>
  );
};

// const MyStackNavigator = () => {
//   return (
//     <MyStack.Navigator initialRouteName='마이페이지'>
//       <MyStack.Screen name="서포트 내역" component={}/>
//     </MyStack.Navigator>
//   )
// }

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="홈"
          screenOptions={{headerShown: false}}>
          <Tab.Screen name="브랜드" component={BrandScreen} />
          <Tab.Screen name="포인트" component={PointStackNavigator} />
          <Tab.Screen name="홈" component={HomeScreen} />
          <Tab.Screen name="이벤트" component={EventScreen} />
          <Tab.Screen name="마이페이지" component={MyScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  navIcon: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: '700',
  },

  // point
  pointView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 40,
  },
  pointBox: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 40,
  },
  pointViewList: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
  },
});

export default App;
