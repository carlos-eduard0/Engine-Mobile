import React, { useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, TouchableHighlight, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import lavajato from '../../images/lavajato.png';
// import mecanica from '../../images/mecanica.png';
// import funilaria from '../../images/funilaria.png';
// import combustivel from '../../images/combustivel.png';
// import borracharia from '../../images/borracharia.png';
// import guaragem from '../../images/guaragem.png';
// import acess from '../../images/accs.png';
// import guincho from '../../images/guincho.png';
// import agendamento from '../../images/agendamento.png';
// import avatar from '../../images/avatar.png';
import styles from './main.js';


export default function Home({ navigation }) {
    const [scrollY, setScrollY] = useState(new Animated.Value(0));
    return (
        <SafeAreaView style={styles.container}>
            
                <Animated.View style={[styles.header, {
                    height: scrollY.interpolate({
                        inputRange: [150,150],
                        outputRange: [180,0],
                        extrapolate: "clamp",
                    }),
                     opacity: scrollY.interpolate({
                         inputRange: [1, 75, 170],
                         outputRange: [1, 1, 0],
                         extrapolate: "clamp",
                    })
                }]}>
                    <View style={styles.introHeader}>
                        <Text style={styles.textIntro}>Olá,</Text>
                        <Text style={styles.textSpan}>Carlos Eduardo</Text>
                    </View>
                    <View style={styles.avatarPerfil}>
                        <Feather name="user" size={24} color="#70A5FF" />
                    </View>
                </Animated.View>
          
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false} onScroll={Animated.event([{
                nativeEvent: {
                    contentOffset: { y: scrollY }
                },
            }],
                { useNativeDriver: false })}>
                <View style={styles.headerContent}>
                    <Text style={styles.titleHeaderContent}>Categorias</Text>
                </View>

                <View style={styles.categorias}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableHighlight style={styles.categoriaMec} underlayColor="black">
                            <>
                            </>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.categoriaAcess} underlayColor="black">
                            <>
                            </>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.categoriaBorracharia} underlayColor="black">
                            <>
                            </>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.categoriaFunil} underlayColor="black">
                            <>
                            </>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.categoriaLavaJato} underlayColor="black">
                            <>
                            </>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.categoriaCombustivel} underlayColor="black">
                            <>
                            </>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.categoriaGuaragem} underlayColor="black">
                            <>
                            </>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.categoriaGuincho} underlayColor="black">
                            <>
                            </>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.categoriaAgendamento} underlayColor="black">
                            <>
                            </>
                        </TouchableHighlight>
                    </ScrollView>
                </View>

                <View style={styles.company}>
                    <TouchableOpacity style={styles.touchCompany}>
                        <View style={styles.infoCompany}>
                            <View style={styles.logoCompany}></View>
                            <View style={styles.headerCardCompany}>
                                <Text style={styles.titleHeaderCompany}>Casa do Amortecedor</Text>
                                <Text style={styles.spanCompany}>Mecânica</Text>
                                <View style={styles.infoExtra}>
                                    <View style={styles.iconStar}>
                                        <FontAwesome name="star" size={18} color="#fcc453" />
                                        <Text style={styles.textStar}>5,0</Text>
                                    </View>
                                    <View style={styles.iconClock}>
                                        <AntDesign name="clockcircle" size={17} color="#71d1a7" />
                                        <Text style={styles.textClock}>7:00 AM - 5:00 PM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchCompany}>
                        <View style={styles.infoCompany}>
                            <View style={styles.logoCompany}></View>
                            <View style={styles.headerCardCompany}>
                                <Text style={styles.titleHeaderCompany}>Casa do Amortecedor</Text>
                                <Text style={styles.spanCompany}>Mecânica</Text>
                                <View style={styles.infoExtra}>
                                    <View style={styles.iconStar}>
                                        <FontAwesome name="star" size={18} color="#fcc453" />
                                        <Text style={styles.textStar}>5,0</Text>
                                    </View>
                                    <View style={styles.iconClock}>
                                        <AntDesign name="clockcircle" size={17} color="#71d1a7" />
                                        <Text style={styles.textClock}>7:00 AM - 5:00 PM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchCompany}>
                        <View style={styles.infoCompany}>
                            <View style={styles.logoCompany}></View>
                            <View style={styles.headerCardCompany}>
                                <Text style={styles.titleHeaderCompany}>Casa do Amortecedor</Text>
                                <Text style={styles.spanCompany}>Mecânica</Text>
                                <View style={styles.infoExtra}>
                                    <View style={styles.iconStar}>
                                        <FontAwesome name="star" size={18} color="#fcc453" />
                                        <Text style={styles.textStar}>5,0</Text>
                                    </View>
                                    <View style={styles.iconClock}>
                                        <AntDesign name="clockcircle" size={17} color="#71d1a7" />
                                        <Text style={styles.textClock}>7:00 AM - 5:00 PM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchCompany}>
                        <View style={styles.infoCompany}>
                            <View style={styles.logoCompany}></View>
                            <View style={styles.headerCardCompany}>
                                <Text style={styles.titleHeaderCompany}>Casa do Amortecedor</Text>
                                <Text style={styles.spanCompany}>Mecânica</Text>
                                <View style={styles.infoExtra}>
                                    <View style={styles.iconStar}>
                                        <FontAwesome name="star" size={18} color="#fcc453" />
                                        <Text style={styles.textStar}>5,0</Text>
                                    </View>
                                    <View style={styles.iconClock}>
                                        <AntDesign name="clockcircle" size={17} color="#71d1a7" />
                                        <Text style={styles.textClock}>7:00 AM - 5:00 PM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchCompany}>
                        <View style={styles.infoCompany}>
                            <View style={styles.logoCompany}></View>
                            <View style={styles.headerCardCompany}>
                                <Text style={styles.titleHeaderCompany}>Casa do Amortecedor</Text>
                                <Text style={styles.spanCompany}>Mecânica</Text>
                                <View style={styles.infoExtra}>
                                    <View style={styles.iconStar}>
                                        <FontAwesome name="star" size={18} color="#fcc453" />
                                        <Text style={styles.textStar}>5,0</Text>
                                    </View>
                                    <View style={styles.iconClock}>
                                        <AntDesign name="clockcircle" size={17} color="#71d1a7" />
                                        <Text style={styles.textClock}>7:00 AM - 5:00 PM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}