import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#70A5FF',
    },
    gradiente: {
        left: 0,
        right: 0,
        top: 0,
    },
    header: {
        marginHorizontal: 25,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'

    },
    informacoes: {
        flexDirection: 'row',
        right: 35,
        bottom: 15,
        width: 250,
        // justifyContent: "center",
        alignItems: 'center'
    },
    introHeader: {
        justifyContent: 'center',
        height: 179,
        marginLeft: 8
    },
    textIntro: {
        color: '#ffff',
        fontSize: 18,
        fontFamily: 'Quicksand Bold',
        letterSpacing: 0,
        fontStyle: "normal",
        maxWidth: 200
    },
    textSpan: {
        color: '#ffff',
        fontSize: 18,
        fontFamily: 'Quicksand Regular',
        letterSpacing: 0,
        fontStyle: "normal",
        marginTop: 2,
        maxWidth: 200
    },
    textNota: {
        color: '#ffff',
        fontSize: 15,
        fontFamily: 'Quicksand Regular',
        marginLeft: 5,
        marginBottom: 3
    },
    avatarPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#ffff",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 5, 
        // borderColor: '#c0392b'
    },
    avaliacao: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 0
    },
    content: {
        
        backgroundColor: "#F5F5F5",
        borderTopRightRadius: 33,
    },
    headerContent: {
        marginTop: 30,
        marginLeft: 40
    },
    titleHeaderContent: {
        fontFamily: "Baloo Thambi 2 Bold",
        color: "rgba(0, 0, 0, 0.63)",
        fontSize: 23,
        fontStyle: "normal",
        letterSpacing: 0,
        overflow: "visible",
    },
    categorias: {
        marginTop: 20,
        alignItems: "center"
    },
    categoriaMec: {
        width: 87,
        height: 90,
        overflow: "visible",
        backgroundColor: "#fcfcfc",
        borderRadius: 20,
        marginHorizontal: 28,
    },
    categoriaAcess: {
        width: 87,
        height: 90,
        overflow: "visible",
        backgroundColor: "#fcfcfc",
        borderRadius: 20,
    },
    categoriaBorracharia: {
        width: 87,
        height: 90,
        overflow: "visible",
        backgroundColor: "#fcfcfc",
        borderRadius: 20,
        marginHorizontal: 28,
    },
    categoriaFunil: {
        width: 87,
        height: 90,
        overflow: "visible",
        backgroundColor: "#fcfcfc",
        borderRadius: 20,
    },
    categoriaLavaJato: {
        width: 87,
        height: 90,
        overflow: "visible",
        backgroundColor: "#fcfcfc",
        borderRadius: 20,
        marginHorizontal: 28,
    },
    categoriaCombustivel: {
        width: 87,
        height: 90,
        overflow: "visible",
        backgroundColor: "#fcfcfc",
        borderRadius: 20,
    },
    categoriaGuaragem: {
        width: 87,
        height: 90,
        overflow: "visible",
        backgroundColor: "#fcfcfc",
        borderRadius: 20,
        marginHorizontal: 28,
    },
    categoriaGuincho: {
        width: 87,
        height: 90,
        overflow: "visible",
        backgroundColor: "#fcfcfc",
        borderRadius: 20,
    },
    categoriaAgendamento: {
        width: 87,
        height: 90,
        overflow: "visible",
        backgroundColor: "#fcfcfc",
        borderRadius: 20,
        marginHorizontal: 28,
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
    },

    infoExtra: {
        justifyContent: "space-around",
    },
    textStar: {
        color: '#70A5FF',
        fontFamily: 'Baloo Thambi 2 Bold',
        fontStyle: "normal",
        fontSize: 14,
        marginHorizontal: 5
    },
    iconClock: {
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 20,
    },
    textClock: {
        color: "#595959",
        fontFamily: 'Baloo Thambi 2 Bold',
        fontStyle: "normal",
        fontSize: 14,
        marginLeft: 5
    },
    botao:{
        backgroundColor: '#70A5FF',
        position:'absolute',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent:'center',
        bottom: 25,
        right: 25
    }

})
