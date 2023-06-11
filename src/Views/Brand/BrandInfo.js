import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const BrandInfo = ({navigation: {navigate}, route}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{paddingHorizontal: 20, backgroundColor: 'black'}}>
        <View
          style={{
            marginVertical: 20,
          }}>
          <Image
            style={{
              width: SCREEN_WIDTH - 40,
              height: SCREEN_WIDTH - 40,
              resizeMode: 'contain',
              borderRadius: 10,
            }}
            source={require('../../Images/brandSample1.png')}
          />
        </View>
        <View style={{marginBottom: 40}}>
          <Text style={{...styles.text, fontSize: 18, fontWeight: 'bold'}}>
            {route.params.title}
          </Text>
          <Text
            style={{
              ...styles.text,
              color: '#FFC500',
            }}>
            {route.params.reward.toLocaleString('ko-KR')}Point/
            {route.params.period}일
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View
            style={{
              ...styles.infoBox,
            }}>
            <Text style={{...styles.text, fontSize: 12, color: '#FFC500'}}>
              {route.params.reward.toLocaleString('ko-KR')}POINT
            </Text>
          </View>
          <View
            style={{
              ...styles.infoBox,
            }}>
            <Text style={{...styles.text, fontSize: 12, color: '#FFC500'}}>
              배송 후 {route.params.period}일 부착
            </Text>
          </View>
          <View
            style={{
              ...styles.infoBox,
            }}>
            <Text style={{...styles.text, fontSize: 12, color: '#FFC500'}}>
              {route.params.location}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              ...styles.infoBox,
            }}>
            <Text style={{...styles.text, fontSize: 12}}>스트릿</Text>
          </View>
          <View
            style={{
              ...styles.infoBox,
            }}>
            <Text style={{...styles.text, fontSize: 12}}>패션</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: 'white', height: 500, marginTop: 80}}></View>
      </ScrollView>
      <View
        style={{
          backgroundColor: 'black',
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={() => navigate('BrandApply', route.params)}>
          <EntypoIcon name="heart" color={'red'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.adsApplyBtn}
          onPress={() => navigate('BrandApply', route.params)}>
          <Text
            style={{
              ...styles.text,
              color: 'black',
              fontSize: 18,
              textAlign: 'center',
            }}>
            스폰서 신청
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  text: {
    fontFamily: 'Pretendard-regular',
    color: 'white',
  },
  infoBox: {
    borderWidth: 0.5,
    borderColor: '#FFC500',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
  },
  adsApplyBtn: {
    backgroundColor: '#FFC500',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});

export default BrandInfo;
