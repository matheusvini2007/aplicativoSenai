import { StyleSheet, Text, View, Image} from 'react-native';
import {StatusBar} from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import ADM from './componenteADM';

export default function TelaAdministrativa({navigation}) {
    return (
        <View style={estilos.container}>
            <View style={estilos.caixa1Topo}>
                    <View style={estilos.cxPessoa}>
                        <Ionicons
                            name="person"
                            size={40}
                            color="#c17b7b"
                        />
                    </View>
                </View>
                    <View style={estilos.cxBemVindo}>
                        <Text style={{color:"white"}}>
                            Bem vindo,
                        </Text>
                        <Text style={{color:"white", 
                                      fontSize: 20,
                                      fontWeight: "bold"}}>
                            Fulano de Tal
                        </Text>
                    </View>
                    <View>
                        <ADM/>
                    </View>

                    <View style={estilos.imagemContainer}>
                    <Image
                        source={require('./assets/logo_senai.png' )}
                        style={estilos.imagem}
                    />
                    </View> 
                    
            </View>

    );
}        

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3850D2',
    },
    cxPessoa:{
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 100,
        marginLeft: 50,
        flexDirection: 'row'
        
    },
    caixa1Topo:{
        flexDirection: "row",
        width: "100%",
        marginTop: 50,
        marginLeft:200
    },

    cxBemVindo: {
        width: '50%',
        marginTop: -50,
        marginLeft: 35
    },  
    imagemContainer: {
        marginTop:120,
      },
      imagem: {
        width: 150,
        height: 150,
        marginTop: 270,
        marginLeft: 110
      },
});