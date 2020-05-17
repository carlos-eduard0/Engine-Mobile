import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#516a91',
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        marginLeft:15,
    },  
    textHeader:{
        color:"#ffff",
        fontSize:18,
        fontWeight:'700'
    },
    headerEmpresas:{
        marginTop:15,
        marginBottom:10,
        position:'relative',
        right:100
    },
    textHeaderEmpresas:{
        color:"#999",
        fontSize:16,
        fontWeight:'700'
    },
    containerTab:{
        height:150
    },
    itemCategory:{
        width:190,
        height:70,
        backgroundColor:'#ffff',
        borderRadius:5,
        marginTop:20,
        marginHorizontal:15,
        justifyContent:'center',
        alignItems:'center'
    },
    empresas:{
        flex:4.5,
        alignItems:"center",
        backgroundColor:'#ffff',
        // borderTopLeftRadius: 12,
        // borderTopRightRadius: 12,
    },
    empresa:{
        width:340,
        height:100,
        borderRadius:5,
        backgroundColor:'#f2f2f2',
        marginVertical: 15,
        justifyContent:'center'
    },

    propriedades:{
      flexDirection:'row',
    },
    propriedadesCategory:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10
      },
    logo:{
        backgroundColor:'#FFFFFF',
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
    empresaButton:{
        position:'relative',
        top:20,
        flexDirection:'row',
        alignItems:'center',
    },
    empresaButtonText:{
        marginRight:5,
        fontWeight:'bold',
        color:'#2C92CD'
    },
    icon:{
        width:50,
        height:50,
        marginRight:15
    },
    textCategory:{
        fontWeight:'bold',
        fontSize:17,
        color:'#5e5e5e'
    },
})
  