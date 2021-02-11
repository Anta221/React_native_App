import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Container, Content } from 'native-base';
import WeatherRow from '../components/WeatherRow';

export default function CountryDetails ({route, navigation}){
    const { name } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
   
        useEffect(() => {
          fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, []);
 
        console.log(data)
    
}

const styles = StyleSheet.create({
    center:{
      flex: 1, justifyContent: 'center', alignItems: 'center' 
    },     
    btn:{
      backgroundColor: "#F194FF",
      borderRadius: 15,
      padding: 10,
      elevation: 2,
      marginTop:20,
      width:100,
      height:50,
      justifyContent: 'center', alignItems: 'center' 
    }
  })