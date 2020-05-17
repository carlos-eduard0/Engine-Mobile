import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#516a91',
        paddingTop: Constants.statusBarHeight + 20,
    },
    categorias:{
        flex:8,
        alignItems:"center",
        backgroundColor:'#ffff',
    },
    searchForm:{
        zIndex:5,
        height:80,
        flexDirection:'row',
        marginHorizontal:12
    },
    searchInput:{
        flex:1,
        height:50,
        backgroundColor:'#ffff',
        color:'#333',
        borderRadius:25,
        paddingHorizontal:20,
        fontSize:16,
    },
    loadButton:{
        width:50,
        height:50,
        backgroundColor:"#ffff",
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:15,
    },
    icon:{
        width:60,
        height:60,
        marginRight:15
    },
    itemCategory:{
        width:340,
        height:100,
        backgroundColor:'#f2f2f2',
        borderRadius:5,
        marginVertical:13,
        marginHorizontal:15,
        justifyContent:'space-around',
     
    },
    propriedadesCategory:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
      },
      textCategory:{
        fontWeight:'bold',
        fontSize:18,
        position:'relative',
        color:'#5e5e5e',
        right:30
    },
    headerCategory:{
       marginLeft:15,
       marginTop:20
    },
    headerCategoryText:{
        fontWeight:'700',
        fontSize:18,
        color:'#5e5e5e',
    }
});