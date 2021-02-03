import { Container, Content, Form, Input, Label, Item } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Search from './src/components/Search'



const styles = StyleSheet.create({
  container: {},
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  form: {
    width: '100%'
  },
  item: {}
});

const Screen = () => (
  <Container style={styles.container}>
    <Content contentContainerStyle={styles.content}>
    
      <Search style={styles.form}/>
    </Content>
  </Container>
);

export default Screen;
