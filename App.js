/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {setMessage} from './src/redux/reducers/testReducer';
import {unwrapResult} from '@reduxjs/toolkit';
import {handleTestApi} from './src/redux/reducers/testReducer';
import {handleGetOneAnime} from './src/redux/reducers/getOneAnime';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home/Home';
import Login from './src/components/Login/Login';
const Stack = createNativeStackNavigator();
const App = () => {
 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chuphinh" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
