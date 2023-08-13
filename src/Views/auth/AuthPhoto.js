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
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthPhoto = ({navigation}) => {
  const [sticker, setSticker] = useState('');
  const [backside, setBackside] = useState('');
  const [dashboard, setDashboard] = useState('');

  const [modal, setModal] = useState(false);

  let authPhotoInfo = {
    sticker: sticker,
    backside: backside,
    dashboard: dashboard,
  };

  const setAuthPhoto = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@authPhoto', jsonValue);

      console.log(jsonValue);

      setSticker('');
      setBackside('');
      setDashboard('');
      setModal(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: 'black',
        }}>
        <Text
          style={{
            ...styles.text,
            fontSize: 18,
          }}>
          광고 상품 정보
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <Image
            source={brandSample1}
            style={{flex: 1, width: 75, height: 75, resizeMode: 'contain'}}
          />
          <View
            style={{marginHorizontal: 20, justifyContent: 'center', flex: 2}}>
            <Text
              style={{
                ...styles.text,
                fontSize: 16,
              }}>
              Bad Blue
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  ...styles.text,
                }}>
                광고 소재
              </Text>
              <Text
                style={{
                  ...styles.text,
                  color: 'gray',
                }}>
                내지
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  ...styles.text,
                }}>
                포인트 혜택
              </Text>
              <Text
                style={{
                  ...styles.text,
                  color: 'gray',
                }}>
                25,000 POINT
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: 'black',
        }}>
        <View
          stlye={{
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              ...styles.text,
              fontSize: 18,
              paddingBottom: 5,
            }}>
            인증 사진 촬영
          </Text>
          <Text
            style={{
              ...styles.text,
              fontSize: 12,
            }}>
            각각 터치하여 촬영해주세요.
          </Text>
          <View style={{flex: 1, flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 160,
                borderRadius: 20,
                marginRight: 5,
              }}
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
              {sticker !== '' ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: sticker}}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                      borderRadius: 10,
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    height: 160,
                    padding: 15,
                    backgroundColor: '#444444',
                    borderRadius: 20,
                  }}>
                  <View style={{marginBottom: 10}}>
                    <Text
                      style={{
                        ...styles.text,
                        color: '#FFC500',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      01
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        fontWeight: 'bold',
                        fontSize: 16,
                      }}>
                      스티커 부착상태
                    </Text>
                  </View>
                  <Text
                    style={{
                      ...styles.text,
                      color: '#FFC500',
                      fontSize: 12,
                    }}>
                    스티커 전체가 보이도록
                  </Text>
                  <Text
                    style={{
                      ...styles.text,
                      color: '#FFC500',
                      fontSize: 12,
                    }}>
                    촬영해주세요.
                  </Text>
                  <View></View>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 160,
                borderRadius: 20,
                marginLeft: 5,
              }}
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
                setBackside('file://' + uriPath);
              }}>
              {backside !== '' ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: backside}}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                      borderRadius: 10,
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    height: 160,
                    padding: 15,
                    backgroundColor: '#444444',
                    borderRadius: 20,
                  }}>
                  <View style={{marginBottom: 10}}>
                    <Text
                      style={{
                        ...styles.text,
                        color: '#FFC500',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      02
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        fontWeight: 'bold',
                        fontSize: 16,
                      }}>
                      차량 후면
                    </Text>
                  </View>
                  <Text
                    style={{
                      ...styles.text,
                      color: '#FFC500',
                      fontSize: 12,
                    }}>
                    스티커와 번호판이 함께
                  </Text>
                  <Text
                    style={{
                      ...styles.text,
                      color: '#FFC500',
                      fontSize: 12,
                    }}>
                    보이도록 촬영해주세요.
                  </Text>
                  <View></View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View stlye={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 160,
            }}
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
            {dashboard !== '' ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: backside}}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                    borderRadius: 10,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  height: 160,
                  padding: 15,
                  backgroundColor: '#444444',
                  borderRadius: 20,
                }}>
                <View style={{marginBottom: 10}}>
                  <Text
                    style={{
                      ...styles.text,
                      color: '#FFC500',
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}>
                    03
                  </Text>
                  <Text
                    style={{
                      ...styles.text,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    차량 계기판
                  </Text>
                </View>
                <Text
                  style={{
                    ...styles.text,
                    color: '#FFC500',
                    fontSize: 12,
                  }}>
                  주행거리가 잘 보이도록
                </Text>
                <Text
                  style={{
                    ...styles.text,
                    color: '#FFC500',
                    fontSize: 12,
                  }}>
                  촬영해주세요.
                </Text>
                <View></View>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
          }}>
          {sticker !== '' && backside !== '' && dashboard !== '' ? (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 10,
                backgroundColor: '#FFC500',
              }}
              onPress={() => {
                setAuthPhoto(authPhotoInfo);
              }}>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 16,
                }}>
                업로드 하기
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 10,
                backgroundColor: 'gray',
              }}>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 16,
                }}>
                업로드 하기
              </Text>
            </View>
          )}
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
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  text: {
    fontFamily: 'Pretendard-Regular',
    color: 'white',
    fontSize: 14,
  },
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
