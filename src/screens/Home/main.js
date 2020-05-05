import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container: {
        flex:1,
        paddingTop: Constants.statusBarHeight + 30,
        backgroundColor:'#2C92CD',
    },
    headerText:{
        fontSize:18,
        color:'#ffff',
        fontWeight: 'bold',
        marginLeft:20,
    },
    headerEmpresaText:{
        color:'#363636',
        fontSize:25,
    },
    empresas:{
        marginTop:30,
        paddingHorizontal:20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor:'#ffff',
        
    },
    itemCategory:{
        width:180,
        height:120,
        borderRadius:5,
        backgroundColor:'#f3f3f3',
        marginTop:30,
        marginHorizontal: 12,
    },
     empresa:{
        maxWidth:360,
        height:140,
        borderRadius:5,
        backgroundColor:'#f3f3f3',
        marginVertical: 15,
        justifyContent:'center'
    },
    propriedades:{
      flexDirection:'row',
    },
    logo:{
        backgroundColor:'#FFFFFF',
        width:90,
        height:90,
        marginLeft:15,
        borderRadius:90,
    },
    cardText:{
        marginLeft: 30,
    },
    nomeEmpresa:{
        fontWeight: 'bold',
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
});