import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Point = ({navigation: {navigate}, route}) => {
  return (
    <View>
      <View style={styles.pointView}>
        <View style={styles.pointBox}>
          <Text style={{fontSize: 20, marginBottom: 20, color: 'white'}}>
            나의 씤 포인트
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text style={{fontSize: 24, color: 'white'}}>????원</Text>
            <TouchableOpacity
              style={{paddingLeft: 10}}
              onPress={() => navigate('PointInfo')}>
              <Text style={{fontSize: 22, color: 'white'}}>▶</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.pointViewList}
          onPress={() => navigate('Refund')}>
          <Text>환급 신청하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pointViewList}
          onPress={() => navigate('Goods')}>
          <Text>상품 구매 및 교환</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pointView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 40,
  },
  pointBox: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 40,
    paddingVertical: 30,
  },
  pointViewList: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
  },
});

export default Point;
