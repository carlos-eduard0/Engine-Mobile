import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        paddingHorizontal:10
    },
    perfil:{
       backgroundColor:"#ffff",
       width:400,
       height:140,
       paddingHorizontal:20,
       flexDirection:"row",
       shadowColor:"#000",
       alignItems:"center",
       justifyContent:"center"
           
    },
    logoEmpresa:{
        width:90,
        height:90,
        backgroundColor:"#f3f3f3",
        borderRadius:60,
    },
    infos:{
        margin:0,
        padding:0,
        marginHorizontal:20
    },
    nomeEmpresa:{
        fontFamily: "Baloo Thambi 2 Bold",
        overflow: "visible",
        color: "#535353",
        fontSize: 22,
        letterSpacing: 0,
    },
    categoria:{
        fontFamily: "Baloo Thambi 2 Regular",
        overflow: "visible",
        color: "#535353",
        letterSpacing: 0,
        fontSize:16,
    },
    infosCategStar:{
        flexDirection:"row",
        alignItems:"center"
    },
    star:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    numberStar:{
        fontFamily: "Baloo Thambi 2 Bold",
        overflow: "visible",
        color: "#FFD765",
        fontSize: 17,
        letterSpacing: 0,
    },
    icon:{
        position:"relative",
        top:20,
    },
    services:{
      backgroundColor:"#ffff",
      marginTop:12,
      flex:1,
      width:400,
      paddingHorizontal:30
    },
    headerServices:{
        marginTop:20,
        fontFamily: "Baloo Thambi 2 Bold",
        overflow: "visible",
        color: "#FFD765",
        fontSize: 17,
        letterSpacing: 0,
    },
    txtHeader:{
        fontFamily: "Baloo Thambi 2 Bold",
        overflow: "visible",
        color: "#535353",
        fontSize: 21,
        letterSpacing: 0,
        borderBottomColor:"#f3f3f3",
        borderBottomWidth:1,
        height:55
    },
    itemService:{
        marginTop:20
    },
    tituloServiceText:{
        fontFamily: "Baloo Thambi 2 Regular",
        overflow: "visible",
        color: "#4585E8",
        fontSize: 18,
        letterSpacing: 0,
        height:30,
    },
    descText:{
        fontFamily: "Baloo Thambi 2 Regular",
        overflow: "visible",
        color: "#95979A",
        fontSize: 14,
        letterSpacing: 0,
        textAlign:"left",
    },
    valor:{
        height:50,
        borderBottomColor:"#f3f3f3",
        borderBottomWidth:1,
    },
    valorText:{
        marginTop:8,
        fontFamily: "Baloo Thambi 2 Bold",
        overflow: "visible",
        color: "#525252",
        fontSize: 18,
        letterSpacing: 0,
        textAlign:"left",
        
    }
    
});