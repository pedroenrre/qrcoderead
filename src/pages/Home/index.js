import React from 'react';
import {Container, Content} from 'native-base';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

// import { Container } from './styles';

export default function Home({navigation}) {
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
