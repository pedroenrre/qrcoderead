import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  Content: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008',
    width: 150,
    height: 150,
  },
  buttonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#008',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
