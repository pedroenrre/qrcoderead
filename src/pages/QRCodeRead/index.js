import React, {useState, useEffect, useRef} from 'react';
import {View, Text, BackHandler} from 'react-native';
import {Container, Content} from 'native-base';

//import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

import styles from './styles';

export default function Main({navigation}) {
  //const DESIRED_RATIO = '4:3';
  const cam = useRef('');
  const [cameraPermission, setCameraPermission] = useState(null);

  /**Customização do botão de voltar */
  function backAction() {
    navigation.navigate('Home');
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  /**Permisão da camera */
  useEffect(() => {
    async function seeCameraPermission() {
      const {status} = await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermission(status === 'granted');
    }
    seeCameraPermission();
  }, []);
  /** */
  // useEffect(() => {
  //   const prepareRatio = async () => {
  //     if (Platform.OS === 'android' && cam) {
  //       const ratios = await Camera.getSupportedRatiosAsync();

  //       // See if the current device has your desired ratio, otherwise get the maximum supported one
  //       // Usually the last element of "ratios" is the maximum supported ratio
  //       const ratio =
  //         ratios.find(ratio => ratio === DESIRED_RATIO) ||
  //         ratios[ratios.length - 1];

  //       //setState({ ratio });
  //       console.log(ratio);
  //       //console.log(cam.current.getSupportedRatiosAsync());
  //     }
  //   };
  //   prepareRatio();
  // }, []);

  if (cameraPermission === null) {
    return <View />;
  } else if (cameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <Container style={styles.Container}>
        <Content contentContainerStyle={styles.Content}>
          <BarCodeScanner
            ref={cam}
            style={{flex: 1}}
            onBarCodeScanned={barcode => {
              navigation.navigate('DataScreen', {
                data: barcode.data,
              });
            }}
          />
        </Content>
      </Container>
    );
  }
}
