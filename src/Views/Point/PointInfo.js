import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const PointInfo = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: 'black',
          paddingVertical: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 36, fontWeight: '500'}}>
          32,005원
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            marginTop: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            적립 예정: 20,000원 ▶
          </Text>
        </TouchableOpacity>
      </View>
      {/* 캘린더 슬라이더? 찾기 */}
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>12월▼</Text>
        <Text style={{fontSize: 18}}>2022.12.01 ~ 12.31</Text>
      </View>
      {/* 버튼 포커스 방법 찾기 + useState */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingBottom: 10,
        }}>
        <TouchableOpacity style={styles.pointInfoBtn}>
          <Text style={styles.pointInfoBtnText}>전체</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pointInfoBtn}>
          <Text style={styles.pointInfoBtnText}>적립</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pointInfoBtn}>
          <Text style={styles.pointInfoBtnText}>환급</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.pointInfo}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>12.12</Text>
            <Text style={{fontSize: 14}}>15:55</Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FF9500'}}>
              페브리즈 광고
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'right',
                color: '#FF9500',
              }}>
              +30,000원
            </Text>
          </View>
        </View>
        <View style={styles.pointInfo}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>12.03</Text>
            <Text style={{fontSize: 14}}>11:30</Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              포인트 현금 환급
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', textAlign: 'right'}}>
              -50,000원
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  pointInfoBtn: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  pointInfoBtnText: {fontWeight: 'bold'},
  pointInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
  },
});

export default PointInfo;
