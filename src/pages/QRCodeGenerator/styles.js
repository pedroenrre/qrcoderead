import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  dataView: {
    width: wp('90%'),
    height: wp('90%'),
    backgroundColor: '#008',
    //justifyContent: 'center',
    borderRadius: 10,
  },
  verticalView: {
    width: wp('90%'),
    height: wp('15%'),
    justifyContent: 'center',
  },
  dataContainer: {
    width: wp('60%'),
    height: wp('60%'),
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 10,
  },
  dataText: {
    padding: 10,
    color: '#3d3d3d',
    fontSize: 16,
  },
  buttonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#008',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('5%'),
  },
  dataTypeStyle: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
