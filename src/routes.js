import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import QRCodeRead from './pages/QRCodeRead';
import DataScreen from './pages/DataScreen';
import QRCodeGenerator from './pages/QRCodeGenerator';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home: {
      screen: Home,
    },
    QRCodeRead: {
      screen: QRCodeRead,
    },
    DataScreen: {
      screen: DataScreen,
    },
    QRCodeGenerator: {
      screen: QRCodeGenerator,
    },
  })
);

export default Routes;
