import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
const Tabs = createBottomTabNavigator();
import Home from './src/screens/Home';
import Perfil from './src/screens/Perfil';
import Search from './src/screens/Search';
export default function Routes() {
    return (
        <NavigationContainer>
            <Tabs.Navigator initialRouteName="Feed" tabBarOptions={{
                activeTintColor: '#516a91',
                keyboardHidesTabBar:'true',
            }}>
                <Tabs.Screen name="Home" component={Home} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
                }}
                />
                <Tabs.Screen name="Search" component={Search} options={{
                    tabBarLabel: 'Pesquisa',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" color={color} size={size} />
                    ),
                }}
                />

                <Tabs.Screen name="Registos" component={Perfil} options={{
                    tabBarLabel: 'Registros',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="bookmark" color={color} size={size} />
                    ),
                }}
                />
                <Tabs.Screen name="Perfil" component={Perfil} options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    ),
                }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}




