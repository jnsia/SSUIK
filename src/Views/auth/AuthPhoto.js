import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import brandSample1 from '../../Images/brandSample1.png';

const AuthPhoto = ({navigation}) => {
  const [sticker, setSticker] = useState();
  const [dashboard, setDashboard] = useState();

  const [modal, setModal] = useState(false);

  return (
    <ScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Pretendard-Bold',
            color: 'black',
          }}>
          신청스폰서 정보
        </Text>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
          }}>
          <Image source={brandSample1} style={{width: 160, height: 80}} />
          <View style={{marginHorizontal: 20, justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Pretendard',
                fontWeight: 'bold',
              }}>
              광고소재(내지)
            </Text>
            <Text style={{fontFamily: 'Pretendard'}}>Covernat</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingVertical: 20,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Pretendard-Bold',
              fontSize: 20,
              color: 'black',
            }}>
            스티커 부착상태
          </Text>
          <TouchableOpacity
            style={styles.resisterImage}
            onPress={async () => {
              const result = await launchCamera({
                mediaType: 'photo',
                cameraType: 'back',
              });

              if (result.didCancel) {
                return null;
              }

              const localUri = result.assets[0].uri;
              const uriPath = localUri.split('//').pop();
              // const imageName = localUri.split('/').pop();
              setSticker('file://' + uriPath);
            }}>
            {sticker ? (
              <Image
                source={{uri: sticker}}
                style={{
                  width: 240,
                  height: 160,
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 120,
                }}>
                <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 14}}>
                  터치하여 촬영해주세요
                </Text>
                <Text
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: 12,
                    color: 'red',
                  }}>
                  스티커와 번호판이 함께 보이도록 촬영해주세요
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              fontFamily: 'Pretendard-Bold',
              fontSize: 20,
              color: 'black',
            }}>
            차량 계기판
          </Text>
          <TouchableOpacity
            style={styles.resisterImage}
            onPress={async () => {
              const result = await launchCamera({
                mediaType: 'photo',
                cameraType: 'back',
              });

              if (result.didCancel) {
                return null;
              }

              const localUri = result.assets[0].uri;
              const uriPath = localUri.split('//').pop();
              // const imageName = localUri.split('/').pop();
              setDashboard('file://' + uriPath);
            }}>
            {dashboard ? (
              <Image
                source={{uri: dashboard}}
                style={{width: 240, height: 160, resizeMode: 'contain'}}
              />
            ) : (
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 120,
                }}>
                <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 14}}>
                  터치하여 촬영해주세요
                </Text>
                <Text
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: 12,
                    color: 'red',
                  }}>
                  주행거리가 잘 보이도록 촬영해주세요
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 15,
                width: 200,
                borderRadius: 10,
                backgroundColor: 'black',
              }}
              onPress={() => {
                if (sticker) {
                  alert('스티커 부착상태 사진을 촬영해주세요.');
                  return;
                }

                if (dashboard) {
                  alert('차량 계기판 사진을 촬영해주세요.');
                  return;
                }

                setModal(true);
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'Pretendard-Bold',
                }}>
                업로드
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal visible={modal} transparent={true} animationType={'fade'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              width: 260,
              height: 280,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: 'Pretendard-Bold',
                  fontSize: 24,
                  color: 'black',
                }}>
                사진 업로드가
              </Text>
              <Text
                style={{
                  fontFamily: 'Pretendard-Bold',
                  fontSize: 24,
                  color: 'black',
                }}>
                완료되었습니다.
              </Text>
            </View>
            <View style={{marginTop: 20, alignItems: 'center'}}>
              <Text>사진 촬영이 잘못되었거나,</Text>
              <Text>검수에 부적합하다고 판단될 경우</Text>
              <Text>재촬영을 요청할 수 있습니다.</Text>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                width: 180,
                borderRadius: 10,
                backgroundColor: 'black',
              }}
              onPress={() => navigation.pop()}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Pretendard',
                }}>
                돌아가기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  resisterImage: {
    marginTop: 20,
    height: 160,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default AuthPhoto;
