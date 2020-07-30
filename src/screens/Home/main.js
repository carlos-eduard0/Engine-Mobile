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
        justifyContent: "space-between",

    },
    introHeader: {
        justifyContent: 'center',
        height: 179,
        marginLeft: 8
    },
    textIntro: {
        color: '#ffff',
        fontSize: 33,
        fontFamily: 'Quicksand Regular',
        letterSpacing: 0,
        fontStyle: "normal",
    },
    textSpan: {
        color: '#ffff',
        fontSize: 30,
        fontFamily: 'Quicksand Bold',
        letterSpacing: 0,
        fontStyle: "normal",
        marginTop: 2,
    },
    avatarPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#ffff",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        
        backgroundColor: "#F5F5F5",
        borderTopLeftRadius: 33,
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
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    iconStar: {
        alignItems: "center",
        flexDirection: "row",
    },
    textStar: {
        color: "#595959",
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


})
