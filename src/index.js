import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar backgroundColor="#008" barStyle="light-content" />
      <Routes />
    </>
  );
}
export default App;
