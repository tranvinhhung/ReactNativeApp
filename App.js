/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {publicRouter} from '~/router';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {publicRouter.map((value,index) => {
          return (
            <Drawer.Screen key={index} name={value.path} component={value.componnent} />
          );
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
