import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Books from './pages/main';
import CreateBook from './pages/createBook';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: 'LOGIN',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{
            title: 'Cadastrar',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="main"
          component={Books}
          options={{
            title: 'Livros',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#E9DEEB',
            },
          }}
        />
        <Stack.Screen
          name="createBook"
          component={CreateBook}
          options={{
            title: 'CRIAR LIVRO',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#2A2F4F',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#E9DEEB',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

