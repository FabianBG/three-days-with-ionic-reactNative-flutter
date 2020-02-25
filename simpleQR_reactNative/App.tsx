/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ItemList from './src/components/ItemList';
import ItemForm from './src/components/ItemForm';
import { createStackNavigator } from '@react-navigation/stack';
import ItemDetail from './src/components/ItemDetaill';
import ItemQRFinder from './src/components/ItemQRFinder';

class App extends React.PureComponent<any> {

  private Stack = createStackNavigator();

  render() {

    return (
      <NavigationContainer>
        <this.Stack.Navigator initialRouteName="home">
          <this.Stack.Screen
            name="home"
            component={ItemList}
            options={{ title: 'HOME' }}
          />
          <this.Stack.Screen
            name="new"
            component={ItemForm}
            options={{ title: 'NEW' }}
          />
          <this.Stack.Screen
            name="desc"
            component={ItemDetail}
            options={{ title: 'DETAIL' }}
          />
          <this.Stack.Screen
            name="qr"
            component={ItemQRFinder}
            options={{ title: 'SCANER' }}
          />
        </this.Stack.Navigator>
      </NavigationContainer >
    );
  }
};

export default App;
