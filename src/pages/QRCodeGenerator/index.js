import React, {useEffect, useState} from 'react';
import {Container, Content} from 'native-base';
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Linking,
  Clipboard,
} from 'react-native';

import styles from './styles';

export default function DataScreen({navigation}) {
  /**Customização do botão de voltar */

  useEffect(() => {
    function backAction() {
      navigation.navigate('Home');
      return true;
    }

    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  return (
    <Container style={styles.Container}>
      <Content contentContainerStyle={styles.Content}>
        <View style={styles.dataView}>
          <View style={styles.verticalView}>
            <Text style={styles.dataTypeStyle}>Tipo de dado:</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.dataText} selectable={true}></Text>
          </View>
        </View>
      </Content>
    </Container>
  );
}
