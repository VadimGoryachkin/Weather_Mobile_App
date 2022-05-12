import React from 'react';
import WelcomePage from './WelcomePage';
import MainApp from './MainApp';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigator(){
    return <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen
                name="WelcomeScreen"
                component={WelcomePage}
                options={{title: 'WelcomeScreen'}}
               />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{title: 'MainApp'}}
               />    
        </Stack.Navigator>
    </NavigationContainer>;
}

