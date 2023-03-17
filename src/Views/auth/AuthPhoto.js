import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

Camera.getCameraPermissionStatus();
// const microphonePermission = await Camera.getMicrophonePermissionStatus();
Camera.getAvailableCameraDevices();

const AuthPhoto = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  return <Camera style={styles.absoluteFill} device={device} />;
};

const styles = StyleSheet.create({
  absoluteFill: {
    backgroundColor: 'grey',
    padding: 200,
  },
});

export default AuthPhoto;
