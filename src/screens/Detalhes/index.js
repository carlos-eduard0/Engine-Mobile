import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text, ScrollView, TouchableOpacity, TouchableHighlight, Animated } from 'react-native';
import api from '../../services/api';


import styles from './main.js';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function Detalhes({ navigation, route }) {

    const [scrollY, setScrollY] = useState(new Animated.Value(0));
    const [services, setServices] = useState([]);
    const [categoria, setCategoria] = useState('n');
    const [empresa, setEmpresa] = useState({nomeFantasia:''});

    const {id} = route.params.id;
    const {id_empresa} = route.params;

    useEffect(() => {
        api.post('/empresa/select', {
            id: id_empresa
        })
        .then(response => {
            setEmpresa(response.data.empresa);
        })
    }, []);



    async function loadServices(categoria){

        const response = await api.get('/servico/empresa', {
            headers:{
                id_empresa:id_empresa
            }
        });

        setServices(response.data.servicos);
    }

    useEffect(() => {
        loadServices(categoria);
    }, [categoria]);


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
                    <View style={styles.informacoes}>
                        <View style={styles.avatarPerfil}>
                            <Feather name="user" size={24} color="#70A5FF" />
                        </View>
                        <View style={styles.introHeader}>
                            <Text style={styles.textIntro}>{empresa.nomeFantasia}</Text>
                            <Text style={styles.textSpan}>{empresa.segmento}</Text>
                        </View>
                    </View>

                    <View style={styles.avaliacao}>
                        <FontAwesome name="star" size={18} color="#ecf0f1" />
                        <Text style={styles.textNota}>5,0</Text>
                    </View>

                </Animated.View>
          
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false} onScroll={Animated.event([{
                nativeEvent: {
                    contentOffset: { y: scrollY }
                }, }], { useNativeDriver: false })}>
                <View>
                    <View style={styles.headerContent}>
                        <Text style={styles.titleHeaderContent}>Serviços</Text>
                    </View>

                    <View style={styles.company}>
                        <FlatList
                            data={services}
                            keyExtractor={service => String(service.id)}
                            extraData={categoria}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item: service}) => (
                                <TouchableOpacity style={styles.touchCompany}>
                                    <View style={styles.infoCompany}>
                                        <View style={styles.headerCardCompany}>
                                            <Text style={styles.titleHeaderCompany}>{service.nome_servico}</Text>
                                            <Text style={styles.spanCompany}>{service.descricao}</Text>
                                            <View style={styles.infoExtra}>
                                                <Text style={styles.textStar}>R$ 5,00</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>

                <View>                
                    <View style={styles.headerContent}>
                        <Text style={styles.titleHeaderContent}>Produtos</Text>
                    </View>

                    <View style={styles.company}>
                        <FlatList
                            data={services}
                            keyExtractor={service => String(service.id)}
                            extraData={categoria}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item: service}) => (
                                <TouchableOpacity style={styles.touchCompany}>
                                    <View style={styles.infoCompany}>
                                        <View style={styles.headerCardCompany}>
                                            <Text style={styles.titleHeaderCompany}>{service.nome_servico}</Text>
                                            <Text style={styles.spanCompany}>{service.descricao}</Text>
                                            <View style={styles.infoExtra}>
                                                <Text style={styles.textStar}>R$ 5,00</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>                
            </ScrollView>

            <View style={styles.botao}>
                <FontAwesome name="location-arrow" size={30} color="#ecf0f1" borderColor='#e74c3c' borderWidth={20} />
            </View>
        </SafeAreaView>
    );
}