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
  const [dataType, setDataType] = useState('');
  const data = navigation.getParam('data');

  function IsURL(string) {
    // var strRegex =
    //   '^((https|http|ftp|rtsp|mms)?://)' +
    //   "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + //ftp的user@
    //   '(([0-9]{1,3}.){3}[0-9]{1,3}' + // IP形式的URL- 199.194.52.184
    //   '|' + // 允许IP和DOMAIN（域名）
    //   "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
    //   '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' + // 二级域名
    //   '[a-z]{2,6})' + // first level domain- .com or .museum
    //   '(:[0-9]{1,4})?' + // 端口- :80
    //   '((/?)|' + // a slash isn't required if there is no file name
    //   "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    // var re = new RegExp(strRegex);
    // return re.test(string);

    // var res = string.match(
    //   /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    // );
    // return res !== null;

    var regexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return regexp.test(string);
  }

  useEffect(() => {
    function handleDataType() {
      if (IsURL(data)) {
        setDataType('URL');
      } else {
        const aux = data.substr(0, 4);
        if (aux === 'http') {
          setDataType('URL');
        } else {
          setDataType('Texto');
        }
      }
    }
    handleDataType();
  }, []);

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

  function renderButton() {
    if (dataType === 'URL') {
      return (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Linking.openURL(data);
          }}>
          <Text style={styles.buttonText}>Acessar site</Text>
        </TouchableOpacity>
      );
    } else if (dataType === 'Texto') {
      return (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Clipboard.setString(data);
          }}>
          <Text style={styles.buttonText}>Copiar texto</Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <Container style={styles.Container}>
      <Content contentContainerStyle={styles.Content}>
        <View style={styles.dataView}>
          <View style={styles.verticalView}>
            <Text style={styles.dataTypeStyle}>Tipo de dado: {dataType}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.dataText} selectable={true}>
              {data}
            </Text>
          </View>
        </View>

        {renderButton()}
      </Content>
    </Container>
  );
}
