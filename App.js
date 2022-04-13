import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabsBottomStack } from './src/navigation/index'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './store/reducers';

const rootReducer = combineReducers({
  allStores : reducers
}) ;

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store = {store}>
          <NavigationContainer>
      <TabsBottomStack/>
    </NavigationContainer>
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
