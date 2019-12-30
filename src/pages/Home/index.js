import React, {useEffect} from 'react';
import {Container, Content} from 'native-base';
import {Text, TouchableOpacity, BackHandler, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

// import { Container } from './styles';

export default function Home({navigation}) {
  useEffect(() => {
    function exitApp() {
      Alert.alert(
        'Sair',
        'Deseja sair do app?',
        [
          {text: 'Não', style: 'cancel'},
          {text: 'Sim', onPress: () => BackHandler.exitApp()},
        ],
        {cancelable: false}
      );
      return true;
    }

    BackHandler.addEventListener('hardwareBackPress', exitApp);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', exitApp);
    };
  }, []);
  return (
    <Container>
      <Content contentContainerStyle={styles.Content}>
        <Icon name="qrcode" size={150} color="#008" />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('QRCodeRead');
          }}>
          <Text style={styles.buttonText}>Escanear qr-code</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
}
