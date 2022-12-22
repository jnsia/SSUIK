import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const BrandItem = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={{
          padding: 5,
          width: '20%',
          height: '100%',
          resizeMode: 'contain',
        }}
        source={require('../Images/brand-img-test.png')}
      />
      <View style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
        <View style={styles.brandInfo}>
          <Text style={[styles.title]}>{props.name || 'SSUIK'}</Text>
          <Text style={[styles.title]}>({props.volume || '19/98'})</Text>
        </View>
        <View style={styles.brandInfo}>
          <Text style={[styles.text]}>{props.location || '대구'}</Text>
          <Text style={[styles.text]}>{props.target || '택시'}</Text>
          <Text style={[styles.text]}>{props.time || '2022.07.12'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  brandInfo: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  text: {
    marginRight: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default BrandItem;
