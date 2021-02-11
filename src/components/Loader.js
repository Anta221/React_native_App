import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Container, Content } from 'native-base';
import React from 'react';

export default function Loader() {

    return(
        <Container>
          <Content contentContainerStyle={styles.center}>
            <ActivityIndicator color="#3DADF2" size="large"/>
            <Text style={{marginTop:20, color:'#3DADF2'}}>Chargement...</Text>
          </Content>
        </Container>
  
        
      )
  }


const styles = StyleSheet.create({
    center:{
      flex: 1, justifyContent: 'center', alignItems: 'center' 
    },
    TopCenter:{
      flex: 1, alignItems: 'center' 
    }
  })