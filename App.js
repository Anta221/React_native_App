import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import  DetailsScreen from "./src/views/DetailsScreen";
import  HomeScreen from "./src/views/HomeScreen";
import  SearchScreen  from "./src/components/SearchScreen";
import { Ionicons } from '@expo/vector-icons';
import MeteoDetails from './src/views/MeteoDetails';



const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Rechercher une ville" component={SearchScreen} />
      <SearchStack.Screen name="Meteo" component={DetailsScreen} options={{ headerTintColor: '#3DADF2' }} />
      <SearchStack.Screen name="Details" component={MeteoDetails} options={{ headerTintColor: '#3DADF2' }} />
    </SearchStack.Navigator>
  );
}


const Tab = createMaterialTopTabNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition = {'bottom'}
        tabBarOptions = {{
          showIcon: true,
          showLabel: false,
          style:{height:65, backgroundColor:'#024059', borderColor:'dark#024059'},
          indicatorStyle:{
            height: 4,
            backgroundColor: '#3DADF2'
          }

        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'cloudy-night' : 'cloudy-night-outline';
            }
            else if (route.name === 'SearchCountry') {
              iconName = focused ? 'globe' : 'globe-outline';
            }

            return <Ionicons name={iconName} size={23} color={'white'} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        
    
      </Tab.Navigator>
    </NavigationContainer>
  );
}