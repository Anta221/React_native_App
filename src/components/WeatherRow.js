import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import { Container, Content } from 'native-base';
import moment from 'moment'


export default function WeatherRow ({hour, dt, temp_min, temp,icon, temp_max,desc,  humidity}) {
    return(
        <View style={styles.view}>
            <View>
            <Image
                style={{width:60, height:60}}
                source={{
                uri: `http://openweathermap.org/img/wn/${icon}.png`,
                }}
            />
            <Text style={{fontStyle:'italic', color:'white'}}>{desc}</Text>
           
            </View>
            <View>
                <Text style={styles.whiteBold}>{moment(dt*1000).format('dddd')} at {hour.substring(11, 13)}h</Text>
                <View style={{flex:1}}>
                    <Text style={styles.white}> {'Min : ' + temp_min + '°C'} </Text>
                    <Text style={styles.white}>Max : {temp_max} °C </Text>
                    <Text style={styles.white}>humidity : {humidity} % </Text>
                </View>
              
            </View>
             <Text style={styles.temp}>{Math.round(temp)}°C</Text>
        
            
            

        </View>
    )
} 

const styles = StyleSheet.create({
    whiteBold:{
        color: '#FFF',
        fontWeight: 'bold',
        paddingBottom: 25,
        fontSize: 16
    },
    white:{
        color: '#FFF',
    },

    view:{
        backgroundColor:'#3DADF2',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#0424D9',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    temp:{
        paddingTop:28,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 29
    }

})