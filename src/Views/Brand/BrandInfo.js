import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const BrandInfo = ({navigation: {navigate}, route}) => {
  const [favorite, setFavorite] = useState(false);

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
        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
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
        <View style={{marginTop: 80}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Text style={{...styles.text, flex: 1}}>광고주</Text>
            <Text style={{...styles.text, flex: 2, color: 'lightgray'}}>
              {route.params.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Text style={{...styles.text, flex: 1}}>광고이름</Text>
            <Text style={{...styles.text, flex: 2, color: 'lightgray'}}>
              {route.params.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Text style={{...styles.text, flex: 1}}>부착기간</Text>
            <Text style={{...styles.text, flex: 2, color: 'lightgray'}}>
              배송 후 {route.params.period}일 동안 부착
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Text style={{...styles.text, flex: 1}}>지역</Text>
            <Text style={{...styles.text, flex: 2, color: 'lightgray'}}>
              {route.params.location}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Text style={{...styles.text, flex: 1}}>적립 포인트</Text>
            <Text style={{...styles.text, flex: 2, color: '#FFC500'}}>
              {route.params.reward} POINT 적립
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <View style={{flex: 1}}>
              <Text style={{...styles.text, flex: 1}}>광고 설명</Text>
            </View>
            <Text style={{...styles.text, flex: 2, color: 'lightgray'}}>
              Bad Blue의 귀엽고 힙한 캐릭터를 나타낸 스티커를 차량에
              부착해주시면 서포터 분들께 포인트를 드립니다.
            </Text>
          </View>
        </View>
        {/* <View
          style={{backgroundColor: 'white', height: 500, marginTop: 80}}></View> */}
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
          onPress={() => (favorite ? setFavorite(false) : setFavorite(true))}>
          <EntypoIcon
            name="heart"
            color={favorite ? 'red' : 'gray'}
            size={30}
          />
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
    width: '40%',
    backgroundColor: '#FFC500',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});

export default BrandInfo;
