import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const CollectionInfo = props => {
  return (
    <View style={styles.adsCollectionBox}>
      <Image
        style={styles.adsCollectionImage}
        source={require('../Images/brandSample1.png')}
      />
      <View style={styles.adsCollectionInfo}>
        <View>
          <View style={{paddingBottom: 15}}>
            <Text style={{...styles.text, color: '#FFC950'}}>
              0{props.index + 1}
            </Text>
            <Text style={styles.text}>{props.title}</Text>
          </View>
          <View>
            <Text style={{...styles.text, fontSize: 12}}>
              {props.startTime} ~ {props.endTime}
            </Text>
            <Text style={{...styles.text, fontSize: 12}}>
              {props.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              Point
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  text: {
    fontFamily: 'BlackHanSans-Regular',
    color: 'white',
    fontSize: 16,
  },
  collectionFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  adsCollectionBox: {
    flexDirection: 'row',
    backgroundColor: '#444444',
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adsCollectionImage: {
    flex: 4,
    height: 75,
    padding: 5,
    resizeMode: 'contain',
  },
  adsCollectionInfo: {
    flex: 5,
    paddingVertical: 20,
  },
});

export default CollectionInfo;
