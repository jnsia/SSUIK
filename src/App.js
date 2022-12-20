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

import Route from './Route';

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
      <View style={styles.myInfo}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 20,
          }}
          source={require('../Images/my-img-test.png')}
        />
        <View style={styles.myInfoText}>
          <Text style={{marginBottom: 10, fontSize: 18, fontWeight: 'bold'}}>
            파란눈사람
          </Text>
          <Text style={{fontSize: 16}}>kia54682@gmail.com</Text>
        </View>
      </View>
      <View style={styles.myPageList}>
        <Text>서포트 내역</Text>
      </View>
      <View style={styles.myPageList}>
        <Text>포인트 사용 내역</Text>
      </View>
      <View style={styles.myPageList}>
        <Text>고객센터</Text>
      </View>
      <View style={styles.myPageList}>
        <Text>환경설정</Text>
      </View>
      <View style={styles.myPageList}>
        <Text>약관 및 정책</Text>
      </View>
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
        <Route />
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
