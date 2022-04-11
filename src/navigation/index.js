import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import DashboardScreen from '../screens/dashboard';
import StoresScreen from '../screens/stores';
import CartScreen from '../screens/cart';
import MenuScreen from '../screens/menu';

const DashboardStackNavigation = createStackNavigator();

const StoresStackNavigation = createStackNavigator();

const CartStackNavigation = createStackNavigator();

const MenuStackNavigation = createStackNavigator();

const TabsBottomNavigation = createMaterialBottomTabNavigator();

export const DashboardStack = ()=>{
    return (
        <DashboardStackNavigation.Navigator>
            <DashboardStackNavigation.Screen name='Dashboard' component={DashboardScreen} />
        </DashboardStackNavigation.Navigator>
    )
}

export const StoresStack = ()=>{
    return (
        <StoresStackNavigation.Navigator>
            <StoresStackNavigation.Screen name='Stores' component={StoresScreen} />
        </StoresStackNavigation.Navigator>
    )
}

export const CartStack = () =>{
    return(
        <CartStackNavigation.Navigator>
            <CartStackNavigation.Screen name='Cart' component={CartScreen} />
        </CartStackNavigation.Navigator>
    )
}

export const MenuStack = ()=>{
    return(
    <MenuStackNavigation.Navigator>
        <MenuStackNavigation.Screen name='Menu' component={MenuScreen} />
    </MenuStackNavigation.Navigator>
    )
}

export const TabsBottomStack = ()=>{
    return(
    <TabsBottomNavigation.Navigator>
        <TabsBottomNavigation.Screen name='Dashboard' component={DashboardStack} />
        <TabsBottomNavigation.Screen name='Stores' component={StoresStack} />
        <TabsBottomNavigation.Screen name='Cart' component={CartStack} />
        <TabsBottomNavigation.Screen name='Menu' component={MenuStack} />
    </TabsBottomNavigation.Navigator>
    )
}