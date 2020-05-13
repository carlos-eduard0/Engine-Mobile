import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { ceil } from 'react-native-reanimated';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#6aa1f4',
        paddingTop: Constants.statusBarHeight + 30,
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
    containerTab:{
        flex:1
    },
    itemCategory:{
        width:190,
        height:70,
        backgroundColor:'#ffff',
        borderRadius:5,
        marginTop:25,
        marginHorizontal:15,
        justifyContent:'center',
        alignItems:'center'
    },
    empresas:{
        flex:4,
        alignItems:"center",
        backgroundColor:'#ffff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
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
        fontSize:17
    },
})
  