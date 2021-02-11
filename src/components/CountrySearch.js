import React, {useState} from 'react';
import { Text,Button, View, TextInput, StyleSheet, Alert, TouchableHighlight, Modal} from 'react-native';
import { Container, Content  } from 'native-base';


  export default function SearchCountryScreen({navigation}) {
    const [country, setText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    return (
          <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
              <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Le pays est obligatoire!</Text>

                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                      onPress={() => {setModalVisible(!modalVisible);}}
                    >
                    <Text style={styles.textStyle}>Ok</Text>
                    </TouchableHighlight>
                </View>
              </View>
            </Modal>
          
              <TextInput style={styles.form}
              style={styles.border}
              placeholder="Pays"
              onChangeText={name => setText(name)}
              defaultValue={country}
              />

            <TouchableHighlight 
            style={{ ...styles.btn, backgroundColor: "#024059" }}
            onPress={() => country? navigation.navigate('CountryDetails', {country:country}) : setModalVisible(true)}>
                    <View style={styles.button}>
                        <Text style={{color: 'white', fontWeight:'bold', fontSize:18}}>RECHERCHER</Text>
                    </View>
            </TouchableHighlight>
          </Content>

      </Container>
      );
  }

  const styles = StyleSheet.create({
    container:{
       
    },
    border: {
        borderWidth : 1,
        borderColor : '#024059',
        height: 55,
        width: 330,
        padding: 10,
        fontSize: 30,
        marginBottom:50
    },
    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      },
      form: {
        width: '100%'
      },
      item: {}, 
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      btn:{
        backgroundColor: "#F194FF",
        borderRadius: 15,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });
