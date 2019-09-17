import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Products from './pages/Products';

export default createAppContainer(
  createSwitchNavigator({
    Products,
    Home,
  }),
);
