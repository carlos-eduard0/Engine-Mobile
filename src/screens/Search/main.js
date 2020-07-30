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
    },
     company: {
        marginTop: 15,
        alignItems: "center",
    },
    touchCompany: {
        width: 332,
        height: 110,
        backgroundColor: "#FCFCFC",
        borderRadius: 14,
        paddingHorizontal: 8,
        justifyContent: "center",
        marginVertical: 15,
    },
    infoCompany: {
        flexDirection: "row",
    },
    logoCompany: {
        width: 75,
        height: 75,
        borderRadius: 18,
        backgroundColor: "rgba(235, 235, 235, 0.5)",
    },
    headerCardCompany: {
        marginLeft: 15
    },
    titleHeaderCompany: {
        color: "#595959",
        fontFamily: 'Quicksand Bold',
        fontStyle: "normal",
        fontSize: 16,
    },
    spanCompany: {
        color: "#8c8c8c",
        fontFamily: 'Quicksand Regular',
        height: 28
    }
});