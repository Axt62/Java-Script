/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import {Text, View, } from 'react-native';
const App = () => {
  return <SafeAreaView style={styles.safeArea}>
    <Text>Bienvenue</Text>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  flex: 1,
  backgroundcolor: 'yellow'
});



export default App;
