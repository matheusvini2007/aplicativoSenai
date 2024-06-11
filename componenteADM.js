import {View, Text, StyleSheet}
        from "react-native";

const ADM = ()=>{
    return(
        <View style={estilos.caixaAdm1}>
            <Text style={estilos.adm11}>Requerimentos</Text>

            <View style={estilos.caixaAdm2}>
            <Text style={estilos.adm12}>Notas</Text>  
            </View>

            <View style={estilos.caixaAdm3}>
            <Text style={estilos.adm13}>Frequência</Text>  
            </View>

            <View style={estilos.caixaAdm4}>
            <Text style={estilos.adm14}>Avaliações</Text>  
            </View>

            <View style={estilos.caixaAdm5}>
            <Text style={estilos.adm15}>Financeiro</Text>  
            </View>

            <View style={estilos.caixaAdm6}>
            <Text style={estilos.adm16}>Documentos</Text>  
            </View>

        </View>
        
    );
}
const estilos = StyleSheet.create({
    caixaAdm1:{
        backgroundColor: "#6079FF",
        width: 160,
        height: 120,
        borderRadius: 20,
        marginRight: 40,
        marginLeft: 16,
        marginTop: 35
        
    },
    adm11:{
        marginLeft: 12,
        marginTop: 50,
        fontSize: 20,

    },  
    caixaAdm2:{
        backgroundColor: "#6079FF",
        width: 160,
        height: 120,
        borderRadius: 20,
        marginRight: 40,
        marginLeft: 170,
        marginTop: -75
    },
    adm12:{
        marginLeft: 45,
        fontSize: 22,
        marginTop: 45
    },  

    caixaAdm3:{
        backgroundColor: "#6079FF",
        width: 160,
        height: 120,
        borderRadius: 20,
        marginRight: 40,
        marginLeft: 1,
        marginTop: 20
    },

    adm13:{
        marginLeft: 28,
        fontSize: 22,
        marginTop: 45
    },

    caixaAdm4:{
        backgroundColor: "#6079FF",
        width: 160,
        height: 120,
        borderRadius: 20,
        marginRight: 40,
        marginLeft: 170,
        marginTop: -120
    },

    adm14:{
        marginLeft: 30,
        fontSize: 22,
        marginTop: 45
    },

    caixaAdm5:{
        backgroundColor: "#6079FF",
        width: 160,
        height: 120,
        borderRadius: 20,
        marginRight: 40,
        marginLeft: 1,
        marginTop: 23
    },

    adm15:{
        marginLeft: 30,
        marginTop: 45,
        fontSize: 22,
    },

    caixaAdm6:{
        backgroundColor: "#6079FF",
        width: 160,
        height: 120,
        borderRadius: 20,
        marginRight: 40,
        marginLeft: 170,
        marginTop: -120
    },

    adm16:{
        marginLeft: 15,
        fontSize: 22,
        marginTop: 45
    }



});

export default ADM;