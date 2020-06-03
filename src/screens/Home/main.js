import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop: Constants.statusBarHeight,
        
    },
    header: {
        flexDirection: "row",
        marginHorizontal: 30,
        justifyContent: "space-between",
       

    },
    textHeader: {
        fontFamily: "Baloo Thambi 2 Bold",
        overflow: "visible",
        color: "#019ece",
        fontSize: 37,
        letterSpacing: 0,
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#EBEBEB",
    },
    categorias: {
        marginTop: 30,
    },
    lavajato: {
        width: 209,
        height: 170,
        overflow: "visible",
        borderRadius: 20,
        backgroundColor: "#1b9dbe",
        marginLeft: 20,
    },
    mecanica: {
        width: 209,
        height: 170,
        overflow: "visible",
        borderRadius: 20,
        backgroundColor: "#019ece",
        marginHorizontal: 20
    },
    funilaria: {
        width: 209,
        height: 170,
        overflow: "visible",
        borderRadius: 20,
        backgroundColor: "#0e99cf",

    },
    gasolina: {
        width: 209,
        height: 170,
        overflow: "visible",
        borderRadius: 20,
        backgroundColor: "#1cabcd",
        marginHorizontal: 20
    },
    borracharia: {
        width: 209,
        height: 170,
        overflow: "visible",
        borderRadius: 20,
        backgroundColor: "#38aedd",
    },
    guaragem: {
        width: 209,
        height: 170,
        overflow: "visible",
        borderRadius: 20,
        backgroundColor: "#4ab3e7",
        marginHorizontal: 20
    },
    acess: {
        width: 209,
        height: 170,
        overflow: "visible",
        borderRadius: 20,
        backgroundColor: "#349ebf",
    },
    guincho: {
        width: 209,
        height: 170,
        overflow: "visible",
        borderRadius: 20,
        backgroundColor: "#32a5c0",
        marginHorizontal: 20
    },
    agendamento: {
        width: 209,
        height: 170,
        overflow: "visible",
        borderRadius: 20,
        backgroundColor: "#30adc1",
        marginRight: 20
    },
    propriedadesCategory: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconCategory: {
        width: 110,
        height: 110,

    },
    textIcon: {
        marginTop: 5,
        color: "#ffff",
        fontFamily: "Baloo Thambi 2 Bold",
        fontSize: 18
    },
    empresas: {
        marginHorizontal: 20,
        marginTop: 40,
    },
    textEmpresas: {
        fontFamily: "Baloo Thambi 2 Bold",
        overflow: "visible",
        color: "#434546",
        fontSize: 18,
        letterSpacing: 0,
    },
    itemEmpresa: {
        backgroundColor: 'red',
        width: 50,
        height: 80,
    },
    empresa: {
        width: 350,
        height: 100,
        borderRadius: 5,
        borderColor:"#f3f3f3",
        borderWidth:1,
        marginVertical: 15,
        justifyContent: 'center'
    },
    infos: {
        flexDirection: 'row',
    },
    logo:{
        backgroundColor:'#F7F7F7',
        width:60,
        height:60,
        marginLeft:15,
        borderRadius:90,
    },
    cardText:{
        marginLeft: 30,
    },
    nomeEmpresa:{
        fontWeight: 'bold',
        color:'#484a47',
        fontSize: 15,
    },
    tipoService:{
        color:'#9c9c9c',
    },

})
