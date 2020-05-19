import React from 'react';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Detalhes from './src/screens/Detalhes';

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Detalhes" component={Detalhes} />
        </HomeStack.Navigator>
    )
}

function SearchStackScreen() {
    return (
        <SearchStack.Navigator screenOptions={{ headerShown: false }}>
            <SearchStack.Screen name="Search" component={Search} />
        </SearchStack.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
                <Tabs.Navigator tabBarOptions={{
                    activeTintColor: '#516a91',
                    keyboardHidesTabBar: 'true',
                }}>

                <Tabs.Screen name="Home" component={HomeStackScreen} options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
                }} />

                <Tabs.Screen name="Search" component={SearchStackScreen} options={{
                    tabBarLabel: 'Busca',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" color={color} size={size} />
                    ),
                }} />

            </Tabs.Navigator>
        </NavigationContainer>
    )
}





