import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import QRCodeRead from './pages/QRCodeRead';
import DataScreen from './pages/DataScreen';

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
  })
);

export default Routes;
