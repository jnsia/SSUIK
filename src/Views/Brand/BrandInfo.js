import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const BrandInfo = ({navigation: {navigate}, route}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 20,
          margin: 20,
          resizeMode: 'contain',
        }}>
        <Image
          style={{
            width: '100%',
            height: 150,
            resizeMode: 'contain',
          }}
          source={require('../../Images/brandSample1.png')}
        />
      </TouchableOpacity>
      <View style={{marginHorizontal: 30}}>
        <View style={styles.adsInfo}>
          <Text style={styles.adsInfoTitle}>광고주 </Text>
          <Text style={styles.adsInfoText}>{route.params.title}</Text>
        </View>
        <View style={styles.adsInfo}>
          <Text style={styles.adsInfoTitle}>광고이름</Text>
          <Text style={styles.adsInfoText}>{route.params.title}</Text>
        </View>
        <View style={styles.adsInfo}>
          <Text style={styles.adsInfoTitle}>부착기간</Text>
          <Text style={styles.adsInfoText}>
            배송 후 {route.params.period}일
          </Text>
        </View>
        <View style={styles.adsInfo}>
          <Text style={styles.adsInfoTitle}>지역</Text>
          <Text style={styles.adsInfoText}>{route.params.location}</Text>
        </View>
        <View style={styles.adsInfo}>
          <Text style={styles.adsInfoTitle}>적립포인트</Text>
          <Text
            style={{
              flex: 1.5,
              fontSize: 16,
              color: 'coral',
              fontWeight: 'bold',
            }}>
            {route.params.reward.toLocaleString('ko-KR')} 포인트 적립
          </Text>
        </View>
        <View style={styles.adsInfo}>
          <Text style={styles.adsInfoTitle}>광고설명</Text>
          <Text style={styles.adsInfoText}>
            {route.params.description} || 광고 설명 테스트용 텍스트 그리고 위의
            예제들은 아래와 같이 Number 타입의 toLocaleString() 함수를 사용하는
            것이기 때문에, 문자열 타입 객체에 toLocaleString()를 호출해도 콤마가
            입력되지 않습니다.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.adsApplyBtn}
        onPress={() => navigate('BrandApply', route.params)}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>신청하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  adsInfo: {
    padding: 10,
    flexDirection: 'row',
  },
  adsInfoTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  adsInfoText: {
    flex: 1.5,
    fontSize: 16,
  },
  adsApplyBtn: {
    backgroundColor: '#FF9500',
    marginVertical: 20,
    marginHorizontal: 40,
    borderRadius: 10,
    padding: 5,
  },
});

export default BrandInfo;
