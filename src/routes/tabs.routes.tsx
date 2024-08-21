import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { InicioScreen } from '../screens/InicioScreen/Index';
import { LoginScreen } from '../screens/LoginScreen/Login';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="InicioScreen">
                <Stack.Screen name="InicioScreen" component={InicioScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
