import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Container, Content } from 'native-base';
import WeatherRow from '../components/WeatherRow';

export default App = ({route, navigation}) => {
  const { city } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
 
  if (city!== '') {
    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=10&lang=fr&units=metric&appid=8cc71886207a44a5b24be3799673b767`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  }else{
    return(
     <Text>Erreur interne</Text>
    )
  }
      
    if(typeof(data) !== undefined && data.length >= 0 ){
      return (
        <View style={{ flex: 1, padding: 24 ,  backgroundColor : '#3DADF2'}}>
          {isLoading ?  
          <Container>
            <Content contentContainerStyle={styles.center}>
              <ActivityIndicator color="#3DADF2" size="large"/>
              <Text style={{marginTop:20, color:'#3DADF2'}}>Chargement...</Text>
              </Content>
            </Container>
        
         : 
          ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
              <Text style={{ fontSize: 30, fontWeight:'bold', color: '#024059',marginBottom:20, textAlign: 'center'}}>{data.city.name}</Text>
              
              <FlatList
                data={data.list}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => ( 
                  <WeatherRow 
                  hour={item.dt_txt}
                  dt={item.dt} 
                  temp_min={item.main.temp_min}
                  temp_max={item.main.temp_max}
                  humidity={item.main.humidity}
                  temp = {item.main.temp}
                  icon ={item.weather[0].icon}
                  desc = {item.weather[0].description}
                  />
                )}
              />
            </View>
          )}
      {/*     <View style={{marginLeft:110, paddingLeft:20, marginTop:20, marginRight:50}}>
            <TouchableHighlight 
            style={{ ...styles.btn, backgroundColor: "#024059" }}
            onPress={() => navigation.navigate('Details', {data:data})}
            >
                <View style={styles.button}>
                  <Text style={{color: 'white', fontWeight:'bold', fontSize:18}}>
                    Voir plus</Text>
                </View>
            </TouchableHighlight>
          </View> */}
          
        </View>
      );
    }else{
      return (
        <View style={styles.center}>
          <Image source={require('../../assets/error.jpg')} style={styles.image}>

          </Image>
          <Text style ={{marginTop:20, fontSize: 22,  color: '#024059'}}>La ville n'existe pas</Text> 
          </View>
      )
    }
     

  
  
};

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