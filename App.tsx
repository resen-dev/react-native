import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './navigation/main-tabs';

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs></MainTabs>
    </NavigationContainer>
  );
}
