import React, {useState} from 'react';
import { Text,Button, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import Config from '../style/Config'

export default function Search(){
    const [city, setText] = useState('');
    return(
        <SafeAreaView style={styles.container}>
            <TextInput
            style={styles.border}
            placeholder="Ville"
            onChangeText={city => setText(city)}
            defaultValue={city}
            />
            
            <Button 
            title="RECHERCHER"
            
            />


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    border: {
        borderWidth : 1,
        borderColor : 'blue',
        height: 55,
        width: 330,
        padding: 10,
        fontSize: 30
    },
  });