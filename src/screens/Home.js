import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';


const QRScanner = () => {
    const [scanned, setScanned] = useState(false);
  
    const handleScan = (event) => {
      if (event.data && !scanned) {
        setScanned(true);
        alert(`Scanned data: ${event.data}`);
      }
    };
  
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          onBarCodeRead={handleScan}
        />
        <QRCodeScanner
          onRead={handleScan}
          showMarker={true}
          markerStyle={styles.marker}
          bottomContent={
            <Text style={styles.instructions}>
              Scan the QR code to get started
            </Text>
          }
        />
      </View>
    );
  };
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    marker: {
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 10,
      height: 250,
      width: 250,
    },
    instructions: {
      marginTop: 20,
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
  });

  
  export default QRScanner;
