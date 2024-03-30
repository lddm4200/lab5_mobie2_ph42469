import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChonAnh from './bai2/view';
import ChupAnh from './bai1/view';
import { Provider } from 'react-redux';

 import store from './bai2/store';
// import store from './bai1/store';

export default function App() {
  return (

// <Provider store={store}>
//     <ChonAnh />
//   </Provider>

    <Provider store={store}>
    <ChupAnh />
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
